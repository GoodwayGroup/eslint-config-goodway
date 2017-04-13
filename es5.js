module.exports = {
    extends: [
      'eslint-config-airbnb-base/rules/best-practices',
      'eslint-config-airbnb-base/rules/errors',
      'eslint-config-airbnb-base/rules/node',
      'eslint-config-airbnb-base/rules/style',
      'eslint-config-airbnb-base/rules/variables',
      'eslint-config-airbnb-base/rules/imports',
    ].map(require.resolve),
    rules: {
      'comma-dangle': 'off',
      indent: ['error', 4],
      'no-param-reassign': ['error', { 'props': false }]
    }
};
