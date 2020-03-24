const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  addWebpackAlias
} = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    cmp: path.resolve(__dirname, 'src/components')
  }),
  addPostcssPlugins([
    require('tailwindcss')({
      theme: {
        extend: {
          width: {
            '1/24': '4.16666666667%',
            '2/24': '8.33333333333%',
            '3/24': '12.5%',
            '4/24': '16.6666666667%',
            '5/24': '20.8333333333%',
            '6/24': '25%',
            '7/24': '29.1666666667%',
            '8/24': '33.3333333333%',
            '9/24': '37.5%',
            '10/24': '41.6666666667%',
            '11/24': '45.8333333333%',
            '12/24': '50%',
            '13/24': '54.1666666667%',
            '14/24': '58.3333333333%',
            '15/24': '62.5%',
            '16/24': '66.6666666667%',
            '17/24': '70.8333333333%',
            '18/24': '75%',
            '19/24': '79.1666666667%',
            '20/24': '83.3333333333%',
            '21/24': '87.5%',
            '22/24': '91.6666666667%',
            '23/24': '95.8333333333%'
          }
        }
      }
    })
  ])
)
