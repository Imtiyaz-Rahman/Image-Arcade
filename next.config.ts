import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/Image-Arcade/' : '',
  basePath: isProd ? '/Image-Arcade' : '',
  output: 'export'
  /* config options here */
};

export default nextConfig;
