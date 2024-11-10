const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationContoller');

// Routes for notification API
router.post('/send', notificationController.sendNotification);
router.get('/status', notificationController.getNotificationStatus);

module.exports = router;
