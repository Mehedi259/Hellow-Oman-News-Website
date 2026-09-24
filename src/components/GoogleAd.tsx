"use client";

import { useEffect, useRef } from "react";

interface GoogleAdProps {
  adSlot?: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical";
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function GoogleAd({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
  style,
}: GoogleAdProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "";
  const slotId = adSlot || process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID || "";

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && clientId && clientId !== "ca-pub-0000000000000000") {
        // @ts-expect-error adsbygoogle is defined by Google AdSense script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense push error:", e);
    }
  }, [clientId, slotId]);

  const hasValidClient = clientId && clientId !== "ca-pub-0000000000000000";

  return (
    <div className={`overflow-hidden text-center my-4 ${className}`}>
      <span className="text-[10px] tracking-wider text-slate-400 dark:text-slate-500 uppercase block mb-1">
        বিজ্ঞাপন / Advertisement
      </span>

      {hasValidClient && slotId ? (
        <ins
          className="adsbygoogle"
          style={style || { display: "block" }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
        />
      ) : (
        <div 
          ref={adRef}
          style={style}
          className="bg-slate-100 dark:bg-slate-800/60 rounded-xl border border-dashed border-slate-200 dark:border-slate-700/80 p-6 flex flex-col items-center justify-center min-h-[120px] transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Ad</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Google AdSense Space</p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">গুগল অ্যাডসেন্স অনুমোদনের পর এখানে বিজ্ঞাপন প্রদর্শিত হবে</p>
        </div>
      )}
    </div>
  );
}
