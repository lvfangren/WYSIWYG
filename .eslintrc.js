// console.log('LFRLFR', process.env);
module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        // parser: {
        //   "js": "babel-eslint",
        //   "ts": "@typescript-eslint/parser",
        // },
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: 'module',
        allowImportExportEverywhere: false,
    },
    extends: [
        'plugin:vue/essential',
        'standard',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    plugins: [
        'vue',
    ],
    rules: {
        'no-void': 'off',
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 要求或禁止函数圆括号之前有一个空格
        'space-before-function-paren': 0,
        // 在回调中需要错误处理
        'handle-callback-err': 0,
        // 要求使用Error对象作为Promise拒绝的原因
        'prefer-promise-reject-errors': 0,
        // 禁止使用这种形式的三元：a ? b = c : null
        'no-unused-expressions': 0,
        // 不允许多余的返回语句
        'no-useless-return': 0,
        // 不允许混合二元运算符
        'no-mixed-operators': 0,
        // 运算符必须放在行尾
        'operator-linebreak': 0,
        // 对象中结尾最后一项的逗号结尾
        'comma-dangle': [2, 'always-multiline'],
        // 回调函数不可以传boolean
        'standard/no-callback-literal': 0,
        // 关闭必须驼峰命名
        camelcase: 'off',
        // 语句结尾需要分号
        semi: ['error', 'always'],
        // 不允许使用eval语句
        'no-eval': 1,
        // 根据环境判断变量声明了是否必须使用
        'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 缩进为四空格
        indent: ['error', 4],
        quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    },
};
