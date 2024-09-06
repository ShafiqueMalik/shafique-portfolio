/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Use 'export' to generate static files
  images: {
    unoptimized: true, // Avoids image optimization since it's not handled on Netlify for static sites
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
