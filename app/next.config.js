/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Static HTML export කරනවා
  distDir: 'out',          // output folder
  images: {
    unoptimized: true
  }
};

export default nextConfig;