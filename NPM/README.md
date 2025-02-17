# NPM应用


### 一、npm安装依赖包

1.全局安装的方式：npm install -g 模块名称

2.本地安装的方式：

npm install 模块 安装好后不写入package.json中

npm install 模块 --save 安装好后写入package.json的dependencies中（生产环境依赖）

npm install 模块 --save-dev 安装好后写入package.json的devDepencies中（开发环境依赖）


### 二、npm删除包

1.删除全局模块：npm uninstall -g <package>利用npm

2.删除本地模块：

npm uninstall 模块：删除模块，但不删除模块留在package.json中的对应信息

npm uninstall 模块 --save 删除模块，同时删除模块留在package.json中dependencies下的对应信息

npm uninstall 模块 --save-dev 删除模块，同时删除模块留在package.json中devDependencies下的对应信息


### 三、npm包发布步骤：

【注意点1】不能和已有的包的名字重名！

【注意点2】还有一点要注意的是npm对包名的限制：不能有大写字母/空格/下滑线!

【注意点3】你的项目里有部分私密的代码不想发布到npm上？

1.登陆npm：npm login // npm whoami 查看登录状态

    常见问题：首次npm绑定设备，需要向npmjs.com申请用户名，执行：
    npm adduser

    常见问题：npm login报错：Sign up to CNPM  Public registration is not allowed
    方法1：全局修改npm镜像源，执行如下配置：
        npm config set registry https://registry.npmjs.org/
    方法2：局部修改npm镜像源，在项目根目录添加.npmrc文件，内容如下：
        registry=https://registry.npmjs.org/
        
    常见问题：npm login登录使用的OTP验证码：是手机上的FreeOTP软件，对应的npm账号的验证码；
    $ npm login
    Username: l********e
    Password: ******
    Email: (this IS public) 159*******8@163.com
    npm notice Please use the one-time password (OTP) from your authenticator application
    Enter one-time password from your authenticator app: ******
    Logged in as liuchaojie on https://registry.npmjs.org/.
        
    常见问题：由于Two-Factor Authentication导致github发布npm包失败
    https://blog.csdn.net/qq_35261296/article/details/143906379
    
    常见问题：如果执行 npm run pub 失败了，修改相关配置后，不用再次执行npm run pub，执行npm publish就好了。

2.本地新建一个文件夹：mkdir azqd

3.进入该文件：cd azqd

4.新建一个项目：npm init

5.添加一些项目信息，直到is ok

6.新建一个index.js,写一个方法，将它export，如：

    module.exports = {
      consoleFun: function (str) {
        console.log(str);
      }
    };

7.发布：npm publish

8.登陆 https://www.npmjs.com/login 可以查看自己发布的包信息


### 四、npm撤销发布包

【注意点1】根据规范，只有在发包的24小时内才允许撤销发布的包

1.npm unpublish // 如果报权限方面的错，加上--force

2.npm unpublish的推荐替代命令：npm deprecate <pkg>[@<version>] <message>

使用这个命令，并不会在社区里撤销你已有的包，但会在任何人尝试安装这个包的时候得到警告


### 五、npm包更新步骤：

1.修改包的版本（package.json里的version字段）;

(1).手动修改；

(2).通过npm version <update_type>自动改变版本

    update_type为patch, minor, or major其中之一，分别表示补丁，小改，大改    
    具体体现为：
    对于"version":"x.y.z"
    1.修复bug,小改动，增加z
    2.增加了新特性，但仍能向后兼容，增加y
    3.有很大的改动，无法向后兼容,增加x
     
    例如：我原本的项目是1.0.0版本的话
    若是1中情况，变为1.0.1
    若是2中情况，变为1.1.0
    若是3中情况，变为2.0.0

2.发布：npm publish;


### 六、npm包使用步骤：

1.通过npm install azqd 安装该包

2.导入引入的包模块，调用其方法

    const azqd = require('azqd'); //或者：import azqd from 'azqd';
    azqd.consoleFun(666); // 666


### 七、npm升级指定依赖包

1.更新全局包：npm update <name> -g

2.更新生产环境依赖包：npm update <name> --save

3.更新开发环境依赖包：npm update <name> --save-dev

注意：升级后npm对应的包，需要重新启动一下自己的项目；


### 八、npm常用命令小结：

npm install [-g] 本地或全局安装模块

npm uninstall [-g] 本地或全局卸载模块

npm update 更新模块

npm ls 查看安装的模块

npm list 列出已安装模块

npm show  显示模块详情

npm info 查看模块的详细信息

npm search 搜索模块；如 npm search math 就会搜索出所有关键字为math的包；

npm login 登录npm

npm whoami 查看登录状态

npm publish 发布模块

npm unpublish 删除已发布的模块

npm -v 或 npm version显示版本信息

npm view npm versions 列出npm 的所有有效版本

npm install -g npm@2.14.14 /npm update -g npm@2.14.14  安装指定的npm版本

npm init 引导创建一个package.json文件，包括名称、版本、作者这些信息等

npm init -y 一键快速创建一个package.json；

npm outdated  #检查模块是否已经过时

npm root  [-g] 查看包的安装路径，输出 node_modules的路径，

npm help 查看某条命令的详细帮助 例如输入npm help install

npm config 管理npm的配置路径

详情参考链接：

https://www.cnblogs.com/wdlhao/p/5900360.html#description-npm


### 九、NVM

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

安装指定版本node
nvm install 12.19.0

nvm use报错 exit status 1: ' 出现乱码：

安装路径名称有空格，需要重新安装；

安装流程参考：https://blog.csdn.net/qq_41409353/article/details/109553940

安装cnpm：npm i -g cnpm --registry=https://registry.npm.taobao.org


####镜像

全局切换镜像源：npm config set registry https://r.cnpmjs.org/

全局切换官方镜像源：npm config set registry https://registry.npmjs.org/

查看镜像源使用状态：npm get registry

删除已设置的镜像地址：npm config delete registry

你也可以通过.npmrc文件来设置镜像地址。
在你的工作目录或者用户的主目录中创建或编辑.npmrc文件，添加或修改以下内容：

    registry=https://registry.npm.taobao.org

NPM镜像源查看和切换-参考文档：https://www.jianshu.com/p/944aad9487c5

      npm ---------- https://registry.npmjs.org/
      yarn --------- https://registry.yarnpkg.com/
      tencent ------ https://mirrors.cloud.tencent.com/npm/
      cnpm --------- https://r.cnpmjs.org/
      taobao ------- https://registry.npmmirror.com/
      npmMirror ---- https://skimdb.npmjs.com/registry/

### 十、NRM

使用nrm来切换npm源

1. npm install -g nrm

2. nrm ls：列出可用的源

3. nrm use taobao：通过 nrm use指令来切换不同的源

4. nrm add 别名 源地址：添加源

PS：如果安装nrm之后，仍然提示：nrm:command not found，则需要配置环境变量；
nrm安装路径一般为：C:\Users\liuchaojie\AppData\Roaming\npm
将这个路径配置到环境变量的Path里面即可，然后重启命令行工具，执行nrm ls，即可；



### YARN

安装yarn npm install yarn -g 
yarn add
yarn add [package]@[version]
这将安装您的dependencies中的一个或多个包。
用 --dev 或 -D 会在 devDependencies 里安装一个或多个包。


### 更新包

    1.安装指定版本node：
    nvm install 12.19.0
    
    2.安装指定的npm版本：
    npm install -g npm@2.14.14 /npm update -g npm@2.14.14
    
    3.安装最新版本：
    npm i @tongzhen-fe/library@latest
