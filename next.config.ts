import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Use 'export' to generate static files
  images: {
    unoptimized: true, // Avoids image optimization since it's not handled on Netlify for static sites
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
