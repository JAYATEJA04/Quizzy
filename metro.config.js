const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
// const {
//   wrapWithReanimatedMetroConfig,
// } = require('react-native-reanimated/metro-config');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
// module.exports = wrapWithReanimatedMetroConfig(config);
// const {
//   wrapWithReanimatedMetroConfig,
// } = require('react-native-reanimated/metro-config');

// const config = {
//   // Your existing Metro configuration options
// };

// module.exports = wrapWithReanimatedMetroConfig(config);
