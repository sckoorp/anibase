export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
    devtools: { enabled: false },
    tailwindcss: { viewer: false },
    googleFonts: { families: { Outfit: "100..900" } },
    runtimeConfig: {
        public: {
            NUXT_PUBLIC_POCKETBASE_URL: process.env.POCKETBASE_URL
        }
    }
});