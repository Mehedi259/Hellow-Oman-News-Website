"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                যোগাযোগ করুন
              </h1>
              <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                আমরা আপনার মতামত শুনতে আগ্রহী
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">আমাদের ঠিকানা</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        রুই, মাস্কাট<br />
                        সালতানাত অফ ওমান<br />
                        <br />
                        ঢাকা অফিস:<br />
                        কারওয়ান বাজার, ঢাকা-১২১৫
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">ফোন</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        ওমান: +968 1234 5678<br />
                        বাংলাদেশ: +880 1XXX-XXXXXX
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">ইমেইল</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        news@helloomanbangla.com<br />
                        editor@helloomanbangla.com<br />
                        info@helloomanbangla.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                  {isSuccess ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        বার্তা পাঠানো হয়েছে!
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            আপনার নাম <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-brand transition-colors"
                            placeholder="আপনার পুরো নাম"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            ইমেইল ঠিকানা <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-brand transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            ফোন নম্বর
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-brand transition-colors"
                            placeholder="+968 XXXX XXXX"
                          />
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                            বিষয় <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-brand transition-colors"
                          >
                            <option value="">বিষয় নির্বাচন করুন</option>
                            <option value="general">সাধারণ জিজ্ঞাসা</option>
                            <option value="news">সংবাদ পাঠান</option>
                            <option value="advertisement">বিজ্ঞাপন</option>
                            <option value="complaint">অভিযোগ</option>
                            <option value="feedback">মতামত</option>
                            <option value="other">অন্যান্য</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          আপনার বার্তা <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-brand transition-colors resize-none"
                          placeholder="আপনার বার্তা এখানে লিখুন..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-8 py-4 bg-brand hover:bg-brand-dark text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            পাঠানো হচ্ছে...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            বার্তা পাঠান
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
