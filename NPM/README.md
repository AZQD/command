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


NVM是一个可以让你在同一台机器上安装和切换不同版本node的工具。
windows-nvm的下载地址:
https://link.jianshu.com/?t=https://github.com/coreybutler/nvm-windows/releases

E:\Program Files\应用程序\nvm-setup.exe

windows下nvm的命令([]中的参数可有可无)：
nvm arch                         查看当前系统的位数和当前nodejs的位数
nvm install <version> [arch]     安装制定版本的node 并且可以指定平台 version 版本号  arch 平台
nvm list [available]
  - nvm list   查看已经安装的版本
  - nvm list installed 查看已经安装的版本
  - nvm list available 查看网络可以安装的版本
nvm on                           打开nodejs版本控制
nvm off                          关闭nodejs版本控制
nvm proxy [url]                  查看和设置代理
nvm node_mirror [url]            设置或者查看setting.txt中的node_mirror，如果不设置的默认是 https://nodejs.org/dist/
nvm npm_mirror [url]             设置或者查看setting.txt中的npm_mirror,如果不设置的话默认的是：https://github.com/npm/npm/archive/.
nvm uninstall <version>          卸载制定的版本
nvm use [version] [arch]         切换制定的node版本和位数
nvm root [path]                  设置和查看root路径
nvm version                      查看当前的版本
下面是安装和使切换nodejs的几个简单的命令使用：

nvm install 8.0.0 64-bit
nvm use 8.0.0
nvm list //查看以己经安装的

参考链接：https://www.cnblogs.com/SpecterGK/p/8550392.html

nvm use报错 exit status 1: ' 出现乱码：
路径不对，或者路径名称有空格；

### NRM