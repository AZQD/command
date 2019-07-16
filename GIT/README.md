* git的常用命令
	* 生成一个本地仓库
		* 新建 : git init
		* 克隆 : git clone url
	* 添加文件并提交
		* git add *
		* git commit -m "说明信息"
	* git在本地维护了3个区域
		* 工作区(working dir)
		* 缓存/暂存区(Index/Stage)     git add
		* 版本区(HEAD)   git commit
	* 推送
		* 将本地仓库中的更新提交到远程仓库: 
			* 如果是新建的, 先要与远程仓库关联起来: git remote add origin 远程仓库的地址  
			* 推送: git push origin master 
	* 拉取
		* git pull
			* git pull origin master
			* 自动合并
		* git fetch
			* git fetch origin master:tmp
			* git diff tmp   
			* git merge tmp : 将tmp分支合并到当前分支
			* 需要手动合并
	* 恢复
		git checkout commit_id <file.name> : 将指定文件回到指定版本
		git reset --hard HEAD  : 将整个工作区回到最新版本
		git reset --hard HEAD^ : 回到上一个版本
	* 其它的命令:
		* git log/reflog
		* git status
		* git diff 
	* 忽略:
		* 在项目的根目录下创建一个.gitignore
		* 在.gitignore添加所有需要忽略的文件/文件夹
			* /xxx : 根目录下的xxx
			* yyy : 所有的yyy
		* 提交(自动忽略指定的文件/文件夹)
	* git分支
		* git checkout -b feature_x
		* git checkout master
		* git push origin <branch> : 推送指定分支到远程仓库的指定分支
		* git merge <branch>
	* 公司多个协同
		* New Collaborators并加入
		* clone/push/pull
	* 开源项目多人协同:
		* fork: 创建一个分支版本到我的账户下
		* clone/commit/push
		* pull request : 向原始项目提交一个pull的请求
		* 查看/diff/merge
		* 可以进行发信息交流
	* 使用TortoiseGit
		* 忽略
		* 使用GIT SSH
			* public Key需要配置到github上
			* private key 保存为一个ppk文件


	如果删除github中的文件，git add用：git add -A

	git add -u：将文件的修改、文件的删除，添加到暂存区。
	git add .：将文件的修改，文件的新建，添加到暂存区。
	git add -A：将文件的修改，文件的删除，文件的新建，添加到暂存区。

	git GUI here  : GUI: Graphical User Interface(用户图形界面)
	git Bash here : git bash是Windows下的命令行工具。


关于git：
git pull origin develop //先拉到本地，然后执行以下操作，防止冲突。
git add 
git add -A  //强制
git commit -m "message"
git push origin develop //上传至远程仓库
git status //查看状态
git log //查看日志

避免git不识别大小写：
git mv --force web/fatburntestReact/jsx/info.jsx web/fatburntestReact/jsx/RankList.jsx

燃脂营相关代码：
git clone git@git.picooc.com:tanchao/detection.picooc.com.git //下载代码
git branch //找到分支
git branch develop //找到指定分支
git checkout develop //检出分支
git pull origin develop//拉代码
git config core.longpaths true //文件名过长，取消限制

官网pull方法：
git clone git@git.picooc.com:web_developer/www.picooc.com.git
代码拉下来之后把git窗口关掉，重新打开：
查看分支：git branch
创建分支：git branch develop
查看分支：git branch
切换分支：git checkout develop
查看分支：git branch
然后就可以正常操作咯；


1、在需要创建 .gitignore 文件的文件夹, 右键选择Git Bash 进入命令行，进入项目所在目录。

2、输入 touch .gitignore ，生成“.gitignore”文件。

3、在”.gitignore” 文件里输入你要忽略的文件夹及其文件就可以了。（注意格式）

我的 .gitignore：

.deploy_git/
node_modules/
public/

git删除文件/文件夹：
rm -rf 文件名
rm 是 linux系统下删除文件的命令
 f 忽略不存在的文件，强制删除，不给出提示。
- r 指示rm将参数中列出的全部目录和子目录均递归地删除。


删除本地分支：
git branch -d branchname
删除远程分支：
git branch -d branchname
git push origin :branchname


本地分支连接远程分支:
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/AZQD/ReactStudy.git
git push -u origin master


git tag的使用：
Git 中的tag指向一次commit的id，通常用来给开发分支做一个标记，如标记一个版本号。
1.添加标签： git tag -a v1.0.0 -m "message"
注解：git tag 是打标签的命令，-a 是添加标签，其后要跟新标签号，-m 及后面的字符串是对该标签的注释。
2.提交标签到远程仓库 ：git push origin --tags 或者 git push origin v1.0.0
注解：就像git push origin master 把本地修改提交到远程仓库一样，--tags可以把本地的打的标签全部提交到远程仓库。
3.删除标签：git tag -d version
注解：-d 表示删除，后面跟要删除的tag名字
4.删除远程标签：git push origin :v1.0.0
注解：就像git push origin :branch_1 可以删除远程仓库的分支branch_1一样， 冒号前为空表示删除远程仓库的tag。
5.查看标签：git tag或者git tag -l

重命名分支:
git branch -m oldBranch newBranch

删除本地分支：
git branch -d branchname
删除远程分支：
git branch -d branchname
git push origin :branchname

创建分支，在分支上开发：
git branch test
git checkout test
git push origin test

test分支合并到master分支：
1.在test分支上修改好之后，提交代码：git push origin test
2.切换到主分支：git checkout master ,然后先拉下代码：git pull origin master，保证master代码是最新的；
3.将分支代码合并到主分支：git merge test
4.提交代码： git push origin master


看不到git远程分支:
先用fetch命令更新remote索引:git fetch
然后查看分支：git branch 
切回指定分支：git checkout branchName


git 对比两个分支差异
git diff dev master

git reset --hard HEAD 或者 git reset --hard   将整个工作区回到最新版本
git reset --hard xxxxxx  完成撤销,同时将代码恢复到前一commit_id 对应的版本(xxxxxx为版本的前六位)

git reset xxxxxx
完成Commit命令的撤销，但是不对代码修改进行撤销，可以直接通过git commit 重新提交对本地代码的修改

git branch -a 命令可以查看所有本地分支和远程分支


切换分支的时候，如果没有看到你想要的分支,先获取所有分支:

git fetch 或者 git pull


pwd：
命令用作显示工作目录的路径名称

git clone --depth=1 url
depth用于指定克隆深度，为1即表示只克隆最近一次commit.
比如Part-time-job这个分支，commit很多次，使用--depth=1来clone代码会很快。


git stash       对当前的暂存区和工作区状态进行保存
git stash list  列出所有保存的进度列表
git stash pop   恢复工作进度


部分提交：
修改了a.html, b.html,只想提交b.html:
git commit b.html message
git push origin branchName


撤回操作：
撤回所有修改：git checkout -- .
撤回某个文件的修改：
git status 先查看已经修改了哪些文件，然后复制要撤回的文件路径
git checkout -- 文件路径


当前分支和master分支对比src文件夹：
git diff master src


创建并切换分支： 
git checkout -b newBranch

提交之前查看修改：git status
提交之前查看具体修改：git diff

修改分支名：git branch -m newBranch