module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(png|jpg|ico|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mock__/ImageMock.js',
  },
  setupFiles: ['<rootDir>/__mock__/setup.js'],
};
