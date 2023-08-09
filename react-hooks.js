module.exports = {
  extends: [
    'eslint-plugin-storybook/dist/configs/recommended',
    'eslint-config-airbnb',
    'eslint-config-airbnb/rules/react-hooks',
  ].map(require.resolve),
  overrides: [
    {
      files: ['*.jsx', '*.js', '*.tsx', '*.ts'],
    },
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'import/no-extraneous-dependencies': 'off'
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
        extensions:['.jsx', '.js', '.tsx', '.ts']
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
    'max-len': ['error', {
      code: 120,
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
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': ['error'],
    'react/react-in-jsx-scope': 'off', // not needed for react 17+
    'react/require-default-props': ['warn', {
      classes: 'defaultProps',
      functions: 'defaultArguments'
    }],
    'react/self-closing-comp': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  }
};
