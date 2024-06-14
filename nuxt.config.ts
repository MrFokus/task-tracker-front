// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@pinia/nuxt',
  ],
  plugins:['~/plugins/crop-content.ts','~/plugins/out-click.ts','~/plugins/socket.ts'],
  css:["@/assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variable.scss" as *; @import "@/assets/styles/_variable.scss";'
        }
      }
    }
  },
  runtimeConfig: {
    public:{
      baseUrl:process.env.BASE_URL
    }
  },
})
