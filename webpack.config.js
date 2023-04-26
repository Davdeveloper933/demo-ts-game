module.exports = function build(env, arg)
{
    return {
        entry: "./sources/Main.ts",
        output: {
            path: __dirname + "/app",
            filename: "main.js"
        },
        mode: arg.mode,
        devtool: "source-map",
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [ {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: { loader: "ts-loader" }
            } ]
        },
        plugins: [
        ]
    };
}