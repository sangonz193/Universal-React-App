// @ts-check
import sharedConfig from "shared/tailwind.config"

/** @type {import('tailwindcss').Config} */
export default {
  ...sharedConfig,
  content: [...sharedConfig.content, "./src/**/*.{tsx,jsx,ts,js}"],
}
