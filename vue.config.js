const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            fallback: {
                path: false,
            },
        },
    },
    assetsDir: 'static',
    parallel: false,
    publicPath: './',
})
