import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import sass from 'vite-plugin-sass';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    publicDir: true,
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'), // Главная точка входа
                registration: resolve(__dirname, 'src/registration.html'),
                profile: resolve(__dirname, 'src/profile.html'),
                editProfile: resolve(__dirname, 'src/editProfile.html'),
                '404': resolve(__dirname, 'src/404.html'),
                '500': resolve(__dirname, 'src/500.html'),
            }
        }

    },
    plugins: [
        handlebars({
        partialDirectory: resolve(__dirname, 'src/partials'),
    }),
        sass()
    ],
    server: {
        port: 5000,
        open: true
    }
})
