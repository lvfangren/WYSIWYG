# WYSIWYG

<p align="center">
  <span> 简体中文 | </span> 
  <a href="README-en.md" rel="nofollow">English</a>
</p>

基于webpack5 + vue2X + ts的项目模版

针对个人开发，或者校园开发团队，期待使用。

解决项目配置问题，相对于一些脚手架工具，这解决了生产环境配置，跨域接口请求，CI/CD配置等问题（当然，前提是你的项目需要像我一样[配置生产环境](./doc/use.md#关于生产环境配置)相关），这开发者可以集中精力的完成项目的开发，当完成开发后自动化部署，让所有人看到成果，而不是只能运行在本地服务下。

有些时候会对一些集成度高的工具产生些排斥，有些时候它反会让人觉得难以下手。

## 使用文档

[使用](./doc/use.md)

## 为什么使用这个项目模版

配置了CI/CD

不需要关心生产和开发环境的配置

解决了潜在的项目优化问题（打包，编译，加载）

处理了跨域问题（可以参见完整的demo）

完备一个前端项目的工作流，从开发到部署上线

## 未来

开发：

	* 自动化需求规范，合作规范（产品PRD，前后端约定，自测用例制定）
	* 环境搭建
	* 团队开发规范
	* 自动化部署，测试

提测：

	* 研发质量，规范把控
	* 测试数据问题

上线：

	* 线上监控大盘（性能，线上报警）
	* 消息机器人（部署至指定特定分支通知对应平台机器人，已经进行提测或者发布上线）
	* 埋点相关（严格区分问题监控和产品相关数据监控）
	* 发布方式（随时上线发布问题）

产品有权严格要求研发产出符合预期，研发有权要求产品需求合理有意义，测试必须明白他们是守门员，吹哨人。

让业务浮于表面，减少垃圾时间，真正提效开发，真正做对用户有价值的事，做对工程有价值的事。

创造未来，在未来创造！！！


## 使用

当这个项目模版clone下来后

* npm install

* npm run dev

它运行了一个基本的例子，但是不像vue-cli等工具，这没有组织你项目的目录结构，例如：你可以把你的图片文件夹命名成AAA都是可以的，但是注意不要修改已经指定的文件目录，这个很重要！


## 关于生产环境配置

阿里云服务器准备


## 案例支持

* [XXX](baidu.com)

如果您的项目使用了这个项目模版完成，可以在issue或者pr提出，希望得到您的支持！

## Changelog
[Recent update 2021.10.04](CHANGELOG.md)

## 其它

考虑到灵活度,没有配套安装vue-router等相关全家桶，那是开发的项目需求有关，属于业务层面的需要，所以可以自行配套安装使用。

关于vue3版本的需求，建议clone这个项目模版后可以使用[@vue/compat](https://v3.vuejs.org/guide/migration/migration-build.html#overview)完成项目vue3的支持

本意是希望所见即所得

## 参考

[webpack文档](https://www.webpackjs.com/guides/)

[vue-loader文档](https://vue-loader.vuejs.org/)

[eslint文档](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)

[API接口](https://www.v2ex.com/p/7v9TEc53)

[github action 文档](https://docs.github.com/cn/actions)

[Webpack5 新特性业务落地实战](https://zhuanlan.zhihu.com/p/348612482)

## License

MIT
