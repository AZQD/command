... 
  
    dir 显示目录和文件
    cd  进入目录
    cd .. 返回上一层
    del 删除文件
    rd  删除空目录（目录中不能有子目录和文件）
    rd/s 删除目录并同时删除目录中的子目录以及文件
    rm-rf dir //强制删除某个文件
    rd: remove directory
    s: subdirectory
    mkdir test 创建test目录
    rmdir test 删除test目录
    pwd //当前文件路径
    ls //当前文件的所有文件
    mkdir //创建新文件夹
    open ~/.ssh
    Mac:
    nvm安装成功后，但命令不可用
    https://www.cnblogs.com/respect2017/p/7227191.html
    如出现：-bash: nvm: command not found
    source .bash_profile
    source命令用法：source FileName
    作用：在当前bash环境下读取并执行FileName中的命令。
    clear               清屏
    df                   察看分区情况
    top                 系统监视器，按q键可退出
    uptime           察看系统总体运行情况
    cd ..                退回到上层目录
    cd /                退回到根目录
    dmesg  或者 dmesg | more         看引导启动信息（很有用）





### Vim

    Vim是从 vi 发展出来的一个文本编辑器。
    mac中如何从vim文本编辑器退回到命令
    有的时候，我们经常从命令行中进入vim文本编辑器:
    
    1.vim进入编辑模式
    常用方式：只需按a键即可，表示在当前字符后插入；
    
    也可以使用：
    
    i：在当前字符前插入。
    
    I：在光标所在行的行首插入。
    
    a：在当前字符后插入。
    
    A：在光标所在行的行尾插入。
    
    o：在当前行的下一行插入新的一行。
    
    O：在当前行的上一行插入新的 一行。
    
    
    2.vim退出编辑模式
    
    点击 Esc 键，Vim 进入命令模式。然后输入：
    
    :q  ——退出（这是 :quit 的缩写）
    :q! ——不保存退出（这是  :quit! 的缩写）
    :wq ——写入文件并退出；（这是 :writequit 的缩写）
    
    
    
    
    Mac:
    
    显示桌面： command+F3 或者  Fn+F11
    
    搜索：command+空格
    
    mac os  终端 退出相关的几个命令
    ctrl-z 挂起正在运行的进程
    ctrl-d 发送EOF
    ctrl-c 结束进程
    
    end up:command+上下左右
    截屏：ctrl+command+A
    
    输入法切换：ctrl+空格
    
    Mac剪切：
    cmd+c复制，然后option+cmd+V剪切；
    cmd+R刷新；
    
    Mac关闭应用：
    Command + Q



### Photoshop

    ps放大缩小快捷键之——以图像中心绽放；
    按下键盘上的CRTL+加号键图片以中心放大；



### CMD:

    Windows命令行cmd 内容显示不全解决方案：
    
    单击命令行窗口左上角图标->属性->布局，然后适当增大屏幕缓冲区高度大小即可。
    
    
    touch命令: 作用:创建空文件,或者改变文件的时间戳属性：
    一般常用它的创建空文件功能，比如：
    touch data.json
    touch test.txt
    
    Mac前往某个文件夹：shift+command+g
    如打开hosts文件：输入/etc/hosts
    
    Windows电脑修改host位置：C:\Windows\System32\drivers\etc\hosts
    Mac终端修改host位置：sudo vim /etc/hosts
    
    / 根目录；如 cd / 即回到根目录；
    ~ liuchaojie；如：cd ~ 即回到初始目录；
    
    Mac返回上一层文件夹：Command+上
    Mac进入下一层文件夹：Command+下
    
    Mac快速关闭多个finder窗口：Option-command-w
    
    control + L ：清除命令行窗口内容，类似执行 clear 命令；
    
    检查元素：command + option + i；
    
    Mac下chrome快捷键：https://blog.csdn.net/fjh658/article/details/8860967
    
    查询使用某端口的进程：
    sudo lsof -i :8080 // 比如查看8080端口的进程，执行后可以看到参数中有PID，如PID=2739
    sudo kill -9 2739  // 关闭进程
    
    Linux sudo命令：
    Linux sudo命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。
    
    :set number  可查看vim中的行号
    :7,19d       删除第7-19行
    
    
    查看文件夹大小命令：
    1. du -sh 查看当前文件夹大小
    2. du -sh * | sort -n 统计当前文件夹文件，并按从小到大顺序排序

...

