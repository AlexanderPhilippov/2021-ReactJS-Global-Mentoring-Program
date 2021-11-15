const path = require('path')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    name: 'server',
    target: 'node',
    node: { __dirname: false },
    entry: {
        main: ['./server/index.ts'],
    },
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'dist'),
        publicPath: '/static/',
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.json'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
        alias: {
            Assets: path.resolve(__dirname, 'src/Assets'),
            Components: path.resolve(__dirname, 'src/Components'),
            Utils: path.resolve(__dirname, 'src/Utils'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: [/node_modules/, /dist/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    { targets: { node: 'current' } },
                                ],
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                            plugins: ['css-modules-transform'],
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: ['null-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif|ttf|woff|woff2|eot)/,
                use: ['null-loader'],
            },
        ],
    },
    devtool: 'source-map',
    performance: {
        hints: false,
    },
}
