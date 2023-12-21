/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    disableRefreshCheck: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            },
            {
                hostname: "avatars.githubusercontent.com"
            }
        ]
    },
} 

module.exports = nextConfig
