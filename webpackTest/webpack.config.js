const path = require('path');

module.exports = {
    entry: "./telephoneUse.ts",
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: [".js", ".tsx", ".ts"]
        },
        output: {
            filename: "./build/bundle.js",
            path: path.resolve(__dirname, "dist")
        }
};
            