(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{367:function(a,s,t){"use strict";t.r(s);var e=t(6),v=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"字符函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符函数"}},[a._v("#")]),a._v(" 字符函数")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("字符串处理\nSELECT name,CONCAT(UPPER(SUBSTR(name,1,1)),LOWER(SUBSTR(name,2))) FROM student")])]),a._v(" "),s("li",[s("p",[a._v("去掉空格\nSELECT TRIM(' ASDF')\nSELECT LTRIM(' ZASDF ')\nSELECT RTRIM(' SADF ')\nSELECT TRIM('@' FROM '@@ZPPX@@')")])]),a._v(" "),s("li",[s("p",[a._v("补齐多少位\nSELECT LPAD('ZASDF',10,'@')\nSELECT LPAD('1',8,'0')\nSELECT RPAD('1',8,'0')")])]),a._v(" "),s("li",[s("p",[a._v("替换字符串\nSELECT REPLACE('zf','f','F')")])]),a._v(" "),s("li",[s("p",[a._v("FORMAT 格式化\nSELECT FORMAT(10000,2)\nSELECT FORMAT(888.456.3)")])]),a._v(" "),s("li",[s("p",[a._v("取左右多少位\nSELECT LEFT('asdfasdf',5)\nSELECT RIGHT('ASDFAS',4)")])])]),a._v(" "),s("h3",{attrs:{id:"数学函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数学函数"}},[a._v("#")]),a._v(" 数学函数")]),a._v(" "),s("ul",[s("li",[a._v("取整\nSELECT CEIL(10.99)\nSELECT FLOOR(10.1234)")]),a._v(" "),s("li",[a._v("取模\nSELECT MOD(10.4)")]),a._v(" "),s("li",[a._v("约等于\nSELECT ROUND(10.3)")]),a._v(" "),s("li",[a._v("保留小数\nSELECT TRUNCATE(10.88,1)")])]),a._v(" "),s("h3",{attrs:{id:"日期函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日期函数"}},[a._v("#")]),a._v(" 日期函数")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("当前时间\nSELECT NOW()")])]),a._v(" "),s("li",[s("p",[a._v("日期\nSELECT CURDATE()\nSELECT CURTIME()")])]),a._v(" "),s("li",[s("p",[a._v("年\nSELECT YEAR(NOW())\nSELECT MONTH(NOW())\nSELECT DAY(NOW())\nSELECT HOUR(NOW())\nSELECT MINUTE(NOW())\nSELECT SECOND(NOW())")])])]),a._v(" "),s("h3",{attrs:{id:"把字符串转成日期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#把字符串转成日期"}},[a._v("#")]),a._v(" 把字符串转成日期")]),a._v(" "),s("p",[a._v("SELECT STR_TO_DATE('2018-09-09','%Y-%m-%d')\nSELECT DATE_FORMAT(NOW(),'%Y 年%m 月%d 日')")]),a._v(" "),s("ul",[s("li",[a._v("加日月年\nSELECT DATE_ADD(NOW(),INTERVAL 1 DAY)\nSELECT DATE_ADD(NOW(),INTERVAL 1 MONTH)\nSELECT DATE_ADD(NOW(),INTERVAL 1 YEAR)")]),a._v(" "),s("li",[a._v("和现在相差多少天\nSELECT DATEDIFF('2018-09-08',NOW())")])]),a._v(" "),s("h3",{attrs:{id:"其他函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他函数"}},[a._v("#")]),a._v(" 其他函数")]),a._v(" "),s("ul",[s("li",[a._v("取得连接 id\nSELECT CONNECTION_ID()")]),a._v(" "),s("li",[a._v("查看当前数据库\nSELECT DATABASE()")]),a._v(" "),s("li",[a._v("查询当前数据库版本\nSELECT VERSION()")])]),a._v(" "),s("ul",[s("li",[a._v("查询当前用户\nSELECT USER()")]),a._v(" "),s("li",[a._v("md5 加密\nSELECT MD5('123')")])]),a._v(" "),s("p",[a._v("SELECT * FROM mysql.user\nSELECT PASSWORD('zfpx')")]),a._v(" "),s("h3",{attrs:{id:"流程控制函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程控制函数"}},[a._v("#")]),a._v(" 流程控制函数")]),a._v(" "),s("ul",[s("li",[a._v("类似三元表达式\nSELECT IF(1>0,'A','B')")])]),a._v(" "),s("h3",{attrs:{id:"case-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-函数"}},[a._v("#")]),a._v(" case 函数")]),a._v(" "),s("p",[a._v("SELECT * FROM score\nSELECT\nCASE\nWHEN grade >= 60 then '及格'\nWHEN grade < 60 then '不及格'\nELSE '未知'\nEND\nFROM score;")]),a._v(" "),s("p",[a._v("SELECT level\nCASE 'A' then '优秀'\nCASE 'B' then '较好'\nELSE '差'\nEND\nFROM score;")]),a._v(" "),s("h3",{attrs:{id:"小写变大写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小写变大写"}},[a._v("#")]),a._v(" 小写变大写")]),a._v(" "),s("p",[a._v("SELECT * FROM student;\nUPDATE student SET email = UPPER(email) WHERE id = 1;")]),a._v(" "),s("h3",{attrs:{id:"升序降序排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升序降序排序"}},[a._v("#")]),a._v(" 升序降序排序")]),a._v(" "),s("h3",{attrs:{id:"查询年龄超过-18-岁的男同学"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询年龄超过-18-岁的男同学"}},[a._v("#")]),a._v(" 查询年龄超过 18 岁的男同学")]),a._v(" "),s("p",[a._v("SELECT * FROM student WHERE gender _ '男' AND YEAR(NOW()) - YEAR(birthday)>18")]),a._v(" "),s("h3",{attrs:{id:"查询生日月份是-9-月份的山东省的同学"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询生日月份是-9-月份的山东省的同学"}},[a._v("#")]),a._v(" 查询生日月份是 9 月份的山东省的同学")]),a._v(" "),s("p",[a._v('SELECT * FROM student WHERE MONTH(birthday) =9 AND province ="山东省"')]),a._v(" "),s("h3",{attrs:{id:"查询今天过生日的同学"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询今天过生日的同学"}},[a._v("#")]),a._v(" 查询今天过生日的同学")]),a._v(" "),s("p",[a._v("SELECT * FROM student WHERE DAY(birthday) = DAY(NOW()) AND MONTH(birthday)=MONTH(NOW())")]),a._v(" "),s("h3",{attrs:{id:"查询-id-为-3-的同学的域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询-id-为-3-的同学的域名"}},[a._v("#")]),a._v(" 查询 id 为 3 的同学的域名")]),a._v(" "),s("p",[a._v("SELECT name, SUBSTR(email,INSTR(email,'@')+1) FORM student WHERE id=3")]),a._v(" "),s("h3",{attrs:{id:"自定义函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义函数"}},[a._v("#")]),a._v(" 自定义函数")]),a._v(" "),s("ul",[s("li",[a._v("自定义函数是对 mysql 的扩展，使用方式和内置函数相同")]),a._v(" "),s("li",[a._v("语法\n"),s("ul",[s("li",[a._v("CREATE FUNCTION ZNOW() RETURNS VARCHAR(20)\nRETUNR DATE_FORMAT(NOW(),'%年-%月-%日 %时-%分-%秒')；\nSELECT ZNOW();\n"),s("ul",[s("li",[a._v("CRATE FUNCTION ZADD(num1 INT,num2 INT) RETURNS INT\nRETURN num1+num2\nSELECT ZADD(2,3)")]),a._v(" "),s("li",[a._v("CREATE TABLE stu2(id int PRIMARY KEY AUTO_INCREMENT,name VARCHAR(50))\nSELECT * FROM stu2;")]),a._v(" "),s("li",[a._v("CREATE FUNCTION addUser(name VARCHAR(50)) RETURNS INT\nBEGIN\nINSERT INTO stu2 (name) VALUES(name);\nRETURN LAST_INSERT_ID();\nEND\nSELECT addUser('zasdf')")])])])])]),a._v(" "),s("li",[a._v("模糊查询\n"),s("ul",[s("li",[a._v("SELECT * FROM stu2 WHERE name LIKE '%'")]),a._v(" "),s("li",[a._v("SELECT * FROM score WHERE grade BETWEEN 60 AND 100;")]),a._v(" "),s("li",[a._v("SLEECT * FORM score WHERE grade >=60 AND grade <=100")])])]),a._v(" "),s("li",[a._v("查询某一列中的值在列出的内容列表中\n"),s("ul",[s("li",[a._v("SELECT * FROM student WHERE city in ('北京','上海')")]),a._v(" "),s("li",[a._v("SELECT * FROM student WHERE city = ()")])])])]),a._v(" "),s("h3",{attrs:{id:"聚合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚合"}},[a._v("#")]),a._v(" 聚合")]),a._v(" "),s("ul",[s("li",[a._v("对一组值进行计算，并返回计算后的值，一般用来统计数据")]),a._v(" "),s("li",[a._v("SELECT SUM(grade) FROM score WHERE student_id =1;")])]),a._v(" "),s("p",[a._v("SELECT * FROM score WHERE student_id=1\nSELECT COUNT(grande) FROM score WHERE student_id=1")]),a._v(" "),s("p",[a._v("-- 如果分组的话 SELECT 后面只能跟分组的聚合函数\nSELECT student_id,SUM(grade) FROM score\nGROUP BY student_id")]),a._v(" "),s("ul",[s("li",[a._v("SELECT 列名")]),a._v(" "),s("li")]),a._v(" "),s("h3",{attrs:{id:"为何设计数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为何设计数据库"}},[a._v("#")]),a._v(" 为何设计数据库")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("糟糕的数据库设计")]),a._v(" "),s("ul",[s("li",[a._v("数据冗余，存储空间浪费")]),a._v(" "),s("li",[a._v("内存空间浪费")]),a._v(" "),s("li",[a._v("数据和更新插入异常")])])]),a._v(" "),s("li",[s("p",[a._v("2.软件项目开发周期中的数据库设计")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("需求分析阶段；分析客户的业务和数据处理需求")])]),a._v(" "),s("li",[s("p",[a._v("概要设计阶段；设计数据库的 E-R 模型图，确认炫耀的正确和完整性")])]),a._v(" "),s("li",[s("p",[a._v("详细设计阶段")])]),a._v(" "),s("li",[s("p",[a._v("代码编写阶段")])]),a._v(" "),s("li",[s("p",[a._v("软件测试阶段")])]),a._v(" "),s("li",[s("p",[a._v("安装部署")])]),a._v(" "),s("li",[s("p",[a._v("现实世界--\x3e")])])])]),a._v(" "),s("li",[s("p",[a._v("3.设计数据库的步骤")])])]),a._v(" "),s("h3",{attrs:{id:"数据库设计的三大范式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计的三大范式"}},[a._v("#")]),a._v(" 数据库设计的三大范式")]),a._v(" "),s("ul",[s("li",[a._v("1.确保每列的原子性")]),a._v(" "),s("li",[a._v("2.每个表只描述一件事情")]),a._v(" "),s("li",[a._v("3.其他列都不传递")]),a._v(" "),s("li",[a._v("RBAC\n"),s("ul",[s("li",[a._v("基于角色的权限控制")]),a._v(" "),s("li",[a._v("RBAC ，就是用户通过角色与权限进行关联")]),a._v(" "),s("li",[a._v("简单的说，一个用户拥有若干个角色，每一个角色拥有若干权限，这样，就构成用户-角色-权限-资源的授权模型")]),a._v(" "),s("li",[a._v("在这种模型总，用户与角色之间，角色与权限之间，权限与资源之间一般是多对多的关系")]),a._v(" "),s("li",[a._v("在 RBAC 中最重要的概念：用户，角色，权限，资源")])])]),a._v(" "),s("li",[a._v("安全原则\n"),s("ul",[s("li",[a._v("最小权限原则之所以被 RBAC 所支持，是因为 RBAC 可以将")])])])]),a._v(" "),s("h3",{attrs:{id:"mysql-基本命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-基本命令"}},[a._v("#")]),a._v(" mysql 基本命令")]),a._v(" "),s("ul",[s("li",[a._v("mysql 启动")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("net start MySQL\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("mysql 停止")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("net stop MySQL\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("连接 MySQL")])]),a._v(" "),s("div",{staticClass:"language-' line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql -h 127.0.0.1 -P 3306 -uroot -p123456\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("断开连接")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("exit\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("切换数据库")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("use test;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("显示有哪些表")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("show tables\nshow tables from mysql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ul",[s("li",[a._v("显示当前数据库")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("select database();\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("查询表结构")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("DESC user;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("创建表")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE TABLE 'student'\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=v.exports}}]);