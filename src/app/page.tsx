import Header from "@/components/Header";
import NewsTicker from "@/components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import BreakingNews from "@/components/BreakingNews";
import { getLatestNews, getTopNews, getTrendingNews } from "@/data/news";

export default async function Home() {
  const latestNews = await getLatestNews();
  const trendingNews = await getTrendingNews();
  const topNews = await getTopNews();

  return (
    <>
      <Header />
      {latestNews.length > 0 && <BreakingNews article={latestNews[0]} />}
      <NewsTicker allTickerNews={[...(topNews ? [topNews] : []), ...trendingNews]} />
      <main className="flex-1">
        <HeroSection topNews={topNews} trendingNews={trendingNews} />
        
        {/* Ad Space Placeholder */}
        <div className="container mx-auto px-4 my-8">
          <div className="bg-slate-200 dark:bg-slate-800 w-full h-[90px] md:h-[120px] flex items-center justify-center rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
            <span className="text-slate-400 font-semibold text-sm">বিজ্ঞাপন স্থান</span>
          </div>
        </div>

        <CategorySection 
          title="সর্বশেষ সংবাদ" 
          articles={latestNews} 
          categoryLink="/category/%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%B6%E0%A7%87%E0%A6%B7"
        />
        
        <CategorySection 
          title="প্রবাস" 
          articles={trendingNews} 
          categoryLink="/category/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AC%E0%A6%BE%E0%A6%B8"
        />
      </main>
      <Footer />
    </>
  );
}
