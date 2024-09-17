import sharedConfig from "shared/tailwind.config"

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    ...sharedConfig.content,
    "./app/**/*.{tsx,jsx,ts,js}",
    "./components/**/*.{tsx,jsx,ts,js}",
  ],
}
