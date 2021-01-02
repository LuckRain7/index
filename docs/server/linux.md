## linux

> cent OS 7.7

## 命令行登录

```bash
ssh root@101.132.103.213
```

## 常用命令

```bash
# ls
ls -l # 列出长数据串，包含文件的属性与权限数据等
ls -a # 列出全部的文件，连同隐藏文件（开头为.的文件）一起列出来（常用）
ls -d # 仅列出目录本身，而不是列出目录的文件数据
ls -h # 将文件容量以较易读的方式（GB，kB等）列出来
ls -R # 连同子目录的内容一起列出（递归列出），等于该目录下的所有文件都会显示出来

# pwd 查看"当前工作目录"的完整路径。
pwd -P # 显示实际物理路径，而非使用连接（link）路径
pwd -L # 当目录为连接路径时，显示连接路径

# mkdir 用来创建指定的名称的目录
mkdir [选项] 目录

#rmdir 命令 从一个目录中删除一个或多个子目录项
rmdir [选项] 目录

# mv 命令 mv [选项] 源文件或目录 目标文件或目录
mv [选项] 源文件或目录 目标文件或目录
mv -b # 若需覆盖文件，则覆盖前先行备份
mv -f # force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖
mv -i # 若目标文件 (destination) 已经存在时，就会询问是否覆盖
mv -u # 若目标文件已经存在，且 source 比较新，才会更新(update)
mv -t #  --target-directory=DIRECTORY move all SOURCE arguments into DIRECTORY，即指定mv的目标目录，该选项适用于移动多个源文件到一个目录的情况，此时目标目录在前，源文件在后

# touch 命令 更改文档或目录的日期时间
touch [选项] 文件

# tar 命令 压缩和解压文件
tar -zxvf [文件] # 解压文件
tar -zcvf test.tar.gz [文件]  # 压缩文件

# ipconfig 命令 ifconfig 命令用来查看和配置网络设备。
ifconfig [网络设备] [参数]

# netstat 命令 显示与IP、TCP、UDP和ICMP协议相关的统计数据
netstat -a # 列出所有端口

## ss
ss -tln # 查看TCP的listen的端口
ss -tlnp # 查看哪些进程使用了监听端口

## 防火墙
systemctl status iptables | service iptables status # 查看防火墙状态
systemctl stop iptables | service iptables stop # 关闭防火墙

## 查看内存使用概况
free -h
```

## Docker

### 安装 docker

```bash
# 更新yum
yum update

# 卸载旧版本
yum remove docker  docker-common docker-selinux docker-engine

# 安装插件和必须软件包
yum install -y yum-utils device-mapper-persistent-data lvm2

# 设置yum源 阿里云镜像
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 查看docker版本
yum list docker-ce --showduplicates | sort -r

# 安装docker
yum install docker-ce # 安装未定版本
yum install [指定版本] # 安装指定版本

# 设置开机自启
sudo systemctl start docker
sudo systemctl enable docker

# 验证安装是否成功
docker version
```

### 安装软件

**Node**

登录 https://hub.docker.com/_/node?tab=tags 查找需要的版本

`docker pull node:10.12`

**Nginx**

`docker pull nginx:latest`


### 启动实例

