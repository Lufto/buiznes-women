/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '85.192.41.228',
				port: '8080',
				pathname: '/image/**',
			},
		],
	},
}

export default nextConfig
