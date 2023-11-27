module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@mockups': './src/mockups',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@types': './src/types',
        },
      },
    ],
  ],
};
