"use client";

import { useState } from "react";
import { X, Mail, CheckCircle } from "lucide-react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset and close after 2 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setEmail("");
      setName("");
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              সফলভাবে সাবস্ক্রাইব হয়েছে!
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              ধন্যবাদ! আপনার ইমেইলে নিয়মিত আপডেট পাঠানো হবে।
            </p>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-brand to-brand-light p-6 text-white">
              <button 
                onClick={onClose}
                className="float-right p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">নিউজলেটার</h2>
                  <p className="text-sm text-white/90">সাবস্ক্রাইব করুন</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  সর্বশেষ খবর ও আপডেট পেতে আমাদের নিউজলেটার সাবস্ক্রাইব করুন
                </p>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-brand transition-colors"
                  placeholder="আপনার পুরো নাম লিখুন"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  ইমেইল ঠিকানা
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-brand transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agree"
                  required
                  className="mt-1 w-4 h-4 text-brand border-slate-300 rounded focus:ring-brand"
                />
                <label htmlFor="agree" className="text-xs text-slate-600 dark:text-slate-400">
                  আমি নিয়মিত নিউজলেটার এবং আপডেট পেতে সম্মত এবং গোপনীয়তা নীতি স্বীকার করছি
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-brand hover:bg-brand-dark text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    সাবস্ক্রাইব করা হচ্ছে...
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    সাবস্ক্রাইব করুন
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
