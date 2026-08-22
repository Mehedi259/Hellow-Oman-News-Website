"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, ChevronRight, Headset, Star, ThumbsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const adTexts = [
  { icon: Headset, text: "ওমানে যেকোনো সেবার জন্য আমরা আছি আপনার পাশে!" },
  { icon: ShieldCheck, text: "নির্ভরযোগ্য ও দ্রুত সেবা পেতে আজই যোগাযোগ করুন!" },
  { icon: ThumbsUp, text: "Hello Oman Sheba - আপনার আস্থার ঠিকানা!" }
];

export default function HelloOmanAd() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % adTexts.length);
    }, 3500); // Change text every 3.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 mt-2 mb-4 md:mt-4 md:mb-6">
      <Link href="https://helloomansheba.com/" target="_blank" rel="noopener noreferrer" className="block w-full group">
        <motion.div 
          className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-700 via-teal-600 to-green-500 shadow-xl group-hover:shadow-2xl transition-shadow duration-300 border border-emerald-400/30"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {/* Animated decorative background elements */}
          <motion.div 
            className="absolute -top-20 -right-20 w-56 h-56 bg-white opacity-10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-56 h-56 bg-yellow-300 opacity-20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-5 md:py-0 md:h-[110px] relative z-10 gap-4 md:gap-6">
            
            {/* Left Section: Logo / Brand */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start shrink-0">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden -rotate-3 group-hover:rotate-3 transition-transform duration-300">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <Star className="text-emerald-600 fill-yellow-400 w-8 h-8" />
                </motion.div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-black text-white tracking-wide drop-shadow-md">Hello Oman</h3>
                <p className="text-emerald-100 text-xs font-bold tracking-widest uppercase opacity-90">Sheba</p>
              </div>
            </div>

            {/* Middle Section: Animated Text */}
            <div className="flex-1 w-full text-center h-[60px] md:h-[40px] relative overflow-visible flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute w-full flex items-center justify-center text-white font-bold text-lg md:text-xl drop-shadow-md px-2"
                >
                  {(() => {
                    const Icon = adTexts[currentIndex].icon;
                    return (
                      <>
                        <Icon className="w-5 h-5 md:w-6 md:h-6 mr-2 text-yellow-300 shrink-0" /> 
                        <span className="leading-tight">{adTexts[currentIndex].text}</span>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Section: Call to action */}
            <div className="shrink-0 w-full md:w-auto flex justify-center mt-2 md:mt-0">
              <motion.button 
                className="bg-white hover:bg-emerald-50 text-emerald-900 font-bold py-2.5 px-6 md:px-8 rounded-full flex items-center gap-2 shadow-xl transition-colors text-sm md:text-base border-2 border-emerald-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 15px rgba(255,255,255,0.6)", "0px 0px 0px rgba(255,255,255,0)"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                বিস্তারিত দেখুন
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ChevronRight size={20} className="stroke-[3px] text-emerald-600" />
                </motion.div>
              </motion.button>
            </div>
            
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
