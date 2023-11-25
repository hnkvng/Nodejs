const express = require('express');
const router = express.Router();

// Điều khiển

class homeControllers {
    //GET /home
    index(rep, res) {
        res.render('home');
    }
    add(rep, res) {
        res.render('add');
    }
}

module.exports = new homeControllers();
