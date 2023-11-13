const jacket = require('../models/jacket');
var Jacket = require('../models/jacket');

// List of all Jackets
exports.jacket_list = async function (req, res) {
    try {
        theJackets = await Jacket.find();
        res.send(theJackets);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Costume.
exports.jacket_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Jacket.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Costume create on POST.
exports.jacket_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Jacket();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.size = req.body.size;
    document.colour = req.body.colour;
    document.price = req.body.price;
    try {
        let results = await document.save();
        res.send(results);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume delete on DELETE.
exports.jacket_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Jacket.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle Costume update form on PUT.
exports.jacket_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Jacket.findById(req.params.id)
        // Do updates of properties
        if (req.body.size)
            toUpdate.size = req.body.size;
        if (req.body.colour) toUpdate.colour = req.body.colour;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
   failed`);
    }
};

// VIEWS
// Handle a show all view
exports.jacket_view_all_Page = async function (req, res) {
    try {
        theJackets = await Jacket.find();
        res.render('jacket', { title: 'Jacket Search Results', results: theJackets });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.jacket_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Jacket.findById(req.query.id)
        res.render('jacketdetail',
            { title: 'Jacket Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.jacket_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('jacketcreate', { title: 'Jacket Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.jacket_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Jacket.findById(req.query.id)
        res.render('jacketupdate', { title: 'Jacket Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};