const express = require("express");
const superheroeSchema = require("../models/superheroe");

const router = express.Router();

// create superheroes
router.post("/superheroes", (req, res) => {
    const superheroe = superheroeSchema(req.body);
    superheroe
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all superheroes
router.get("/superheroes", (req, res) => {
    superheroeSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get a superheroes
router.get("/superheroes/:id", (req, res) => {
    const { id } = req.params;
    superheroeSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// delete a superheroes
router.delete("/superheroes/:id", (req, res) => {
    const { id } = req.params;
    superheroeSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update a superheroes
router.put("/superheroes/:id", (req, res) => {
    const { id } = req.params;
    const { name, bio, year, home } = req.body;
    superheroeSchema
        .updateOne({ _id: id }, { $set: { name, bio, year, home } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;