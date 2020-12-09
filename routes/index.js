const express = require('express');
const router = express.Router();

const validateDto = require('../middlewares/validate-dto');

router.get('/about', (req, res) => {
	return res.json({
		description: 'Service information',
	});
});

module.exports = router;
