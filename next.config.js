// next.config.js
const nextConfig = {
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
module.exports = nextConfig;
