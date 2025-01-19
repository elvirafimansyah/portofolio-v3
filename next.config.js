/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, 
    domains: [
      "upload.wikimedia.org",
      "styled-components.com",
      "avatars.githubusercontent.com",
      "cdn.dribbble.com"
    ]
  },
}

module.exports = nextConfig
