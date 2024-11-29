const { getDefaultConfig } = require('metro-config');

const defaultConfig = getDefaultConfig();

module.exports = {
  ...defaultConfig,
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'wasm'],
  },
};
