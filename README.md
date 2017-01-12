# myNode
这是我学习node的一个小项目，本项目用的是node+express+pm2+mongodb的一个本地服务器。项目用pm2操作负载均衡，用supervisor来运行本地开发环境，并在本地下载mongodb数据库，利用node来实现数据库的增删改查。
express路由方面也做了一些优化处理。

npm start
项目研发状态运行

数据库：mongodb运行前开两个命令窗口
窗口1：mongod --dbpath 你的数据库地址
窗口2：mongo
