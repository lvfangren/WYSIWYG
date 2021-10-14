# WYSIWYG

<p align="center">
  <span> 简体中文 | </span> 
  <a href="README-en.md" rel="nofollow">English</a>
</p>

基于webpack5 + vue2X + ts的项目模版

针对个人开发，或者校园开发团队，期待使用。

解决项目配置问题，相对于一些脚手架工具，这解决了生产环境配置，跨域接口请求，CI/CD配置等问题（当然，前提是像这样[配置生产环境相关](./doc/use.md)），这开发者可以集中精力的完成项目的开发，当完成开发后自动化部署，让所有人看到成果，而不是只能运行在本地服务下。

有些时候会对一些集成度高的工具产生些排斥，有些时候它反会让人觉得难以下手。

## 使用文档

[使用](./doc/use.md)

## 为什么使用

配置了CI/CD

不需要关心生产和开发环境的配置

解决了潜在的项目优化问题（打包，编译，加载）

处理了跨域问题（可以参见完整的demo）

完备一个前端项目的工作流，从开发到部署上线

......
## 案例支持

* [XXX](baidu.com)

如果您的项目使用了这个项目模版完成，可以在issue或者pr提出，希望得到您的支持！

## Changelog
[Recent update 2021.10.04](CHANGELOG.md)

## 其它

没有配套安装css预编译，工具函数，vue-router等库，属于业务层面的需要，可以自行配套安装使用。

关于vue3版本的需求，建议clone这个项目模版后可以使用[@vue/compat](https://v3.vuejs.org/guide/migration/migration-build.html#overview)完成项目vue3的支持

本意是希望所见即所得

## 参考

[webpack文档](https://www.webpackjs.com/guides/)

[vue-loader文档](https://vue-loader.vuejs.org/)

[eslint文档](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)

[API接口](https://www.v2ex.com/p/7v9TEc53)

[github action 文档](https://docs.github.com/cn/actions)

[Webpack5 新特性业务落地实战](https://zhuanlan.zhihu.com/p/348612482)

## 未来

通过此模版扩展，集成一系列前端相关基建（例如：监控大盘，自动化通知，测试等）；定义完善的研发工作流。
## License

MIT
