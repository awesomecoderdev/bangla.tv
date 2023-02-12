/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	reactStrictMode: false,
	// swcMinify: true,
	images: {
		domains: ["banglatv.tv", "localhost"],
		formats: ["image/avif", "image/webp"],
	},
};
module.exports = nextConfig;
