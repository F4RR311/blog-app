import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
export function buildPlugins(_a) {
    var paths = _a.paths;
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ];
}
