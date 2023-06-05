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
        URL: "https://api.animevariant.com/api/",
        GA_MEASUREMENT_ID: "G-3D40VC4QXL",
        CLARITY_KEY: "f9jxaugc1a"
    },
    images: {
        domains: [
            "gogocdn.net",
            "daisyui.com",
            "api.animevariant.com"
        ],
    },
    reactStrictMode: true,
    output: 'standalone',
}

module.exports = withPWA(nextConfig);
