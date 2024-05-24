// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    "nuxt-icon",
    'nuxt-headlessui',
    "@morev/vue-transitions/nuxt",
    '@pinia/nuxt',
    "@vueuse/nuxt",
  ],
  // Optionally change the default prefix.
  headlessui: { prefix: "H" },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "OTeacher",
      link: [
        // Favicon
        { rel: "icon", type: "image/x-icon", href: "https://oteacher.org/logo/icon-284x284.png" },
        //Inter font
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
  },
})