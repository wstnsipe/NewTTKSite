import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, // 24 hours
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
        port: "",
        pathname: "/isteam/**",
      },
    ],
  },
};

export default nextConfig;
