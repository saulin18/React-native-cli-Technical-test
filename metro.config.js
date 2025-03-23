const { getDefaultConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver = {
  ...defaultConfig.resolver,
  alias: {
    '@': './src',
  },
};

module.exports = defaultConfig;
