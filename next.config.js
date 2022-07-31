/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'bayut-production.s3.eu-central-1.amazonaws.com',
            'media.istockphoto.com',
            'thumbs.dreamstime.com',
        ],
    },
};

module.exports = nextConfig
