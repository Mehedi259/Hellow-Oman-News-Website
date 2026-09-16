import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "helloomanbangla.com",
      },
      {
        protocol: "https",
        hostname: "helloprobash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://46.225.103.236:8000/api/:path*',
      },
    ]
  },
};

export default nextConfig;
