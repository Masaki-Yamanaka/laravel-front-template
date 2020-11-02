const mix = require('laravel-mix');
const ASSET_PATH = process.env.ASSET_PATH || '/';

require('laravel-mix-polyfill');
require('laravel-mix-merge-manifest');

mix
  .js('resources/js/app.js', 'public/js/app.js')
  .sass('resources/scss/app.scss', 'public/css/app.css')
  .mergeManifest();

mix
  .babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
  })
  .webpackConfig({
    output: {
      publicPath: ASSET_PATH,
      chunkFilename: mix.inProduction()
        ? 'js/chunk/[name].[chunkhash].js'
        : 'js/chunk/[name].js',
    },
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, 'resources/images/'),
        '@components': path.resolve(__dirname, 'resources/js/components'),
        '@mixins': path.resolve(__dirname, 'resources/js/mixins'),
      },
    },
  })
  .setResourceRoot(ASSET_PATH);

if (mix.inProduction()) {
  mix.version();
}
