module.exports = {
    extends: require.resolve('eslint-config-airbnb-base'),
    rules: {
      'comma-dangle': 'off',
      indent: ['error', 4],
      'no-param-reassign': ['error', { 'props': false }],
      'no-underscore-dangle': 'off',
      'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
      'no-return-await': ['warn'],
      'max-len': ['warn', {
        'code': 160,
        'ignoreUrls': true,
        'ignoreComments': false,
        'ignoreRegExpLiterals': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreTrailingComments': true
      }],
    }
};
