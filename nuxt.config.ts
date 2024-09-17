import {defineNuxtConfig} from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@crazydos/nuxt-msw'],
  msw : {
    enable: true,
    folderPath: "~/msw",
  },
  css: [
    '~/shared/styles/reset.scss',
    '~/shared/styles/page-transition.scss',
    '~/shared/styles/global.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/shared/styles/vars/_index.scss";'
        }
      }
    },
  },
  devServer: {
    port: 8000
  },
})
