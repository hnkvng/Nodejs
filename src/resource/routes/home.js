const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/homeController');

router.get('/:slug', Controllers.add);
router.get('/', Controllers.index);

module.exports = router;
