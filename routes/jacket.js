var express = require('express');
const jacket_controllers = require('../controllers/jacket');
var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('jacket', { title: 'Search Results Jacket' });
// });

/* GET Jackets. */
router.get('/', jacket_controllers.jacket_view_all_Page);

module.exports = router;
