// import * as path from 'path';
// import { fileURLToPath } from 'url';

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); 
// const createExpoWebpackConfigAsync = require('@expo/webpack-config');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
// const path = require("path");
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// export default {
//   module: {
//     rules: [
//         {
//           test: /\.js$|jsx/,
//           exclude: /node_modules/,
//           use: ['babel-loader']
//         }
//     ]
//   },
//   entry: "./main.js",
//   resolve: {
//     extensions: ['*', '.js', '.jsx'],
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, "./static/frontend"),
//   },
//   devServer: {
//     static: './src'
//   },
// };

// module.exports = {
//     resolve: {
//     extensions: ['.js','.jsx']
//     },
//     presets: [
//       '@babel/preset-env',
//       '@babel/preset-react',
//     ],
//     module: {
//       rules: [{
//         test: /\.(js|jsx)$/,
//         use: {
//             loader: 'babel-loader'
//         }
//     }],
//     },
//     stats: {
//       errorDetails: true
//     },

//     plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],

//     devServer: {
//     	static: {
//         	directory: path.resolve(__dirname, "dist"),
//         },
//       	port: 8080,
//     },
//     plugins: [
//       [new HtmlWebpackPlugin({ template: './src/index.html' })],
//       ],
//     module: {
//       rules: [
//         {
//           test: /\.css$/,
//           use: ["style-loader", "css-loader"],
//           // use 배열 안의 Loader들은 뒤에서부터 적용된다.
//           // css-loader로 읽고 style-loader로 html에 style 태그 추가
//         },
//         {
//           loaders:[  {
//             test: /\.(gif|svg|jpg|png)$/,
//             loader: "file-loader",
//           }]
//         },
//         {
//           ttest: /\.js$/,
//           exclude: /node_modules/,
//           query: {
//               presets: ['es2015']
//           },
//           use: {
//             loader: "babel-loader",
//             options: {
//                 presets: ['@babel/preset-env']
//             }
//         }
//         },
//       ]
//     },
//     plugins: [
//       new webpack.ProvidePlugin({
//           $: "jquery",
//           jQuery: "jquery"
//       })
//   ],
//     async function(env, argv) {
//       const config = await createExpoWebpackConfigAsync(env, argv);
//       config.module.rules.forEach(r => {
//           if (r.oneOf) {
//               r.oneOf.forEach(o => {
//                   if (o.use && o.use.loader && o.use.loader.includes('babel-loader')) {
//                       o.include = [
//                           path.resolve('.'),
//                           path.resolve('node_modules/@ui-kitten/components'),
//                       ]
//                   }
//               })
//           }
//       })
//       return config;
//     },
//     context: path.resolve(__dirname, 'src/js'),
//     entry: {
//         main: 'main.js'
//     },
//     devtool: 'sourcemaps',
//     cache: true,
//     output: {
//     	path: path.resolve(__dirname, 'src/main/webapp/dist'),
//         filename: '[name].bundle.js'
//     },
//     mode: 'none',
//     module: {
//         rules: [ {
//             test: /\.js?$/,
//             exclude: /(node_modules)/,
//             use: {
//                 loader: 'babel-loader',
//                 options: {
//                     presets: [ '@babel/preset-env', '@babel/preset-react' ]
//                 }
//             }
//         }, {
//         	test: /\.css$/,
//             use: [{
//                     loader: 'style-loader'
//                 },
//                 {
//                     loader: 'css-loader'
//                 }
//             ]
//         },
//         {
//             test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//             use: [{
//                 loader: 'file-loader'
//             }]
//         },
//         {
//         	test: /.(sass|scss)$/,
//         	use: [
//         	{ loader: 'style-loader' },
//         	{ loader: 'css-loader' },
//         	{ loader: 'sass-loader' },
//         	]
//         },
//         {
//             test: /\.(png|jpg|gif)$/,
//             use: [{
//                 loader: 'file-loader'
//             }]
//         }
//       ]
// },
//     entry: "./src/index.js",
//     mode: "development",
//     resolve: {
//       alias: {
//           jquery: "jquery/src/jquery"
//       }
//     },
//     output: {
//       filename: "bundle.js",
//       path: path.resolve(__dirname, "dist"),
//     },
//     module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: ["style-loader", "css-loader"],
//         },
//         [{ test: /\.txt$/, use: 'raw-loader' }],
//         {
//           test: /\.(png|svg|jpg|jpeg|gif)$/i,
//           type: "asset/resource",
//         },
//         {
//           test: /\.(woff|woff2|eot|ttf|otf)$/i,
//           type: "asset/resource",
//         },
//         {
//           test: /\.(csv|tsv)$/i,
//           use: ["csv-loader"],
//         },
//         {
//           test: /\.(ts|tsx)$/i, 
//           use: "babel-loader",
//           exclude: /node_modules/, 
//         },
//       ],
//     },
//   };