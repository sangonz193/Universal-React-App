// import { withGluestackUI } from "@gluestack/ui-next-adapter"

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "react-native",
    "expo",
    "nativewind",
    "react-native-css-interop",
    "shared",
    "@legendapp/motion",
  ],
  experimental: {
    turbo: {
      resolveAlias: {
        "react-native": "react-native-web",
      },
      resolveExtensions: [
        ".web.js",
        ".web.jsx",
        ".web.ts",
        ".web.tsx",
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    }
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ]
    return config
  },
}

// export default withGluestackUI(nextConfig)
export default nextConfig
