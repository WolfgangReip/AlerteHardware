/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDocumentPreloading: true,
        adjustFontFallbacks: true,
    },
};

module.exports = nextConfig;
