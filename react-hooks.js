/**
 * The eslint `extends` loads plugins from a unique location in order to identify plugins by name, while parsers, shared configs, etc. need to have a fully
 * resolved filepath to be included relative to the project.
 * @see https://github.com/eslint/eslint/issues/12450#issuecomment-542988227
 */

module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-airbnb/rules/react-hooks'),
    'plugin:storybook/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
    {
      files: ['*.jsx', '*.js', '*.tsx', '*.ts'],
    },
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
      }
    }
  ],
  globals: {
    globalThis: false // means it is not writeable
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.jsx', '.js', '.tsx', '.ts']
      }
    }
  },
  rules: {
    'class-methods-use-this': 'error',
    'import/extensions': ['error', 'ignorePackages', {
      mjs: 'never',
      js: 'never',
      ts: 'never',
      jsx: 'never',
      tsx: 'never'
    }],
    'import/prefer-default-export': 'off',
    'max-len': ['warn', {
      code: 160,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
    }],
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
      destructuredArrayIgnorePattern: '^_',
    }],
    'react/function-component-definition': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': ['warn', {
      classes: 'defaultProps',
      functions: 'defaultArguments',
      forbidDefaultForRequired: true,
    }],
  }
};
