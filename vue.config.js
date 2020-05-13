const PreloadWebpackPlugin = require('preload-webpack-plugin');


module.exports = {
    plugins: [
        new HtmlWebpackPlugin(),
        new PreloadWebpackPlugin()
    ],
    "transpileDependencies": [
        "vuetify"
    ]
}