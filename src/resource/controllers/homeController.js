const express = require('express');
const router = express.Router();

// Route chính
router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;
