module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
  ],
  'overrides': [],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'testing-library'
  ],
  'ignorePatterns': ['/build/**'],
  'rules': {
    'keyword-spacing': 'warn',
    'no-unused-vars': 'error',
    'prefer-const': 'warn',
    'object-shorthand': 'warn',
    'comma-spacing': 'warn',
    'prefer-template': 'warn',
    'brace-style': 'warn',
    'array-callback-return': 'warn',
    'space-before-blocks': 'warn',
    'space-infix-ops': 'warn',
    'arrow-spacing': 'warn',
    'no-case-declarations': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'array-bracket-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'block-spacing': ['error', 'never'],
    'indent': ['error', 2, {'SwitchCase': 1, 'VariableDeclarator': 1}],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-fallthrough': 'error',
    'default-case': 'error',
    'object-curly-spacing': ['error', 'never'],
    'no-multi-spaces': ['error'],
    'import/no-anonymous-default-export': 'off',
    'testing-library/no-unnecessary-act': 'off',
    'testing-library/prefer-screen-queries': 'off',
    'testing-library/no-node-access': 'off',
    'testing-library/prefer-presence-queries': ['off'],
    'testing-library/no-wait-for-side-effects': ['off'],
    'react/prop-types': 'off',
    'react/no-children-prop': 'off',
    'react/react-in-jsx-scope': 'off',
    'jest/no-conditional-expect': 'off',
    'react/display-name': ['error'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-curly-brace-presence': ['error', {props: 'never', children: 'never'}],
    'react/no-unknown-property': ['error', {ignore: ['qa-testid']}],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'ignore',
      'assignment': 'ignore',
      'return': 'parens',
      'arrow': 'ignore',
      'condition': 'ignore',
      'logical': 'ignore',
      'prop': 'ignore'
    }],
    'react/jsx-curly-newline': ['error', {multiline: 'consistent', singleline: 'consistent'}],
    'react-hooks/rules-of-hooks': 'off'
  }
}