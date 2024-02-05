import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
//2changes - del later if not working
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: 'dist', // Adjust the output directory as needed
    assetsDir: '', //3rd commit 1ch
  },
  base: '/',  //3rd commit 2ch
})
