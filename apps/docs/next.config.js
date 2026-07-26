const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const repo = process.env.GITHUB_REPOSITORY?.replace(/.*\//, '')

/** @type{import('next').NextConfig} */
const config = {
  assetPrefix: repo ? `/${repo}/` : undefined,
  basePath: repo ? `/${repo}` : undefined,
  experimental: {
    useTypeScriptCli: true,
  },
  images: { unoptimized: true },
  output: 'export',
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer(config)
