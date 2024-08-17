// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-08-18',

    devtools: {enabled: true},

    runtimeConfig: {
        authSecret: process.env.AUTH_SECRET
    },

    modules: ['@sidebase/nuxt-auth', "@nuxtjs/tailwindcss"],

    auth: {
        baseURL: process.env.AUTH_ORIGIN,
        provider: {
            type: 'authjs'
        }
    },
})