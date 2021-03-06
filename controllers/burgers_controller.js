const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

// Create all our routes and set up logic within those routes where quired.
router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// router.put("/api/burgers/:id", (req, res) => {
//     var condition = "id = " + req.params.id;
//
//     console.log("condition", condition);
//
//     burger.update({
//         devoured: req.body.devoured
//     }, condition, (result) => {
//         result.changedRows == 0 ? return res.status(404).end() : res.status(200).end();
//     })
// })