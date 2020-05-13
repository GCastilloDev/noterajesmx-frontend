const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    configureWebpack: {
        plugins: [
            new PreloadWebpackPlugin()
        ]
    }
}