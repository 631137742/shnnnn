SET NAMES UTF8;
DROP DATABASE IF EXISTS shnnnn;
CREATE DATABASE shnnnn CHARSET=UTF8;
USE shnnnn;

#创建用户登录表
#用户登录密码需要加密保存使用 MySQL自带函数md5()
CREATE TABLE boy_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd VARCHAR(32)
);
#理解:用户输入123对用户输入内容加密
#加密后与数据密码比较
#SELECT id FROM boy_login
#WHERE uname = ? AND upwd = md5(?)

/**** 创建用户登录表 ****/
INSERT INTO boy_login VALUES(null,'tom',md5('123'));