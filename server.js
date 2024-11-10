const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const paymentRoutes = require('./routes/paymentRoutes');
const emailRoutes = require('./routes/emailRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const userRoutes = require('./routes/userRoutes');

// Register the routes with corresponding paths
app.use('/api/payment', paymentRoutes); // Payment API
app.use('/api/email', emailRoutes);     // Email API
app.use('/api/notification', notificationRoutes); // Notification API
app.use('/api/user', userRoutes);       // User API

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


//user link - http://localhost:3000/api/user/info
//Pyamnent Link - http://localhost:3000/api/payment/status
//Pyamnent Link - http://localhost:3000/api/payment/process