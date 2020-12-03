module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.0.0',
        targets: {
          node: '8.10',
        },
      },
    ],
    '@babel/preset-typescript',
  ]
  const plugins = [
    'babel-plugin-const-enum',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-typescript',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ]

  return {
    presets,
    plugins,
  }
}
