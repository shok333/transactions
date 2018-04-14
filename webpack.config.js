const
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path')
extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    allChunks: true
});

module.exports = {
    entry: [
        './src/index.js',
        './src/styles/index.scss',
    ],

    output: {
        path: path.resolve(__dirname, 'static'),
        filename: '[name].js',
    },

    watch: true,

    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'react', 'es2015', "stage-0"],
                        plugins: ["transform-runtime"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract([ 'css-loader', 'sass-loader' ])
            }
        ],
    },
    plugins: [
        extractSass
    ],

    resolve: {
        alias: {
            Root: path.resolve(__dirname, 'src'),
            Api: path.resolve(__dirname, 'src/api'),
            Components: path.resolve(__dirname, 'src/components'),
            Actions: path.resolve(__dirname, 'src/redux/actions'),
            Reducers: path.resolve(__dirname, 'src/redux/reducers'),
            Sagas: path.resolve(__dirname, 'src/redux/sagas'),
        },
    },
}
