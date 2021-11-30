const mongoose = require("mongoose");

const superheroeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true

    },
    home: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Superheroe', superheroeSchema);