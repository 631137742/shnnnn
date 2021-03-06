SET NAMES UTF8;
DROP DATABASE IF EXISTS shnnnn;
CREATE DATABASE shnnnn CHARSET=UTF8;
USE shnnnn;

#创建用户登录表
#用户登录密码需要加密保存使用 MySQL自带函数md5()
CREATE TABLE shn_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd VARCHAR(32)
);
#理解:用户输入123对用户输入内容加密
#加密后与数据密码比较
#SELECT id FROM boy_login
#WHERE uname = ? AND upwd = md5(?)

/**** 创建用户登列表 ****/
INSERT INTO shn_login VALUES(null,'tom',md5('123'));
INSERT INTO shn_login VALUES(null,'wxt',md5('123456'));

-- 创建主页文章列表
CREATE TABLE shn_article(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  article text
)

INSERT INTO shn_article VALUES(null,'致自己','我们生来平凡，没有做商做官的父母，没有用之不尽的财富。像小草一样努力生长，像小鸟一样迎风飞翔。我们普普通通，没有显赫的背景，只有坚强的背影，没有庞大的财富，只有勤劳的双手。唯有踏实努力，才能有所收获，只有不断付出，才能抓住幸福。我们没有高贵的身份，却有高傲的自尊，我们没有天生的好命，只能靠自己拼命。不管路多难走，钱多难赚，我们都会勇往直前，凭自己的毅力，走到最后，靠自己的本领，养家糊口。尽管日子不好过，生活太艰难，可是我们依然微笑着面对，遇水搭桥，遇山劈山，生活给我压力，我努力还它奇迹，人生对我刁难，我一定接受挑战。谁叫我们已经成年，身上有不可推卸的责任，心中有无法诉说的疲惫。致自己：挺住！在困难面前，不低头，在压力来时，抬起头。为了身后的家人，为了以后的幸福，现在吃苦怕什么，就算再累能怎样。致自己：加油！这个世上你才是自己的救世主，别指望别人一直帮你，谁都有自己的难处。靠自己去闯，去拼，你才不会低声下气。活了这么多年，你该明白，笑你的人永远比帮你的人多，伤你的人永远比爱你的人多！致自己：保重！再忙，也要休息，身体健康才是第一。别为了工作，熬坏身体，别顾及他人，委屈自己。有些人配不上你的好，有些人不值得你付出。谁好谁坏，心里明白，该吃吃，该喝喝，该乐乐，别管他人怎么说。致自己：挺住！所有的苦只能自己受！致自己：加油！最难的路还得自己走！致自己：保重！自己对自己好好照顾');
INSERT INTO shn_article VALUES(null,'如何从细节分析一个人，我们还需要练习！','1、警惕身边那种所有人都觉得他好的人。2、远离那些在追求你时把你捧上天，讨好的背后往往都是有目的的。3、和比自己聪明太多的人接触，要做好吃亏的准备。4、对方心情如何，你看他今天听了什么歌。5、那些坚强到让你不敢相信的人，背后也有着你不敢想象的故事。6、对自己严格的人，也常常对别人很挑剔。7、喜欢一个人，嘴可以硬，但眼神骗不了人。8、常说：“别人越炫耀什么，他就越缺少什么”其实，越觉得别人在炫耀什么，你就越缺少什么。9、笑起来暖心的人，一般都比较友善和真诚。10、张嘴闭嘴我朋友的人，往往单纯又没本事的，而所谓朋友也只是单向朋友关系。11、说话动辄以“我”字开头的人，掌控欲望很强，也颇有点自我为中心的意思。12、频繁发朋友圈，经常甩链接求点赞，去到旅行要发几十条定位的年轻人。注意是年轻人，往往经济状况并不好。13、在你眼中过于完美的人，往往并没把你当自己人，因为朋友之间是忍不住爆短的。14、异性之间的喜欢，其实第一眼已经基本决定了。15、不要自作多情，没你想象的有那么多人关注你。16、什么样的人就会说出来什么样的话，什么样的人看这个世界就是什么样的。17、来带一个新环境里面，不要急着站队，先学会保持沉默，那样能发现更多。18、世人不会高估一个傻瓜，却极易低估一个天才。19、上司发火更多的时候不是他控制不住自己，而是一种策略。20、越在乎什么越得不到什么。21、当你决意以不得罪所有人为目标时，事实上你已经得罪了所有人。22、你之所以觉得可以看透一个人，那是因为他身上有你曾经的样子。23、对感情不要操之过急。慢慢来，久一点。火越大越灭的快。24、看破不说破的人，其实不是心机深沉，而是因为嫌麻烦。25、不发朋友圈的人，不一定是安静的；TA很有可能在自己的小圈子里面是个话痨。');