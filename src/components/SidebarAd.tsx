import React from "react";
import GoogleAd from "./GoogleAd";

interface SidebarAdProps {
  adSlot?: string;
  className?: string;
}

export default function SidebarAd({ adSlot, className = "" }: SidebarAdProps) {
  return (
    <div className={`w-full ${className}`}>
      <GoogleAd 
        adSlot={adSlot} 
        adFormat="rectangle" 
        style={{ display: "block", minHeight: "280px" }}
      />
    </div>
  );
}
