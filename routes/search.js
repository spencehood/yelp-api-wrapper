var express = require('express');
var qs = require('qs');
var router = express.Router();

//var yelp = require("yelp").createClient({
//    oauth: {
//        consumer_key: 'UWobTMG9B3mAW5FXp-PNaw',
//        consumer_secret: 'gi95WHKwfVe6IUodPU9c1Ks2_Vs',
//        token: '4W6L2n8dIF3gC2-VHYnnojDvZg42ulRv',
//        token_secret: 'I7uZw5CErSd0my2gS3s5-FohMcs'
//    }
//});

/* GET home page. */
router.get('/:query', function(req, res) {
    var yelp = req.app.locals.yelp;
    var query = qs.parse(req.params.query);
    query.limit = 1;
    yelp.search(query, function (error, data) {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log(data);
            res.send(data);
        }
    });
});

module.exports = router;
