/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
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
    }
}

module.exports = nextConfig
