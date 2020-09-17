export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: "universal",
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: "server",
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || "",
            },
        ],
        script: [
            { src: 'https://use.typekit.net/pik3yoh.js' }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxt/content", "nuxt-buefy", "nuxt-i18n"],

    buefy: {
        // buefy settings
    },

    i18n: {
        // 使用する言語の設定
        locales: [
            { code: "ja", name: "Japanese", iso: "ja_JP", file: "ja.json" },
            { code: "en", name: "English", iso: "en-US", file: "en.json" },
        ],
        defaultLocale: "ja", // デフォルトの言語
        langDir: "i18n/", // 翻訳ファイルのディレクトリパス
        strategy: "prefix_and_default", // URLに言語のプレフィックスを追加するかの指定
        vueI18n: {
            // 翻訳ファイルが見つからなかった場合の言語を指定
            fallbackLocale: "ja",
        },
        vueI18nLoader: true,
        lazy: true, // 遅延読み込みの有効化
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {},
};
