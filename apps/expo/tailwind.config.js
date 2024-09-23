// @ts-check

import sharedConfig from "shared/tailwind.config"

/** @type {import('tailwindcss').Config} */
const config = {
  ...sharedConfig,
  content: [
    ...sharedConfig.content,
    "./app/**/*.{tsx,jsx,ts,js}",
    "./components/**/*.{tsx,jsx,ts,js}",
  ],
}

export default config
