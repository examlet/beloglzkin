import { defineNuxtConfig } from 'nuxt'
//import { FirebaseOptions } from "firebase/app";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    srcDir: "src",
    // publicRuntimeConfig: {
    //     nodeEnv: process.env.NODE_ENV,
    //     firebaseConfig: {
    //       apiKey: process.env.FIREBASE_API_KEY,
    //       authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    //     },
    //   } as { firebaseConfig: FirebaseOptions },
    app: {
        head: {
          "title": "Система управления проектами"
        }
      },
    css: [
        '@/assets/css/normalize.css',
        '@/assets/css/reset.css',
        '@/assets/css/style.css'
      ],
    buildModules: [
        "@vueuse/nuxt",
        "@pinia/nuxt"
    ],
    vueuse: {
        ssrHandlers: true,
    },
    typescript: {
        shim: false,
    },
    build: {
        transpile: [
          "naive-ui",
          "vueuc",
          "@css-render/vue3-ssr",
          "@juggle/resize-observer",
        ],
      },
      vite: {
        optimizeDeps: {
          include: ["date-fns-tz/esm/formatInTimeZone"],
        },
      },
})
