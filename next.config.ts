import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ hostname: "i.pravatar.cc" }],
  },
};

export default nextConfig;
