import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.wgu.edu",
      "imgcdn.stablediffusionweb.com",
      "encrypted-tbn0.gstatic.com",
      "img.freepik.com",
      "media.istockphoto.com",
      "cdn.britannica.com",
    ],
  },
};

export default nextConfig;
