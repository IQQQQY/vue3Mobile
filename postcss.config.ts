module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375,
      unitToConvert: 'px',
      viewportUnit: 'vw',
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/],
      include: [/src/],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 1338,
    },
  },
}
