const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getClasses, createClass } = require('../controllers/classController');

const router = express.Router();

router.get('/classes', authMiddleware, getClasses);
router.post('/classes', authMiddleware, createClass);

module.exports = router;
