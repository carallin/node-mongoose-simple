## mongoDB
### 1. 安装
* 下载windows X64 版本（针对个人情况），安装；
* mongoDB 默认将 `C:\data\db` 作为数据存贮目录；
* 将mongoDB 安装目录的 `bin` 加入环境变量；

### 2. 启动
* 通过命令`mongod`启动数据库服务；
* 再通过命令`mongo`启动数据库；

### 3. 概念说明
* mongoDB可以有多个数据库；
* 每个数据库中可以有多个`collection`,对应于sql中的表；

### 4. 使用
> `mongo`命令会打开数据库的后台管理shell系统，以下命令用于该系统；

* `show dbs`显示所有数据库；
* `use db1`选择将进行操作的数据库`db1`；
* `db`显示目前进行操作的数据库；
* `show collections`显示目前数据库中所有的集合；
* `db.collectionName.find()`显示目前集合中的所有数据；

### 4. 数据的导入导出
> 系统层面的数据导入导出，直接在powershell中执行命令

* 导入JSON数据：
>`mongoimport -d dbName -c collectionName c:\data.dat`
* 导入CSV数据：
>`mongoimport -d dbName -c collectionName -type=csv -headerline -file c:\data.csv`

* 导出JSON数据：
>`mongoexport -d dbName -c collectionName -o c:\data.dat`
* 导入CSV数据：
>`mongoimport -d dbName -c collectionName -type=csv -f id,name,age,columnNames -o c:\data.csv`
