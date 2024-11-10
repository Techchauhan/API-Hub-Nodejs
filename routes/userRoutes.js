const express = require('express');
const router = express.Router();
const userController = require('../controllers/userContoller');

// Define a route to return user data in JSON format
router.get('/info', userController.getUserInfo);
router.post('/genrateInfo', userController.generateUserInfo)

module.exports = router;
