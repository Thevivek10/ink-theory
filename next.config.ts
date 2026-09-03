import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.staycoldapparel.com",
      },
      {
        protocol: "https",
        hostname: "corruptedera.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.outreapparel.com",
      },
      {
        protocol: "https",
        hostname: "subtledust.com",
      },
    ],
  },
};

export default nextConfig;
