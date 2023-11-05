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
exports.jacket_create_post = function (req, res) {
    let newJacket = new Jacket();
    newJacket.size = req.body.size;
    newJacket.colour = req.body.colour;
    newJacket.price = req.body.price;
    try {
        let result = newJacket.save();
        console.log("Sucessfully created new Jacket " + result)
        res.send(result);
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