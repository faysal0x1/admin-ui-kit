import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'InertiaAdminKit',
            formats: ['es'],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                '@inertiajs/react',
                '@tanstack/react-table',
                '@tanstack/react-virtual',
                '@tinymce/tinymce-react',
                'tinymce',
                'react-select',
                'date-fns',
                'lucide-react',
                'lucide-react/dynamic',
                'sonner',
                'fuse.js',
                'usehooks-ts'
            ],
        },
        sourcemap: true,
        emptyOutDir: true,
    },
});
