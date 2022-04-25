(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{495:function(s,e,a){"use strict";a.r(e);var t=a(29),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"常用软件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用软件安装"}},[s._v("#")]),s._v(" 常用软件安装")]),s._v(" "),a("h1",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" mysql")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("下载mysql")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mysql\n")])])])]),s._v(" "),a("li",[a("p",[s._v("启动容器")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v(":3306 --privileged"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /docker/mysql7/log:/var/log/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /docker/mysql7/data:/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /docker/mysql7/conf:/etc/mysql/conf.d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /etc/localtime:/etc/localtime "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name mysql7 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nmysql\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"mysql主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql主从复制"}},[s._v("#")]),s._v(" mysql主从复制")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建mysql-master容器")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("配置文件 "),a("code",[s._v("my.cnf")])]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[mysqld]\npid-file        = /var/run/mysqld/mysqld.pid\nsocket          = /var/run/mysqld/mysqld.sock\ndatadir         = /var/lib/mysql\nsecure-file-priv= NULL\n\nserver_id=101\nbinlog-ignore-db=mysql\nlog-bin=mall-mysql-bin\nbinlog_cache_size=1M\nbinlog_format=mixed\nexpire_logs_days=7\nslave_skip_errors=1062\n\n# Custom config should go here\n!includedir /etc/mysql/conf.d/\n")])])])]),s._v(" "),a("li",[a("p",[s._v("在执行启动脚本之前，将my.cnf文件放置到"),a("code",[s._v("/docker/mysql-master/conf")]),s._v("文件夹下，并在"),a("code",[s._v("/docker/mysql-master/conf")]),s._v("下创建"),a("code",[s._v("conf.d")]),s._v("文件夹")])]),s._v(" "),a("li",[a("p",[s._v("启动脚本")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v(":3306 --privileged"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v /docker/mysql-master/log:/var/log/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v /docker/mysql-master/data:/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v /docker/mysql-master/conf:/etc/mysql/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v /etc/localtime:/etc/localtime "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --name mysql-master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  mysql\n")])])])]),s._v(" "),a("li",[a("p",[s._v("进入mysql-master")])]),s._v(" "),a("li",[a("p",[s._v("创建同步用户")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("create user 'slave'@'%'identified by '123456';\ngrant replication slave,replication client on *.* to 'slave'@'%';\nflush privileges;\n")])])])]),s._v(" "),a("li",[a("p",[s._v("查看同步状态")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("show master status;\n")])])]),a("p",[s._v("记录下file和position")]),s._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://ciallo-1257179806.cos.ap-shanghai.myqcloud.com/image-20220418201941783.png",alt:"image-20220418201941783"}})])])]),s._v(" "),a("li",[a("p",[s._v("创建mysql-slave容器")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("配置文件")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[mysqld]\npid-file        = /var/run/mysqld/mysqld.pid\nsocket          = /var/run/mysqld/mysqld.sock\ndatadir         = /var/lib/mysql\nsecure-file-priv= NULL\n\nserver_id=102\nbinlog-ignore-db=mysql\nlog-bin=mall-mysql-slave1-bin\nbinlog_cache_size=1M\nbinlog_format=mixed\nexpire_logs_days=7\nslave_skip_errors=1062\nrelay_log=mall-mysql-relay-bin\nlog_slave_updates=1\n#只对没有super权限存在限制，使用时需要从库创建并使用普通用户。GRANT USAGE ON *.* TO 'user01'@'localhost' IDENTIFIED BY'123456'WITH GRANT OPTION;\nread_only=1 \n\n# Custom config should go here\n!includedir /etc/mysql/conf.d/\n")])])])]),s._v(" "),a("li",[a("p",[s._v("将"),a("code",[s._v("my.cnf")]),s._v("文件放置在"),a("code",[s._v("/docker/mysql-slave/conf")]),s._v("路径下，并创建"),a("code",[s._v("conf.d")]),s._v("文件夹")])]),s._v(" "),a("li",[a("p",[s._v("启动脚本")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -d -p 3308:3306 --privileged=true \\\n-e MYSQL_ROOT_PASSWORD=123456 \\\n-v /docker/mysql-slave/log:/var/log/mysql \\\n-v /docker/mysql-slave/data:/var/lib/mysql \\\n-v /docker/mysql-slave/conf:/etc/mysql \\\n-v /etc/localtime:/etc/localtime \\\n--name mysql-slave \\\n--restart=always \\\nmysql\n")])])])]),s._v(" "),a("li",[a("p",[s._v("从服务器配置主从复制")]),s._v(" "),a("ol",[a("li",[s._v("这个命令在mysql8上会导致从服务器无法连接到主服务器，因为8.0更新了账户登录验证插件")])]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("change master to master_host='192.168.142.132',\nmaster_user='slave',\nmaster_password='123456',\nmaster_port=3307,\nmaster_log_file='mall-mysql-bin.000010',\nmaster_log_pos=711,\nmaster_connect_retry=30;\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("8.0可使用的命令")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("CHANGE REPLICATION SOURCE TO \nGET_SOURCE_PUBLIC_KEY=1, \nsource_host='192.168.142.132',\nsource_user='slave',\nsource_password='123456',\nsource_port=3307,\nsource_log_file='mall-mysql-bin.000010',\nsource_log_pos=711,\nsource_connect_retry=30;\n")])])])])])]),s._v(" "),a("li",[a("p",[s._v("启动主从复制")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("start slave;\n")])])])]),s._v(" "),a("li",[a("p",[s._v("查看从机主从复制状态")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("show slave status \\G;\n")])])]),a("h2",{attrs:{id:"从库删除数据重新同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从库删除数据重新同步"}},[s._v("#")]),s._v(" 从库删除数据重新同步")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("停止slave,清除主从信息")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("stop slave;\nreset slave all;\n")])])])]),s._v(" "),a("li",[a("p",[s._v("删除从库同步的主数据库数据")])]),s._v(" "),a("li",[a("p",[s._v("备份主数据库数据")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("reset master;\nmysqldump -u root -p test --set-gtid-purged=OFF --single-transaction > dbname.sql\n\n")])])])]),s._v(" "),a("li",[a("p",[s._v("从库导入数据")])]),s._v(" "),a("li",[a("p",[s._v("从库配置主从复制")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("CHANGE REPLICATION SOURCE TO \nGET_SOURCE_PUBLIC_KEY=1, \nsource_host='192.168.142.132',\nsource_user='slave',\nsource_password='123456',\nsource_port=3307,\nsource_log_file='mall-mysql-bin.000001',\nsource_log_pos=156,\nsource_connect_retry=30;\n")])])])]),s._v(" "),a("li",[a("p",[s._v("启动slave")])]),s._v(" "),a("li",[a("p",[s._v("查看slave状态")])])])])])])]),s._v(" "),a("h2",{attrs:{id:"tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[s._v("#")]),s._v(" Tomcat")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull tomcat\ndocler run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 --name MyTomcat tomcat\n")])])]),a("h2",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 --name myRedis "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /docker/redis/redis.conf:/etc/redis/redis.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /docker/redis/data:/data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nredis:6.2.6 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nredis-server /etc/redis/redis.conf\n")])])]),a("h3",{attrs:{id:"redis集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis集群"}},[s._v("#")]),s._v(" Redis集群")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name redis-node-1 --net "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" -v /docker/redis/redis-node-1:/data redis:6.2.6 --cluster-enabled "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6381")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name redis-node-2 --net "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" -v /docker/redis/redis-node-2:/data redis:6.2.6 --cluster-enabled "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6382")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name redis-node-3 --net "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" -v /docker/redis/redis-node-3:/data redis:6.2.6 --cluster-enabled "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6383")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name redis-node-4 --net "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" -v /docker/redis/redis-node-4:/data redis:6.2.6 --cluster-enabled "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6384")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name redis-node-5 --net "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" -v /docker/redis/redis-node-5:/data redis:6.2.6 --cluster-enabled "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6385")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name redis-node-6 --net "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" -v /docker/redis/redis-node-6:/data redis:6.2.6 --cluster-enabled "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6386")]),s._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("redis-cli --cluster create "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6381 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6382 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6383 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6384 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6385 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6386 --cluster-replicas "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("h3",{attrs:{id:"扩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩容"}},[s._v("#")]),s._v(" 扩容")]),s._v(" "),a("p",[s._v("添加master节点")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name redis-node-7 --net "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" -v /docker/redis/redis-node-7:/data redis:6.2.6 --cluster-enabled "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6387")]),s._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#redis-cli --cluster add-node 新节点ip:端口 集群ip:端口")]),s._v("\nredis-cli --cluster add-node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6387 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6381\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("redis-cli --cluster reshard "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6381\n")])])]),a("p",[s._v("添加slave节点")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name redis-node-8 --net "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" -v /docker/redis/redis-node-8:/data redis:6.2.6 --cluster-enabled "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" --port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6388")]),s._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli --cluster add-node 新slave的ip:prot 新master的ip:port --cluster-slave --cluster-master-id 新主机节点id")]),s._v("\nredis-cli --cluster add-node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6388 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6387 --cluster-slave --cluster-master-id fb51d858020dd29dd39aecac3593b9317d7cd091\n")])])]),a("h3",{attrs:{id:"缩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩容"}},[s._v("#")]),s._v(" 缩容")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("删除slave节点")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#redis-cli --cluster del-node ip:port slave的id")]),s._v("\nredis-cli --cluster del-node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6388 f48983ca68b878f9282b16270a390f0f11e05c37\n")])])])]),s._v(" "),a("li",[a("p",[s._v("重新分配槽")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("redis-cli --cluster reshard "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6381\n")])])]),a("p",[a("img",{attrs:{src:"https://ciallo-1257179806.cos.ap-shanghai.myqcloud.com/image-20220419145842624.png",alt:"image-20220419145842624"}})])]),s._v(" "),a("li",[a("p",[s._v("删除master节点")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("redis-cli --cluster del-node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".142.132:6387 fb51d858020dd29dd39aecac3593b9317d7cd091 \n")])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);