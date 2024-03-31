export default {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
    // 指定如何解析语法
    parser: 'vue-eslint-parser',
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                ".eslintrc.{js,cjs}"
            ],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        jsxPragma: 'React',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        "@typescript-eslint",
        "vue"
    ],
    rules: {
        'no-var': 'error',
        'no-multiple-empty-lines': [1, { max: 1 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unexpected-multiline': 'error',

        // typescript-eslint
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'off', // 是否可以使用@ts-ignore
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off', // 确保没有为null或undefined的断言
        '@typescript-eslint/no-namespace': 'off', // 禁止自定义的typescript模块和命名空间
        '@typescript-eslint/no-semi': 'off', // 禁止使用分号

        // vue plugin eslint
        'vue/multi-word-component-names': 'off', // 组件名使用-连接多个单词
        'vue/script-setup-uses-vars': 'error', // 防止script setup中的变量被<template>标记为未使用
        'vue/no-mutating-props': 'off',
        'vue/attribute-hyphenation': 'off' // vue属性命名驼峰
    }
}
