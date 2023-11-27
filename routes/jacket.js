var express = require('express');
const jacket_controllers = require('../controllers/jacket');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

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
router.get('/create', secured, jacket_controllers.jacket_create_Page);

/* GET create update page */
router.get('/update', secured, jacket_controllers.jacket_update_Page);

/* GET delete costume page */
router.get('/delete', secured, jacket_controllers.jacket_delete_Page);

module.exports = router;
