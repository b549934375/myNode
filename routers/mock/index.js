var express = require('express');
var router = express.Router();

var data = require('../../data');
/* GET users listing. */
router.get('/data',function(req,res){
  res.json({
    data:data
  });
});

module.exports = router;
