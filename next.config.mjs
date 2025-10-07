/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static file serving from public directory
  assetPrefix: "",
  ...(process.env.NODE_ENV === "development" && {
    webpack: (config) => {
      config.cache = false;
      return config;
    },
  }),

  // Configure webpack for custom assets
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Custom webpack configuration for handling additional file types
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    });

    return config;
  },

  // Enable experimental features if needed
  experimental: {
    // Add experimental features here if required
  },

  // Image optimization configuration
  images: {
    domains: [], // Add external image domains here if needed
    formats: ["image/webp", "image/avif"],
  },

  // Custom headers for better performance
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
