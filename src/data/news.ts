import { fetchAPI } from '@/lib/api';

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

// Map backend Post model to frontend NewsArticle
const mapToNewsArticle = (post: any): NewsArticle => {
  return {
    id: post.slug || post.id,
    title: post.title,
    category: post.category?.name || "সর্বশেষ",
    image: post.image || "/images/hero_news_oman_1783894879641.png",
    date: formatDate(post.created_at || new Date().toISOString()),
    excerpt: post.excerpt || (post.content ? post.content.substring(0, 150) + "..." : ""),
    content: post.content || "",
  };
};

export async function getAllNews(): Promise<NewsArticle[]> {
  try {
    const res = await fetchAPI('/posts?status=published');
    if (res.success && res.data) {
      return res.data.map(mapToNewsArticle);
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
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
  return null;
}

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
  return news.slice(0, 15);
}
