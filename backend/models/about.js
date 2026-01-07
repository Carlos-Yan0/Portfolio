const { text } = require('express');
const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
    },
    skills: {
        type: [String],
        required: true,
    },
});

module.exports = mongoose.model("About", aboutSchema);