module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-worklets/plugin', {}, 'worklets'],
    ['react-native-reanimated/plugin', {}, 'reanimated'], // MUST be last
  ],
};
