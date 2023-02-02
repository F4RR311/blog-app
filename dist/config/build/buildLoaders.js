export function buildLoaders() {
    // Если не используем тайпскрипт, то понадобится бэйбл
    var typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        typescriptLoader,
    ];
}
