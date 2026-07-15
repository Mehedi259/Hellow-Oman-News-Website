"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TOP_NEWS, TRENDING_NEWS, LATEST_NEWS } from "@/data/news";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Calendar, User, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewsDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const allNews = [TOP_NEWS, ...TRENDING_NEWS, ...LATEST_NEWS];
  const article = allNews.find((n) => n.id === id);

  const [comment, setComment] = useState("");
  const [commentName, setCommentName] = useState("");
  const [comments, setComments] = useState<Array<{name: string; text: string; date: string}>>([
    { name: "আব্দুল করিম", text: "খুব ভালো সংবাদ। ধন্যবাদ শেয়ার করার জন্য।", date: "২ ঘণ্টা আগে" },
    { name: "ফাতেমা বেগম", text: "তথ্যবহুল সংবাদ। আরও এমন সংবাদ চাই।", date: "৫ ঘণ্টা আগে" },
  ]);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!article) {
    notFound();
  }

  // Get related news from same category
  const relatedNews = allNews
    .filter((news) => news.category === article.category && news.id !== article.id)
    .slice(0, 3);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() && commentName.trim()) {
      setComments([
        { name: commentName, text: comment, date: "এইমাত্র" },
        ...comments,
      ]);
      setComment("");
      setCommentName("");
    }
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = article.title;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Article Content */}
        <div className="lg:col-span-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-brand/10 text-brand font-bold px-3 py-1 rounded text-sm">
                  {article.category}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm text-slate-500 mb-8 border-y border-slate-100 dark:border-slate-800 py-3">
                <div className="flex items-center gap-2">
                  <User size={16} /> 
                  <span>ডেস্ক রিপোর্ট</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> 
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-3 ml-auto">
                  <span className="hidden sm:inline font-medium text-foreground">শেয়ার করুন:</span>
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    title="Facebook এ শেয়ার করুন"
                  >
                    <FaFacebook size={18} />
                  </button>
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    title="Twitter এ শেয়ার করুন"
                  >
                    <FaTwitter size={18} />
                  </button>
                  <button 
                    onClick={() => handleShare('whatsapp')}
                    className="text-slate-400 hover:text-green-500 transition-colors"
                    title="WhatsApp এ শেয়ার করুন"
                  >
                    <FaWhatsapp size={18} />
                  </button>
                  <button 
                    onClick={() => handleShare('linkedin')}
                    className="text-slate-400 hover:text-blue-700 transition-colors"
                    title="LinkedIn এ শেয়ার করুন"
                  >
                    <FaLinkedin size={18} />
                  </button>
                  <button 
                    onClick={handleCopyLink}
                    className="text-slate-400 hover:text-brand transition-colors px-3 py-1 border border-slate-300 dark:border-slate-700 rounded text-xs"
                    title="লিংক কপি করুন"
                  >
                    {copiedLink ? "কপি হয়েছে!" : "লিংক কপি"}
                  </button>
                </div>
              </div>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
                {article.excerpt && (
                  <p className="font-semibold text-lg text-foreground mb-6">
                    {article.excerpt}
                  </p>
                )}
                {article.content ? (
                  article.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>বিস্তারিত সংবাদ এখনো আপডেট করা হয়নি।</p>
                )}
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden mt-8">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageCircle size={24} className="text-brand" />
                মন্তব্য ({comments.length})
              </h3>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <div className="mb-4">
                  <input
                    type="text"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    placeholder="আপনার নাম"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:border-brand transition-colors text-sm"
                  />
                </div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="আপনার মন্তব্য লিখুন..."
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:border-brand transition-colors resize-none mb-3"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-2 bg-brand hover:bg-brand-dark text-white rounded-lg font-medium transition-colors flex items-center gap-2 text-sm"
                >
                  <Send size={16} />
                  মন্তব্য পোস্ট করুন
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((c, idx) => (
                  <div key={idx} className="border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
                        <User size={20} className="text-brand" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-foreground">{c.name}</span>
                          <span className="text-xs text-slate-400">• {c.date}</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">{c.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related News */}
          {relatedNews.length > 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden mt-8">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand inline-block rounded-sm"></span>
                  সম্পর্কিত সংবাদ
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedNews.map((news) => (
                    <Link href={`/news/${news.id}`} key={news.id} className="group">
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <span className="text-xs font-bold text-brand mb-2 block">{news.category}</span>
                      <h4 className="font-bold text-foreground leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                        {news.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-brand inline-block rounded-sm"></span>
              সর্বশেষ সংবাদ
            </h3>
            <div className="flex flex-col gap-4">
              {LATEST_NEWS.slice(0, 4).map((news) => (
                <Link href={`/news/${news.id}`} key={news.id} className="flex gap-4 group">
                  <div className="relative w-24 h-20 shrink-0 rounded-lg overflow-hidden">
                    <Image 
                      src={news.image} 
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-brand mb-1">{news.category}</span>
                    <h4 className="text-sm font-bold text-foreground leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                      {news.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
