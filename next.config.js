const path = require('path');

const securityHeaders = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on'
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload'
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block'
	},
	{
		key: 'X-Frame-Options',
		value: 'deny'
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff'
	},
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin'
	},
	{
		key: 'Content-Security-Policy',
		value: "default-src 'self'; img-src https://*; child-src 'none';"
	}
]

module.exports = {
	reactStrictMode: true,
	
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: '/(.*)',
				headers: securityHeaders,
			},
		]
	},
}

