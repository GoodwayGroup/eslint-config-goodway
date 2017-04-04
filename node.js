module.exports = {
    extends: require.resolve('eslint-config-airbnb-base'),
    rules: {
      'comma-dangle': 'off',
      indent: ['error', 4],
      'no-param-reassign': ['error', { 'props': false }]
    }
};
