/// <reference types="vitest" />;
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: { port: +process.env.VITE_PORT || 7890 },
    plugins: [react()],
    resolve: {
      alias: [{ find: 'src', replacement: resolve(__dirname, 'src') }],
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
  });
};
