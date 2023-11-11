var express = require('express');
const jacket_controllers = require('../controllers/jacket');
var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('jacket', { title: 'Search Results Jacket' });
// });

/* GET Jackets. */
router.get('/', jacket_controllers.jacket_view_all_Page);

// GET request for one costume.
router.get('/jackets/:id', jacket_controllers.jacket_detail);

/* GET detail costume page */
router.get('/detail', jacket_controllers.jacket_view_one_page);

module.exports = router;
