import path from 'path'
import { Configuration } from 'webpack'

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config: Configuration) => {
    config.resolve!.alias = {
      ...config.resolve!.alias,
      assets: path.resolve(__dirname, '../public/assets'),
      components: path.resolve(__dirname, '../src/components'),
      theme: path.resolve(__dirname, '../src/theme'),
      public: path.resolve(__dirname, '..', 'public'),
    }
    return config
  },
}
