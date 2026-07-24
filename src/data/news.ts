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

// Helper to assign a relevant category based on keywords, defaulting to a rotating list
function getCategoryForPost(title: string, index: number) {
  if (title.includes('ওমান') || title.includes('প্রবাস') || title.includes('মাস্কাট') || title.includes('সালালাহ') || title.includes('বারকা') || title.includes('সুইক')) return 'প্রবাস';
  if (title.includes('বাংলাদেশ') || title.includes('ঢাকা') || title.includes('সিলেট') || title.includes('চট্টগ্রাম') || title.includes('উত্তরা')) return 'বাংলাদেশ';
  if (title.includes('সৌদি') || title.includes('দুবাই') || title.includes('আমিরাত') || title.includes('কাতার') || title.includes('শারজাহ')) return 'মধ্যপ্রাচ্য';
  if (title.includes('ফুটবল') || title.includes('ক্রিকেট') || title.includes('বিশ্বকাপ')) return 'খেলাধুলা';
  
  const cats = ["সর্বশেষ", "আন্তর্জাতিক", "রাজনীতি", "অর্থনীতি"];
  return cats[index % cats.length];
}

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    const bnNums = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    
    let day = d.getDate().toString();
    let year = d.getFullYear().toString();
    
    // convert numbers to bangla
    day = day.split('').map(n => bnNums[parseInt(n)] || n).join('');
    year = year.split('').map(n => bnNums[parseInt(n)] || n).join('');
    
    return `${day} ${months[d.getMonth()]} ${year}`;
  } catch (e) {
    return dateStr;
  }
}

const allPosts: NewsArticle[] = postsData.map((post, index) => {
  // Fix the HTML entities in excerpt and content if any
  let cleanDescription = (post.description || "").replace(/&#160;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"');
  
  // If description is empty or too short, fallback
  if (!cleanDescription || cleanDescription.trim().length < 10) {
    cleanDescription = (post.content || "").replace(/<[^>]*>?/gm, '').substring(0, 150) + "...";
  }

  return {
    id: post.id.toString(),
    title: post.title.replace(/&amp;lsquo;|&amp;rsquo;|&ldquo;|&rdquo;/g, "'"),
    category: getCategoryForPost(post.title, index),
    image: post.localImage || "/images/hero_news_oman_1783894879641.png",
    date: formatDate(post.pubDate) || "১৩ জুলাই ২০২৬",
    excerpt: cleanDescription.substring(0, 200),
    content: post.content || post.description || "",
  };
});

export const TOP_NEWS: NewsArticle = allPosts[0] || {
  id: "1",
  title: "ওমানে সিলেট টু ওমান প্রবাসী ফোরামের আলোচনা সভা অনুষ্ঠিত",
  category: "প্রবাস",
  image: "/images/hero_news_oman_1783894879641.png",
  date: "১৩ জুলাই ২০২৬",
  excerpt: "ওমানের রাজধানী মাস্কাটে সিলেট টু ওমান প্রবাসী ফোরামের এক বিশেষ আলোচনা সভা অনুষ্ঠিত হয়েছে।",
  content: "ওমানের রাজধানী মাস্কাটে সিলেট টু ওমান প্রবাসী ফোরামের এক বিশেষ আলোচনা সভা অনুষ্ঠিত হয়েছে।",
};

export const TRENDING_NEWS: NewsArticle[] = allPosts.slice(1, 10);

export const LATEST_NEWS: NewsArticle[] = allPosts.slice(10);
