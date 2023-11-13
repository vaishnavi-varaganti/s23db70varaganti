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
router.get('/detail', jacket_controllers.jacket_view_one_Page);

/* GET create costume page */
router.get('/create', jacket_controllers.jacket_create_Page);

/* GET create update page */
router.get('/update', jacket_controllers.jacket_update_Page);

/* GET delete costume page */
router.get('/delete', jacket_controllers.jacket_delete_Page);

module.exports = router;
