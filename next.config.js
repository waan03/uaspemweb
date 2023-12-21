/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {}
=======
const nextConfig = {
    output:"export",
    images: {
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
>>>>>>> jeki

module.exports = nextConfig
