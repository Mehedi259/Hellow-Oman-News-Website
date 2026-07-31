import { fetchAPI } from '@/lib/api';
import postsData from './backup/posts.json';

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  excerpt?: string;
  content?: string;
}

export const CATEGORIES = [
  "প্রচ্ছদ",
  "প্রবাস",
  "সর্বশেষ",
  "বাংলাদেশ",
  "আন্তর্জাতিক",
  "মধ্যপ্রাচ্য",
  "রাজনীতি",
  "অর্থনীতি",
  "শিক্ষা",
  "খেলাধুলা",
  "বিনোদন",
  "লাইফস্টাইল",
];

export function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    const bnNums = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    
    let day = d.getDate().toString();
    let year = d.getFullYear().toString();
    
    day = day.split('').map(n => bnNums[parseInt(n)] || n).join('');
    year = year.split('').map(n => bnNums[parseInt(n)] || n).join('');
    
    return `${day} ${months[d.getMonth()]} ${year}`;
  } catch (e) {
    return dateStr;
  }
}

// Helper to assign a relevant category based on keywords, defaulting to a rotating list
function getCategoryForPost(title: string, index: number) {
  if (title.includes('ওমান') || title.includes('প্রবাস') || title.includes('মাস্কাট') || title.includes('সালালাহ') || title.includes('বারকা') || title.includes('সুইক')) return 'প্রবাস';
  if (title.includes('বাংলাদেশ') || title.includes('ঢাকা') || title.includes('সিলেট') || title.includes('চট্টগ্রাম') || title.includes('উত্তরা')) return 'বাংলাদেশ';
  if (title.includes('সৌদি') || title.includes('দুবাই') || title.includes('আমিরাত') || title.includes('কাতার') || title.includes('শারজাহ')) return 'মধ্যপ্রাচ্য';
  if (title.includes('ফুটবল') || title.includes('ক্রিকেট') || title.includes('বিশ্বকাপ')) return 'খেলাধুলা';
  
  const cats = ["সর্বশেষ", "আন্তর্জাতিক", "রাজনীতি", "অর্থনীতি"];
  return cats[index % cats.length];
}

const backupPosts: NewsArticle[] = postsData.map((post, index) => {
  // Fix the HTML entities in excerpt and content if any
  let cleanDescription = (post.description || "").replace(/&#160;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"');
  
  // If description is empty or too short, fallback
  if (!cleanDescription || cleanDescription.trim().length < 10) {
    cleanDescription = (post.content || "").replace(/<[^>]*>?/gm, '').substring(0, 150) + "...";
  }

  return {
    id: post.id.toString(),
    title: post.title.replace(/(&amp;)?(lsquo|rsquo|#039);/g, "'").replace(/(&amp;)?(ldquo|rdquo|quot);/g, '"'),
    category: getCategoryForPost(post.title, index),
    image: post.localImage || "/images/hero_news_oman_1783894879641.png",
    date: formatDate(post.pubDate) || "১৩ জুলাই ২০২৬",
    excerpt: cleanDescription.substring(0, 200),
    content: post.content || post.description || "",
  };
});

// Map backend Post model to frontend NewsArticle
const mapToNewsArticle = (post: any): NewsArticle => {
  return {
    id: post.slug || post._id,
    title: post.title,
    category: post.category?.name || "সর্বশেষ",
    image: post.image || "/images/hero_news_oman_1783894879641.png",
    date: formatDate(post.createdAt || new Date().toISOString()),
    excerpt: post.excerpt || (post.content ? post.content.substring(0, 150) + "..." : ""),
    content: post.content || "",
  };
};

export async function getAllNews(): Promise<NewsArticle[]> {
  try {
    const res = await fetchAPI('/posts?status=published');
    let apiPosts: NewsArticle[] = [];
    if (res.success && res.data) {
      apiPosts = res.data.map(mapToNewsArticle);
    }
    return [...apiPosts, ...backupPosts];
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return backupPosts;
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const res = await fetchAPI(`/posts/slug/${slug}`);
    if (res.success && res.data) {
      return mapToNewsArticle(res.data);
    }
  } catch (error) {
    console.error("Failed to fetch news by slug:", error);
  }
  
  // Fallback to backup data
  const backupPost = backupPosts.find(p => p.id === slug);
  return backupPost || null;
}

// Helper functions for specific sections (you can modify backend to support these filters directly later)
export async function getTopNews(): Promise<NewsArticle | null> {
  const news = await getAllNews();
  return news.length > 0 ? news[0] : null;
}

export async function getTrendingNews(): Promise<NewsArticle[]> {
  const news = await getAllNews();
  return news.slice(1, 10);
}

export async function getLatestNews(): Promise<NewsArticle[]> {
  const news = await getAllNews();
  return news.slice(0, 15); // get first 15 for latest
}

