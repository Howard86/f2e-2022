const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type{import('next').NextConfig} */
const config = {
  experimental: {
    useTypeScriptCli: true,
  },
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer(config)
