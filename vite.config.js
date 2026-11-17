import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginBundleObfuscator from
  "vite-plugin-bundle-obfuscator";

export default defineConfig({
  plugins: [
    react(),
     vitePluginBundleObfuscator({
      apply: "build",
      enable: true,
      autoExcludeNodeModules: true,

      options: {
        compact: true,
        identifierNamesGenerator: "hexadecimal",
        stringArray: true,
        stringArrayEncoding: [],
        stringArrayThreshold: 0.75,

        // Avoid aggressive transformations
        // that may break React functionality
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        selfDefending: false,
      },
    }),
  ],
  resolve: {
    preserveSymlinks: true,
  },
  build: {
    sourcemap: false,
  },
})
