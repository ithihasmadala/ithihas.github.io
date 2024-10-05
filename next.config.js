/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    }
    // Remove these lines as they're not needed for user/org sites
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/{repo-name}' : '',
    // basePath: process.env.NODE_ENV === 'production' ? '/{repo-name}' : '',
}

module.exports = nextConfig
