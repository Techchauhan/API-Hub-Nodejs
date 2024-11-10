exports.getUserInfo = (req, res) => {
    // Define a simple user object to return as JSON
    const userInfo = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin'
    };
  
    // Send the user info as a JSON response
    res.json(userInfo);
  };
  


exports.generateUserInfo = (req, res) =>{
    const {name, role } = req.body;

    const SingleUserInfo  = {
        id: 1,
        name: name  || "Default user",
        role: role || "Default Role"
    }

    res.json(SingleUserInfo)
}