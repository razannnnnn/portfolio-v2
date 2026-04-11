import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hostimgajaa.razan.web.id',
      },
    ],
  },
};

export default nextConfig;
