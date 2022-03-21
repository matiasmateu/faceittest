module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
          'module-resolver',
          {
              alias: {
                  '@screens': './src/screens',
                  '@components': './src/components',
                  '@redux': './src/redux',
                  '@data': './src/data',
                  '@interfaces': './src/interfaces',
              },
          },
      ],
  ],
  };
};
