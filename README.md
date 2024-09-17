# Universal React App

Monorepo for a cross platform React app with a shared codebase.

- Next.js for the web app
- Expo for the mobile app (iOS and Android)
- Tauri for the desktop app (Windows, macOS, Linux)

## Getting Started

1. Clone the repository
2. Install dependencies with `bun i`

<!-- TODO: TBD -->

## react-native-css-interop@0.0.36.patch

Subset of https://github.com/gluestack/gluestack-ui/blob/main/patches/react-native-css-interop%2B0.0.36.patch.

There are a couple new files added in the patch. An example path is `/dist/runtime-web-interopComponentsMap.js`. It was supposed to be `/dist/runtime/web/interopComponentsMap.js`, but there's an error with `bun patch` https://github.com/oven-sh/bun/issues/13330.
