/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

import withPlugins from 'next-compose-plugins';
import optimizedImages from 'next-optimized-images';

module.exports = withPlugins(
  [optimizedImages],
  nextConfig,
);
