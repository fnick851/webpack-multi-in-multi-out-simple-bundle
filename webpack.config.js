module.exports = {
    entry: {
        feature1: ['./src/feature1_dep.js', './src/feature1_2.js'],
        feature2: ['./src/feature2_dep.js', './src/feature2_2.js']
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
};