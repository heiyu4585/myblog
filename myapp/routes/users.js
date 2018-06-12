var express = require('express');
var router = express.Router();

var Weixin = require('weixin-apis');

/* GET users listing. */
router.get('/', function(req, res, next) {
    weixin.on('textMsg', function(data) {
        var msg = {
            toUserName : data.fromUserName,
            fromUserName : data.toUserName,
            msgType : 'text',
            content : data.content
        };
        res.send(msg);
    });
});

module.exports = router;
