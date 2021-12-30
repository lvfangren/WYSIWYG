'use strict';
const purgecss = require('@fullhuman/postcss-purgecss');
module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        // 增加去除无用的css样式的插件，purgecss
        purgecss({
            content: ['./public/**/*.html', './src/**/*.vue'],
            defaultExtractor(content) {
                const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
                return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
            },
            safelist: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/,
                /^router-link(|-exact)-active$/, /data-v-.*/,
            ],
        }),
    ],
};
