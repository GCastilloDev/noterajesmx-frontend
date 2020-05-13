const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
    configureWebpack: {
        plugins: [
            new CompressionWebpackPlugin({
                filename: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.(js|css)$/,
            })
        ],
        mode: 'production'
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch')
        config.plugin('preload').tap(options => {
            options[0].as = (entry) => {
                if (/\.css$/.test(entry)) return 'style';
                if (/\.woff$/.test(entry)) return 'font';
                if (/\.png$/.test(entry)) return 'image';
                return 'script';
            }
            options[0].include = 'allAssets'
                // options[0].fileWhitelist: [/\.files/, /\.to/, /\.include/]
                // options[0].fileBlacklist: [/\.files/, /\.to/, /\.exclude/]
            return options
        })
    },
    "transpileDependencies": [
        "vuetify"
    ]
}