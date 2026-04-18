/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Senvvio", // Tells Next.js to add this to the start of all /paths
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
