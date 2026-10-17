import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';

const deployment = JSON.parse(readFileSync(new URL('./vercel.json', import.meta.url), 'utf8'));

export default defineConfig({
  plugins: [react()],
  build: {
    // Preserve the output directory used by the existing deployment.
    outDir: 'build',
  },
  preview: {
    // Exercise the production security policy in browser tests as well.
    headers: Object.fromEntries(deployment.headers[0].headers.map(({ key, value }) => [key, value])),
  },
});
