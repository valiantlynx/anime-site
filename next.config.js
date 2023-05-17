/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
    env: {
        key: process.env.COUNT_API_KEY,
        URL: "https://animevariant-com-api.vercel.app/api/",
    },
    images: {
        domains: ["gogocdn.net"],
    },
    reactStrictMode: true,
    output: 'standalone',
}

module.exports = withPWA(nextConfig);
