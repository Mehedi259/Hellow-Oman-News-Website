"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plane, ChevronRight, Globe, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const adTexts = [
  { icon: Globe, text: "বিশ্বের যেকোনো প্রান্তে সেরা দামে ফ্লাইট!" },
  { icon: MapPin, text: "দারুণ সব হলিডে ও ট্যুর প্যাকেজ!" },
  { icon: Sparkles, text: "আজই আপনার স্বপ্নের ট্রিপ বুক করুন!" }
];

export default function MusaflyAd() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % adTexts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 my-6 md:my-10">
      <Link href="https://musafly.com/" target="_blank" rel="noopener noreferrer" className="block w-full group">
        <motion.div 
          className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {/* Animated decorative background elements */}
          <motion.div 
            className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-300 opacity-20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-5 md:py-0 md:h-[120px] relative z-10 gap-4 md:gap-6">
            
            {/* Left Section: Logo / Brand */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start shrink-0">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden rotate-3 group-hover:rotate-6 transition-transform duration-300">
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <Plane className="text-blue-600 fill-blue-600 w-8 h-8" />
                </motion.div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-black text-white tracking-wide drop-shadow-md">Musafly</h3>
                <p className="text-blue-100 text-xs font-semibold tracking-widest uppercase opacity-90">Travel & Tourism</p>
              </div>
            </div>

            {/* Middle Section: Animated Text (Fix for cut-off) */}
            <div className="flex-1 w-full text-center h-[60px] md:h-[40px] relative overflow-visible flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute w-full flex items-center justify-center text-white font-bold text-lg md:text-xl xl:text-2xl drop-shadow-md px-2"
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
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-6 md:px-8 rounded-full flex items-center gap-2 shadow-xl transition-colors text-sm md:text-base border-2 border-yellow-300 hover:border-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: ["0px 0px 0px rgba(250,204,21,0)", "0px 0px 20px rgba(250,204,21,0.5)", "0px 0px 0px rgba(250,204,21,0)"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                বুকিং করুন
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ChevronRight size={20} className="stroke-[3px]" />
                </motion.div>
              </motion.button>
            </div>
            
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
