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
  


  exports.genrateUserInfo = (req, res)  =>{
    const SignleUserInfo = {
        id: 1,
        name: "Ronit",
        role: "Developer"
    }

    res.json(SignleUserInfo);
  }