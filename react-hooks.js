module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
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
  parserOptions: {
    ecmaVersion: 2020,
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
        extensions:['*.jsx', '*.js', '*.tsx', '*.ts']
      }
    }
  },
  rules: {
    'class-methods-use-this': 'error',
    'import/extensions': ['error', 'ignorePackages', {
      mjs: 'never',
      js: 'ignorePackages',
      ts: 'ignorePackages',
      jsx: 'ignorePackages',
      tsx: 'ignorePackages'
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
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-unused-vars': ['error', {
      destructuredArrayIgnorePattern: '^_',
      ignoreRestSiblings: true,
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': ['error'],
    'react/require-default-props': ['warn', {
      classes: 'defaultProps',
      functions: 'defaultArguments'
    }],
    'react-hooks/exhaustive-deps': 'warn',
    strict: [2, 'never']
  }
};
