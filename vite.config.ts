import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const options = {
  plugins: [vue()],
  build:
    process.env.NODE_ENV === 'development'
      ? {}
      : {
          lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'ushironoko-ui-components'
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue'
              }
            }
          }
        }
};

// https://vitejs.dev/config/
export default defineConfig(options);
