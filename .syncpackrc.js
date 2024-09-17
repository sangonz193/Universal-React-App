// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  $schema: "./node_modules/syncpack/dist/schema.json",
  lintSemverRanges: false,
  lintFormatting: false,
  versionGroups: [
    {
      label: "Use workspace protocol when developing local packages",
      dependencies: ["shared"],
      dependencyTypes: ["peer"],
      pinVersion: "workspace:*",
    },
    {
      label:
        "Ensure all packages use whatever version the expo-app package is using",
      dependencies: ["react-native", "react-native-web", "react-native-svg"],
      packages: ["**"],
      snapTo: ["expo-app"],
    },
  ],
}

export default config
