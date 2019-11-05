
module.exports = {
    mode: 'universal',
    server: {
        port: 1000, // default: 3000
        host: '0.0.0.0', // default: localhost
    },
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        //title:"我的项目",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: '~/components/loading.vue',
    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '~/assets/css/common.css',
        '~/assets/css/main.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/element-ui',
        '~/plugins/router',
        {src:'~/plugins/http',ssr: false},
        { src: '@/plugins/vue-mavon-editor', srr: false },
        { src: '@/plugins/common', srr: false },
        //{src:'~/plugins/nuxt-client-init.client.js',ssr:false}
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: ['@nuxtjs/axios'],
    /*router: {
        middleware: ['auth'],
    },*/
    axios: {
        proxy: true,
        prefix: '/api/v1', // baseURL
        credentials: true,
    },
    proxy: {
        '/api/v1': {
            target: 'http://192.168.31.226:7777', // 代理地址
            changeOrigin: true,
            /*pathRewrite: {
              '^/api': ''
            },*/
        },
    },
    /*
    ** Build configuration
    */
    build: {
        transpile: [/^element-ui/],
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    }
};
