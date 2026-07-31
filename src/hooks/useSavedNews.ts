"use client";

import { useState, useEffect } from 'react';
import { NewsArticle } from '@/data/news';

export function useSavedNews() {
  const [savedArticles, setSavedArticles] = useState<NewsArticle[]>([]);

  const loadSaved = () => {
    const saved = localStorage.getItem('savedNews');
    if (saved) {
      try {
        setSavedArticles(JSON.parse(saved));
      } catch (e) {
        setSavedArticles([]);
      }
    }
  };

  useEffect(() => {
    loadSaved();
    window.addEventListener('savedNewsUpdated', loadSaved);
    return () => window.removeEventListener('savedNewsUpdated', loadSaved);
  }, []);

  const toggleSave = (article: NewsArticle) => {
    const saved = localStorage.getItem('savedNews');
    let currentSaved = saved ? JSON.parse(saved) : [];
    
    const isAlreadySaved = currentSaved.some((a: NewsArticle) => a.id === article.id);
    if (isAlreadySaved) {
      currentSaved = currentSaved.filter((a: NewsArticle) => a.id !== article.id);
    } else {
      currentSaved = [...currentSaved, article];
    }
    
    localStorage.setItem('savedNews', JSON.stringify(currentSaved));
    window.dispatchEvent(new Event('savedNewsUpdated'));
  };

  const isSaved = (id: string) => savedArticles.some((a) => a.id === id);

  return { savedArticles, toggleSave, isSaved };
}
