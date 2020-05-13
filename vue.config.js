const PreloadWebpackPlugin = require(' preload-webpack-plugin ');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin(),
            new PreloadWebpackPlugin()
        ]
    }
}