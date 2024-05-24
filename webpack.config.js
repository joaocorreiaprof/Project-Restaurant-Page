const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Set the mode to 'development'
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Rule for CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Rule for images
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Development server content base
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the development server
  },
};
