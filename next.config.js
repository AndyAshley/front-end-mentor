/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

//add HTML lang en to website

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    deviceSizes: [375, 425, 768, 1024, 1440, 1920],
  },
};
