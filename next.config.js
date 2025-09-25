/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        loader: "default",
        domains: ["localhost", "127.0.0.1", "admin.jeremycastillo.net"],
        unoptimized: true,
    },
    distDir: 'build',
}

module.exports = nextConfig
