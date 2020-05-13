const PreloadWebpackPlugin = require(' preload-webpack-plugin ');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin(),
            new PreloadWebpackPlugin({
                rel: 'preload',
                as(entry) {
                    if (/\.css$/.test(entry)) return 'style';
                    if (/\.woff$/.test(entry)) return 'font';
                    if (/\.png$/.test(entry)) return 'image';
                    return 'script';
                }
            })
        ]
    }
}