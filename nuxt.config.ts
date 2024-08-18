// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-08-18',

    devtools: {enabled: true},

    runtimeConfig: {
        authSecret: process.env.AUTH_SECRET,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        public: {
            GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
            GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        },
    },

    modules: ['@sidebase/nuxt-auth', "@nuxtjs/tailwindcss"],

    auth: {
        baseURL: process.env.AUTH_ORIGIN,
        provider: {
            type: 'authjs'
        }
    },
})