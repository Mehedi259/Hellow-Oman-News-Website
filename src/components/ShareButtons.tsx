"use client";

import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], "_blank", "width=600,height=400");
    }
  };

  const handleCopyLink = () => {
    if (!shareUrl) return;
    const decodedUrl = decodeURIComponent(shareUrl);
    navigator.clipboard.writeText(decodedUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="flex items-center gap-3 ml-auto">
      <span className="hidden sm:inline font-medium text-foreground">শেয়ার করুন:</span>
      <button
        onClick={() => handleShare("facebook")}
        className="text-slate-400 hover:text-blue-600 transition-colors p-1"
        title="Facebook এ শেয়ার করুন"
      >
        <FaFacebook size={18} />
      </button>
      <button
        onClick={() => handleShare("twitter")}
        className="text-slate-400 hover:text-blue-400 transition-colors p-1"
        title="Twitter এ শেয়ার করুন"
      >
        <FaTwitter size={18} />
      </button>
      <button
        onClick={() => handleShare("whatsapp")}
        className="text-slate-400 hover:text-green-500 transition-colors p-1"
        title="WhatsApp এ শেয়ার করুন"
      >
        <FaWhatsapp size={18} />
      </button>
      <button
        onClick={() => handleShare("linkedin")}
        className="text-slate-400 hover:text-blue-700 transition-colors p-1"
        title="LinkedIn এ শেয়ার করুন"
      >
        <FaLinkedin size={18} />
      </button>
      <button
        onClick={handleCopyLink}
        className="text-slate-500 hover:text-brand transition-colors px-3 py-1 border border-slate-300 dark:border-slate-700 rounded text-xs font-medium"
        title="লিংক কপি করুন"
      >
        {copiedLink ? "কপি হয়েছে!" : "লিংক কপি"}
      </button>
    </div>
  );
}
