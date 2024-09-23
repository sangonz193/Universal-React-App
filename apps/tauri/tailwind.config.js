// @ts-check

import sharedConfig from "shared/tailwind.config"

/** @type {import('tailwindcss').Config} */
const config = {
  ...sharedConfig,
  content: [
    ...sharedConfig.content, //
    "./src/**/*.{tsx,jsx,ts,js}",
  ],
}

export default config
