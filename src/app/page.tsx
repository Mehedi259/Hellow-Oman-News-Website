import Header from "@/components/Header";
import NewsTicker from "@/components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import BreakingNews from "@/components/BreakingNews";
import CategoryQuickLinks from "@/components/CategoryQuickLinks";
import LatestNewsList from "@/components/LatestNewsList";
import VideoGalleryHome from "@/components/VideoGalleryHome";
import MusaflyAd from "@/components/MusaflyAd";
import HelloOmanAd from "@/components/HelloOmanAd";
import { getLatestNews, getTopNews, getTrendingNews, getNewsByCategoryName } from "@/data/news";

export const revalidate = 60;

export default async function Home() {
  const latestNews = await getLatestNews();
  const trendingNews = await getTrendingNews();
  const topNews = await getTopNews();

  const probashNews = await getNewsByCategoryName("প্রবাস", 8);
  const nationalNews = await getNewsByCategoryName("বাংলাদেশ", 8);
  const politicsNews = await getNewsByCategoryName("রাজনীতি", 8);
  const sportsNews = await getNewsByCategoryName("খেলাধুলা", 8);
  const entertainmentNews = await getNewsByCategoryName("বিনোদন", 8);

  return (
    <>
      <Header />

      <NewsTicker allTickerNews={[...(topNews ? [topNews] : []), ...trendingNews]} />
      <main className="flex-1">
        
        {/* Hello Oman Sheba Ad Space */}
        <HelloOmanAd />

        <HeroSection topNews={topNews} trendingNews={trendingNews} />
        
        {/* Mobile Quick Links */}
        <CategoryQuickLinks />
        
        {/* Ad Space */}
        <MusaflyAd />

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
          articles={probashNews} 
          categoryLink="/category/প্রবাস"
        />
        
        <CategorySection 
          title="জাতীয়" 
          articles={nationalNews} 
          categoryLink="/category/বাংলাদেশ"
        />

        <CategorySection 
          title="রাজনীতি" 
          articles={politicsNews} 
          categoryLink="/category/রাজনীতি"
        />

        <CategorySection 
          title="খেলাধুলা" 
          articles={sportsNews} 
          categoryLink="/category/খেলাধুলা"
        />

        <CategorySection 
          title="বিনোদন" 
          articles={entertainmentNews} 
          categoryLink="/category/বিনোদন"
        />

        <VideoGalleryHome />
      </main>
      <Footer />
    </>
  );
}
