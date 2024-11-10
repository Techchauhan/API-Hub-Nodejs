const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Define payment API routes
router.post('/process', paymentController.processPayment);
router.get('/status', paymentController.getPaymentStatus);

module.exports = router;
