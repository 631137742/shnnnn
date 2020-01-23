const express = require("express");
const pool = require("./pool");

var app = express();
app.listen(3000);
app.use(express.static("public"));

const cors = require("cors");
app.use(cors({
    origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
    credentials: true
}));

const session = require("express-session")
app.use(session({
    secret: "128位随机字符串",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 8
    }
}));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//功能一:home 组件轮播图片  
app.get("/imageList", (req, res) => {
    //1:将轮播图中所需图片 复制public/img
    //2:查询
    var list = [
        { id: 1, img_url: "http://127.0.0.1:3000/img/kefuf.gif" }
    ];
    res.send(list);
});

//功能八:用户登录
app.get("/login", (req, res) => {
    //参数
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    //sql
    var sql = " SELECT id FROM boy_login";
    sql += " WHERE uname = ? AND upwd = md5(?)";
    pool.query(sql, [uname, upwd], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "用户名或密码有误" });
        } else {
            //将用户登录凭证保存在服务器端 session对象中
            var id = result[0].id; //获取当前用户id
            req.session.uid = id; //保存session
            console.log(req.session.uid);
            res.send({ code: 1, msg: "登录成功" });
        }
    });
})