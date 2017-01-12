var Mock = require('mockjs');

var data = Mock.mock({
  "order":["head", "goods", "coupon", "foot"],
  "items":{
    "head": [  // 头图区
        {"image": "http://ujipinwww.ufile.ucloud.com.cn/share_squid1128_010.jpg", "url": "http://m.ujipin.com/v4/goods/29121"}
    ],
    "goods|2-4": [  // 商品区
        {
            "title": {
                "url": "http://ujipin.com",
                "text": '@name',
                "image": "http://ujipinwww.ufile.ucloud.com.cn/share_squid1128_010.jpg"
            },
            "icon|3-6": [
                {"image": "http://ujipinwww.ufile.ucloud.com.cn/share_squid1128_010.jpg", "url": "http://m.ujipin.com/v4/goods/29121"},  // 商品图片，商品链接
            ],
            "goods|3-5": [
                {
                    "brand": "今儿天儿不错",
                    "name": "竹炭陶经典日式加盖饭碗 密封收纳碗（300ml）",
                    "price|10-100": 100.00,
                    "market_price|10-100": 100.00,
                    "product_stock_total|0-10": 10,
                    "url": "http://m.ujipin.com/v4/goods/19696",
                    "image": "http://ujipin.ufile.ucloud.com.cn/2bee21fd486590c8723cdf378667d69d?UCloudPublicKey=ucloudjiawoyong@ujipin.cn14466281690001077321672&Expires=1480939366&Signature=/Obc/Ij1ktPc9wdjOM7DufVq+Js=&width=375&iopcmd=thumbnail&type=4&format=JPEG",
                }
            ],
            "top_from": 3
        }
    ],
    "coupon": [
        {"image": "http://ujipinwww.ufile.ucloud.com.cn/share_squid1128_010.jpg", "code": "kwjfdkw3"}
    ],
    "foot": [
        {"image": "http://ujipinwww.ufile.ucloud.com.cn/share_squid1128_010.jpg", "url": "http://m.ujipin.com/v4/goods/29121"}
    ]
  }
});
// module.exports = JSON.stringify(data, null, 4);
module.exports = data;
// 输出结果
//console.log(JSON.stringify(data, null, 4))
