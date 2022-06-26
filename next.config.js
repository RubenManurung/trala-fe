/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cssLoaderOptions: {
    url: false,
  },
  images: {
    domains: ["qubisastorage.blob.core.windows.net"],
  },
};

module.exports = nextConfig;
