const express = require('express');
const router = express.Router();

const usersController = require('../controller/users.controller');

router.get('/test', (req, res) => res.status(200).json({ message: 'User Route is working.' }));
router.post('/register', usersController.CREATE_USER);
router.get('/registers', (req, res) => res.status(200).json({ message: req.body }));

module.exports = router;
