# 详细文档

- 拉取项目代码
```bash
git clone git@github.com:lvfangren/WYSIWYG.git 
或 git clone https://github.com/lvfangren/WYSIWYG.git
或 gh repo clone lvfangren/WYSIWYG (u need read github ci)
或者 npx degit git@github.com:lvfangren/WYSIWYG.git#main u-project-name

```
- 设置为个人的仓库地址
```bash
git remote set-url origin XXX(u self repositories)
```

- 下载依赖
```bash
npm install
或 yarn install
```

- 运行模版
```
npm run dev
或 yarn run dev
```


它运行了一个基本的例子，但是不像vue-cli等工具，这没有组织你项目的目录结构，例如：你可以把你的图片文件夹命名成AAA都是可以的，但是注意不要修改已经指定的文件目录，这个很重要！


## 关于生产环境配置

阿里云服务器准备