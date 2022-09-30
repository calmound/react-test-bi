const customName = require('sugar-design/babel.import');
const customNameCharts = require('moka-bi-charts/dist/babel.import');
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 versions',
            'Firefox ESR',
            '> 1%',
            'ie >= 9',
            'iOS >= 8',
            'Android >= 5',
          ],
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    [
      'import',
      {
        libraryName: 'moka-bi-charts',
        libraryDirectory: 'dist/lib',
        style: false,
        camel2DashComponentName: false,
        customName: customNameCharts,
      },
      'charts',
    ],
  ],
};
