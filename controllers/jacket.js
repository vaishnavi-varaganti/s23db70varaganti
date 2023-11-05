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
// for a specific Jacket.
exports.jacket_detail = function (req, res) {
    try {
        detail = Jacket.findById(req.params.id)
        console.log("Fetched the Jacket details " + detail)
        res.send(detail)
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
// Handle Costume delete form on DELETE.
exports.jacket_delete = function (req, res) {
    try {
        result = Jacket.findByIdAndDelete(req.params.id)
        console.log("Removed the following Jacket" + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Costume update form on PUT.
exports.jacket_update_put = function (req, res) {
    try {
        let jacketUpdate = jar.findById(req.params.id)
        if (req.body.size)
            jacketUpdate.size = req.body.size;
        if (req.body.colour)
            jacketUpdate.colour = req.body.colour;
        if (req.body.price)
            jacketUpdate.price = req.body.price;
        let result = jacketUpdate.save();
        console.log("Sucessfully Updated the Jacket " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
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