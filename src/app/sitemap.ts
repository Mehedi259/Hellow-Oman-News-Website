import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { getAllNews, CATEGORIES } from '@/data/news';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let baseUrl = 'https://helloprobash.com';

  try {
    const headerList = await headers();
    const host = headerList.get('x-forwarded-host') || headerList.get('host') || '';
    if (host.includes('helloomanbangla')) {
      baseUrl = 'https://www.helloomanbangla.com';
    } else if (host.includes('helloprobash')) {
      baseUrl = 'https://helloprobash.com';
    }
  } catch {
    // default to helloprobash.com
  }

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/epaper`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/video`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${encodeURIComponent(cat)}`,
    lastModified: new Date(),
    changeFrequency: 'hourly',
    priority: 0.8,
  }));

  let articlePages: MetadataRoute.Sitemap = [];
  try {
    const news = await getAllNews();
    articlePages = news.map((article) => {
      const date = article.published_date ? new Date(article.published_date) : new Date();
      return {
        url: `${baseUrl}/news/${article.id}`,
        lastModified: isNaN(date.getTime()) ? new Date() : date,
        changeFrequency: 'daily',
        priority: 0.9,
      };
    });
  } catch (err) {
    console.error('Error generating article sitemap:', err);
  }

  return [...staticPages, ...categoryPages, ...articlePages];
}
