import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@services': path.resolve(__dirname, 'src/core/services'),
      '@svgIcons': path.resolve(__dirname, 'src/assets/svgIcons'),
      '@mainPageIcons': path.resolve(__dirname, 'src/assets/mainPage'),
      '@composed-components': path.resolve(
        __dirname,
        'src/composed-components'
      ),
      '@componentTypes': path.resolve(__dirname, 'src/components/types'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@routers': path.resolve(__dirname, 'src/routers'),
      '@serviceTypes': path.resolve(__dirname, 'src/core/services/types'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@schemas': path.resolve(__dirname, 'src/core/schemas'),
      '@constants': path.resolve(__dirname, 'src/core/constants'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@mocks': path.resolve(__dirname, 'src/core/mocks'),
    },
  },
  plugins: [svgr(), react(), EnvironmentPlugin(['REACT_APP_BASEURL', 'GOOGLE_CLIENT_ID'])],
});
