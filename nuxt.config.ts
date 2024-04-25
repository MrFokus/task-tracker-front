// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:false,
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
