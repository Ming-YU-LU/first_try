module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-html/vue',
        'stylelint-config-standard-scss',
        'stylelint-recommended-vue/scss',
        'stylelint-config-recess-order',
        'stylelint-prettier/recommended'
    ],
    plugins: ['stylelint-prettier'],
    override: [
        {
            files: [
                '**/*.(scss|css|vue|html)'
            ],
            customSyntax: 'postcss-scss',
        },
        {
            files: [
                '**/*.(vue|html)'
            ],
            customSyntax: 'postcss-html'
        }
    ],
    ignoreFiles: [
        '**/*.js',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.ts',
        '**/*.md',
        '**/*.json',
        '**/*.yaml'
    ],
    rules: {
        'prettier/prettier': true,
        'value-keyword-case': null,
        'no-descending-specificity': null,
        'function-url-quotes': 'always',
        'no-empty-source': null,
        'selector-class-pattern': null,
        'property-no-unknown': null,
        'block-opening-brace-space-before': 'always',
        'value-no-vendor-prefix': null,
        'property-no-vendor-prefix': null,
        'select-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'v-deep', 'deep'] // 忽略的属性 修改element 默认样式用的上
            }
        ]
    }
}