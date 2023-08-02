/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const withTM = require('next-transpile-modules')(['xlsx']);

module.exports = nextConfig, withTM()
