var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var jacket_controller = require('../controllers/jacket');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/jackets', jacket_controller.jacket_create_post);

// DELETE request to delete Costume.
router.delete('/jackets/:id', jacket_controller.jacket_delete);

// PUT request to update Costume.
router.put('/jackets/:id', jacket_controller.jacket_update_put);

// GET request for one Costume.
router.get('/jackets/:id', jacket_controller.jacket_detail);

// GET request for list of all Costume items.
router.get('/jackets', jacket_controller.jacket_list);

module.exports = router;