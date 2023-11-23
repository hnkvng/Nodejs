const express = require('express');
const router = express.Router();

// Route cho user
router.get('/', (req, res) => {
    res.render('views');
});

module.exports = router;
