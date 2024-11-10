exports.sendEmail = (req, res) => {
    // Logic for sending an email
    const { recipient, subject, message } = req.body;
    res.send(`Email sent to ${recipient} with subject: ${subject}`);
  };
  
  exports.getEmailStatus = (req, res) => {
    // Logic for getting email status
    res.send('Email status: Sent');
  };
  