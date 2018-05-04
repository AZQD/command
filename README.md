# NPM
npm应用

npm包发布步骤：
1.新建一个项目：npm init;

2.登陆npm：npm login；

3.发布：npm publish;

npm包更新步骤：

1.修改包的版本（package.json里的version字段）;

2.发布：npm publish;

npm常用命令小结：

npm install [-g] 本地或全局安装模块

npm uninstall [-g] 本地或全局卸载模块

npm update 更新模块

npm ls 查看安装的模块

npm list 列出已安装模块

npm show  显示模块详情

npm info 查看模块的详细信息

npm search 搜索模块

npm publish 发布模块

npm unpublish 删除已发布的模块

npm -v 或 npm version显示版本信息

npm view npm versions 列出npm 的所有有效版本

npm install -g npm@2.14.14 /npm update -g npm@2.14.14  安装指定的npm版本

npm init 引导创建一个package.json文件，包括名称、版本、作者这些信息等

npm outdated  #检查模块是否已经过时

    npm root  [-g] 查看包的安装路径，输出 node_modules的路径，
    npm help 查看某条命令的详细帮助 例如输入npm help install
    npm config 管理npm的配置路径

详情参考链接：
https://www.cnblogs.com/wdlhao/p/5900360.html#description-npm