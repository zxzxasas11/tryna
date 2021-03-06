
module.exports = {
    mode: 'universal',
    server: {
        port: 8142, // default: 3000
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
    //loading: '~/components/loading.vue',
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
        {src:'~/plugins/http',ssr:false},
        { src: '@/plugins/vue-mavon-editor', ssr: false },
        { src: '@/plugins/common', ssr: false },
        {src:'~/plugins/nuxt-client-init.client.js',ssr:true}
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
    /*axios: {
        proxy: true,
        prefix: '/api', // baseURL
        //credentials: true,
    },
    proxy: {
        '/api': {
            target: 'http://192.168.31.226:7001', // 代理地址
            changeOrigin: true,
            /!*pathRewrite: {
              '^/api': ''
            },*!/
        },
    },*/
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    //credentials: true,
  },
  proxy: {
    '/api': {
      target: 'http://47.114.44.30:7001', // 代理地址
      changeOrigin: true,
      /*pathRewrite: {
        '^/api': ''
      },*/
    },
  },
    render:{
        ssr:true
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
