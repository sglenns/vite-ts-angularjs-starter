import { defineConfig } from 'vite'


export default defineConfig({
  root: 'src',
  build: {
    outDir: '../public',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'build/[name].js',
        chunkFileNames: 'build/[name].js',
        assetFileNames: 'build/[name].[ext]'
      }
    },
  },

  plugins: []
})