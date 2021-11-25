const webpackConfig = require('../webpack.client.config');

module.exports = {
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      ...webpackConfig.resolve,
      alias: {
        ...config.resolve.alias,
        ...webpackConfig.resolve.aliases,
      },
    },
  }),
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ]
}
