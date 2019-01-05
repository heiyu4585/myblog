#启动方式


# 后台安装方式

`cd admin` 
`npm i`


后台启动方式(admin.js文件很大11兆带改版升级)
`cd admin && node app `


新增文章 `open host:8081/admin#/article/add`

文章列表 `/admin#/article/list`

## 开发环境

npm run dev


前台访问

1.首页`host:8080`

2.内容页 `:8080/post/1`

3.栏目页 `:8080/category/3`


## 生产环境
`cd blog && npm start`
`cd admin && npm start` //用于提交接口

--

技术栈:

vue+vueRouter+express+express+mysql+graphQL

主要功能

1. vue 热更新 
2. vue开发环境配置
3. vue生产环境构建
4. graphQL应用
5. mysql数据库连接
6. markdown前后台支持
7. express+webpack 一套环境搭建前后端应用
4. 后台系统  博客文章的新增,更新
1. 文章页搭建对于markdown
  6. 更新修改文章
  4. ssr
5.ssr 的title和meta描述信息

## todoList
 - 添加nodeMail
    修改第三方邮箱验证码
    注意不要提交 邮箱码
 - Puppeteer 
    - 当前功能点:
        - 屏幕快照
        - 样式比对
    - 待开发
        - 设置cookie
        - 爬虫去掘金抓数据

  1. 登录系统
  graphQL+passport https://github.com/jessedvrs/graphql-passport-example
  
  3. 开发环境 dev添加
  
  
  8. graphql引用方式修改(引用方式???)


  10. 栏目URL点击后不跳转


   2. /blog 301至 blog. 二级域名
    配置了 /blog 没有访问的权限及 index.php跳转但是没有起作用
  
  ## 已完成 
    9. 去掉#号https://router.vuejs.org/zh-cn/essentials/history-mode.html //history模式
  1. 前后端 项目同时 启动  目前考虑不需要

  
    
#知识点

1.markdown组件

使用的是https://github.com/PanJiaChen/vue-element-admin/ 中的markdown组件

后台markdown使用的是 [simplemde-markdown-editor](https://github.com/sparksuite/simplemde-markdown-editor)
 
参考 [markdown](https://segmentfault.com/a/1190000009762198#articleHeader14)

2.

### 后台vue模块比对

    因为我这博客比较简单,所以只是简单的抽取了用得到的模块

下面是查询过程中,了解到的项目比对

1. 集成的后台项目
[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

文章:https://juejin.im/post/59097cd7a22b9d0065fb61d2

2. 后台可以可开发项目

[admin-vue](https://admin.vuebulma.com/#/)

[Vue 2.0 Admin后台管理模板对比](http://lanyuanxiaoyao.com/2017/07/05/vue-admin/#vue-adminstar-4876)



### 
>koa + vue + vueRouter + vueX + ssr

koa+vue+mysql搭建博客基础

[多页架构的前后端分离方案（webpack+express）](https://segmentfault.com/a/1190000008644787)
[基于webpack的前后端分离开发环境实战](https://segmentfault.com/a/1190000009266900)
[webpack多页面配置6--热加载刷新](https://godbasin.github.io/2017/08/19/webpack-multi-project-6-hot-reload/)

2.
参考:
[Node+Koa2+Mysql 搭建简易博客](http://www.wclimb.site/2017/07/12/Node-Koa2-Mysql-%E6%90%AD%E5%BB%BA%E7%AE%80%E6%98%93%E5%8D%9A%E5%AE%A2/)


ssr

[简单的 Vue SSR Demo](https://juejin.im/entry/5a56c944518825734d1485bc)

[Vue-Koa同构开发环境](http://miaooo.me/article/Vue-Koa%E5%90%8C%E6%9E%84%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)



#### 待完成:
1. [为 Koa 框架封装 webpack-dev-middleware 中间件](https://segmentfault.com/a/1190000004883199)
是否可以用koa调用webpack,启用一套服务.(应该可以), 先用koa,后期考虑一套,当前考虑使用使用express

2. [手摸手，带你用vue撸后台 系列三(实战篇)](https://segmentfault.com/a/1190000009762198)

3. [element](http://element-cn.eleme.io/#/zh-CN/component/cascader)

4. [服务端渲染](https://segmentfault.com/a/1190000012294822)
    [简单的 Vue SSR Demo](https://juejin.im/entry/5a56c944518825734d1485bc)
[Vue项目SSR改造实战](https://segmentfault.com/a/1190000009373793)

[从零开始搭建vue-ssr系列之二：Client端渲染以及webpack2+vue2踩坑之旅](https://segmentfault.com/a/1190000009372772)

[Vue SSR 从入门到 Case Study](https://juejin.im/post/58f2ceffa0bb9f006a990e30)

#####优化:

[给非程序员的爬虫教程（十六）：接下来需要学习什么](http://blog.sevenplus.me/)

[基于 Webpack 3 的 Vue.js 工程项目脚手架](https://zhuanlan.zhihu.com/p/27960679)


[初识NodeJS服务端开发（Express+MySQL）](http://www.alloyteam.com/2015/03/sexpressmysql/)

2.
[Node: Puppeteer + 图像识别 实现百度指数爬虫 #4](https://github.com/Coffcer/Blog/issues/4)


~~博客样式参考  http://zaaack.github.io/2015/12/29/projects/#chrome-timer~~


https://segmentfault.com/a/1190000009565131



# todolist
1.如果接口不在router内的页面组件内,而是在页面组件的子组件内,暂时没有实现数据预取.

暂时通过grahql实现接口合并

2.this.$router.push  有的时候回失效.与ele的分页组件组合

初步怀疑 promise 问题,因为快速点击会失效

## alinode  : 

启动命令ENABLE_NODE_LOG=YES ./node_modules/.bin/cross-env NODE_ENV=production node app