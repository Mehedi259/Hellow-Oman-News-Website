import Header from "@/components/Header";
import NewsTicker from "@/components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import BreakingNews from "@/components/BreakingNews";
import CategoryQuickLinks from "@/components/CategoryQuickLinks";
import LatestNewsList from "@/components/LatestNewsList";
import { getLatestNews, getTopNews, getTrendingNews } from "@/data/news";

export const revalidate = 60;

export default async function Home() {
  const latestNews = await getLatestNews();
  const trendingNews = await getTrendingNews();
  const topNews = await getTopNews();

  return (
    <>
      <Header />

      <NewsTicker allTickerNews={[...(topNews ? [topNews] : []), ...trendingNews]} />
      <main className="flex-1">
        <HeroSection topNews={topNews} trendingNews={trendingNews} />
        
        {/* Mobile Quick Links */}
        <CategoryQuickLinks />
        
        {/* Ad Space Placeholder */}
        <div className="container mx-auto px-4 my-2 md:my-8 hidden md:block">
          <div className="bg-slate-200 dark:bg-slate-800 w-full h-[90px] md:h-[120px] flex items-center justify-center rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
            <span className="text-slate-400 font-semibold text-sm">বিজ্ঞাপন স্থান</span>
          </div>
        </div>

        {/* Mobile Latest News List */}
        <LatestNewsList 
          title="সর্বশেষ খবর" 
          articles={latestNews.slice(0, 5)} 
          categoryLink="/category/%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%B6%E0%A7%87%E0%A6%B7"
        />

        {/* Desktop Category Section (hidden on mobile for Latest News to show LatestNewsList instead) */}
        <div className="hidden md:block">
          <CategorySection 
            title="সর্বশেষ সংবাদ" 
            articles={latestNews} 
            categoryLink="/category/%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%B6%E0%A7%87%E0%A6%B7"
          />
        </div>
        
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
