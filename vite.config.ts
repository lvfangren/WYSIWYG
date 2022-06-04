import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { resolve } from 'path';
import visualizer from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': {
            isMock: true,
        },
    },
    // root: './public',
    plugins: [vue(), visualizer({
        open: true,
    }), Components({
        dts: true,
        dirs: ['src/components'],
        deep: true,
    })],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
        extensions: ['*', '.js', '.ts', '.vue', '.json'],
    },
});
