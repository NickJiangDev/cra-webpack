// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
    parser: 'babel-eslint',

    extends: [
        'airbnb',
        'plugin:flowtype/recommended',
        'plugin:css-modules/recommended',
        'prettier',
        'prettier/flowtype',
        'prettier/react',
    ],

    plugins: ['flowtype', 'css-modules', 'prettier'],

    globals: {
        __DEV__: true,
    },

    env: {
        browser: true,
    },

    rules: {
        'react/no-array-index-key': 0,
        'css-modules/no-unused-class': 0,
        // disallow mixed 'LF' and 'CRLF' as linebreaks
        // http://eslint.org/docs/rules/linebreak-style
        'linebreak-style': 0,
        // 'linebreak-style': ['error', 'unix'],

        // this option sets a specific tab width for your code
        // http://eslint.org/docs/rules/indent
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                // MemberExpression: null,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoredNodes: ['JSXElement', 'JSXElement *'],
            },
        ],
        // specify the maximum length of a line in your program
        // http://eslint.org/docs/rules/max-len
        'max-len': [
            'error',
            120,
            4,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        // Enforce JSX indentation
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': ['error', 4],
        // Validate props indentation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': ['error', 4],
        // Prevent usage of .bind() in JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        'react/jsx-no-bind': [
            'error',
            {
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowBind: false,
            },
        ],
        // disallow usage of expressions in statement position
        'no-unused-expressions': 0,
        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
        'class-methods-use-this': 0,

        // Recommend not to leave any console.log in your code
        // Use console.error, console.warn and console.info instead
        // https://eslint.org/docs/rules/no-console
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'info'],
            },
        ],

        // Prefer destructuring from arrays and objects
        // http://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],

        // Ensure <a> tags are valid
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
        'jsx-a11y/anchor-is-valid': 0,
        // require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        'jsx-a11y/click-events-have-key-events': 0,
        // Enforce that DOM elements without semantic behavior not have interaction handlers
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        'jsx-a11y/no-static-element-interactions': 0,

        // Allow .js files to use JSX syntax
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

        // Functional and class components are equivalent from React’s point of view
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        'react/prefer-stateless-function': 'off',
        // Enforce a defaultProps definition for every prop that is not a required prop
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        'react/require-default-props': 'off',

        // ESLint plugin for prettier formatting
        // https://github.com/prettier/eslint-plugin-prettier
        'prettier/prettier': 'error',

        'no-return-assign': 0,

        'no-descending-specific': 0,
    },

    settings: {
        // Allow absolute paths in imports, e.g. import Button from 'components/Button'
        // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
        'import/resolver': {
            node: {
                moduleDirectory: [
                    'node_modules',
                    'src',
                    // 'tape',
                    // 'utils',
                    // 'constants',
                    // 'components',
                    // 'utils',
                    // 'reducers',
                    // 'assets',
                    // 'actions',
                    // 'store',
                    // 'routes',
                ],
            },
        },
    },
};
