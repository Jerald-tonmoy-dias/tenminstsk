import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://cdn.10minuteschool.com/**'), new URL('https://api.10minuteschool.com/**'), new URL('https://s3.ap-southeast-1.amazonaws.com/**')],
  },
};

export default nextConfig;
