/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
  // The site used to have separate pages; keep old links working.
  async redirects() {
    return ["oss", "products", "contact"].map((section) => ({
      source: `/${section}`,
      destination: `/#${section}`,
      permanent: true,
    }))
  },
}

export default nextConfig