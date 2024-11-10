const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailContoller');

// Routes for email API
router.post('/send', emailController.sendEmail);
router.get('/status', emailController.getEmailStatus);

module.exports = router;
