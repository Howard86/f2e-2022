const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const repo = process.env.GITHUB_REPOSITORY?.replace(/.*\//, '')

/** @type{import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: repo ? `/${repo}/` : undefined,
  basePath: repo ? `/${repo}` : undefined,
  images: { unoptimized: true },
}

module.exports = withBundleAnalyzer(config)
