const { API } = require("./config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cssLoaderOptions: {
    url: false,
  },
  images: {
    domains: ["qubisastorage.blob.core.windows.net"],
  },
  rewrites: function () {
    return [
      {
        source: "/sliders",
        destination: `${API}/Testing/slide/v2`,
      },
      {
        source: "/kelas",
        destination: `${API}/Testing/content`,
      },
      {
        source: "/login",
        destination: `${API}/Auth/login`,
      },
      {
        source: "/article",
        destination: `${API}/Testing/Article`,
      },
    ];
  },
};

module.exports = nextConfig;
