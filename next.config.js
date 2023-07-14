/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	skipMiddlewareUrlNormalize: true,
	skipTrailingSlashRedirect: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ['media.graphassets.com'],
	},
};

module.exports = nextConfig;
