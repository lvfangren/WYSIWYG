# WYSIWYG

<p align="center">
  <span> English | </span> 
  <a href="README.md" rel="nofollow">简体中文</a>
</p>


Project template based on webpack5 + vue2X + ts

Solve project configuration problems. Compared with vite or some other scaffolding tools, this solves the problems of production environment configuration, cross-domain interface request, CI/CD configuration, etc. (Of course, the premise is that your project needs to be like me [configure production environment](./doc/use-en.md) related), which allows you to concentrate more on completing the project's page development. When the development is completed, you can quickly deploy, so that everyone can see the results, instead of only running on your local service Down.

Sometimes it will reject some highly integrated tools, and sometimes it will make people find it difficult to start.

## How to Use

[use](./doc/use-en.md)
## why use

CI/CD configured

No need to care about the configuration of the production and development environment

Solved potential project optimization problems (packaging, compiling, loading)

Handled cross-domain issues (see the full demo)

Complete the workflow of a front-end project, from development to deployment

......
## expect

deving: 

	* Automation requirement specification, cooperation specification (product PRD, front-end and back-end agreement, self-test use case development)
	* Environment setup
	* Team development specification
	* Automated deployment, testing

testing：

	* R & D quality, standard control
	* Test data problem

releaseing：

	* Online monitoring of the market (performance, online alarm)
	* Message robot (deployed to the designated specific branch to notify the corresponding platform robot, which has been tested or released online)
	* Buried point related (strictly distinguish between problem monitoring and product-related data monitoring)
	* Publish method (publish questions online at any time)

Products have the right to strictly require R&D output to meet expectations, and R&D has the right to require product requirements to be reasonable and meaningful. Tests must understand that they are goalkeepers and whistleblowers.

Let the business surface, reduce garbage time, truly improve development efficiency, truly do things that are valuable to users, and do things that are valuable to projects.

Create the future, create in the future! ! !
## user list

* [XXX](baidu.com)

If your project is completed using this project template, you can submit it in issue or pr, and hope to get your support!

## Changelog
[Recent update 2021.10.04](CHANGELOG.md)

## other

There is no supporting installation of css precompilation, tool functions, vue-router and other libraries, which belong to the needs of the business level and can be installed and used by themselves.

The original intention is to hope that what you see is what you get!

## refer to

[webpack](https://www.webpackjs.com/guides/)

[vue-loader](https://vue-loader.vuejs.org/)

[eslint](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)

[API](https://www.v2ex.com/p/7v9TEc53)

[github action](https://docs.github.com/cn/actions)

[Webpack5 新特性业务落地实战](https://zhuanlan.zhihu.com/p/348612482)

## License

MIT
