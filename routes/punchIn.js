const express = require('express');
const router = express.Router();
const punchInController = require('../controller/punchin.controller');

router.get('/test', (req, res) => res.status(200).json({ message: 'User Route is working.' }));
router.post('/mark-punch-in', punchInController.MARK_PUNCH_IN);
router.get('/punchins_for_user', punchInController.GET_PUNCH_IN_FOR_USER);
router.get('/punchins_for_user_date', punchInController.GET_PUNCH_IN_BY_USER_AND_DATE);

module.exports = router;
