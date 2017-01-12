// 数据库操作
var express = require('express');
var router = express.Router();
var db = require('../../module/db');
//插入数据，使用我们自己封装db模块，就是DAO。
router.get("/insert",function(req,res){
    //三个参数，往哪个集合中增加，增加什么，增加之后做什么
    db.insertOne("teacher",{"name":"小黑","sex":"男"},function(err,result){
        if(err){
            console.log("插入失败");
            return;
        }
        res.send("插入成功");
    });
});

//查找
router.get("/find",function(req,res){
    //这个页面现在接受一个page参数。
    var page = parseInt(req.query.page);  //express中读取get参数很简单
    //查找4个参数，在哪个集合查，查什么，分页设置，查完之后做什么
    db.find("teacher",{},{"pageamount":6,"page":page},function(err,result){
        if(err){
            console.log(err);
        }
        res.send(result);
        console.log(result.length);
    });
});

//删除
router.get("/delet",function(req,res){
    var borough = req.query.borough;
    db.deleteMany("teacher",{"borough":borough},function(err,result){
       if(err){
           console.log(err);
       }
        res.send(result);
    });
});

//修改
router.get("/change",function(req,res){
    db.updateMany(
        "teacher",      //集合名字
        {
            "name":"小黑"       //改什么
        },
        {
            $set: { name: "小七" }     //怎么改
        },
        function(err,result){   //改完之后做什么
            if(err){
                console.log(err);
            }
            res.send(result);
        }
    );
});

module.exports = router;
