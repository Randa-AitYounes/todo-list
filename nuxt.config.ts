// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/supabase'],
  css: ['assets/css/main.css'],
  ui: {
    fonts: false
  },
  supabase: {
    redirectOptions: {
    login: '/login',
    callback: '/home'  
  }
  }
 
})