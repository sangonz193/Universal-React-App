import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import reactNativeWeb from "vite-plugin-react-native-web"
import tsconfigPaths from "vite-tsconfig-paths"

const host = process.env.TAURI_DEV_HOST

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    tsconfigPaths(),
    reactNativeWeb({
      extensions: [".tauri.tsx", ".tauri.ts"],
    }),
    react({
      jsxImportSource: "nativewind",
    }),
  ],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr:
      host ?
        {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}))
