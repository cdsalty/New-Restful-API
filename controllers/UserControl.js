const UserModel = require('../models/UserModel');


// to make this work, need to create a const for UserControl under server.js
// let users = UserModel.find() would retrieve all users
//  - .findone() a user, 
//  - .save() to save or overwrite the current model.


// every route controller must take two things, a request and response
module.exports = {
  create: (req, res) => {   // THE CREATE METHOD (create a new user from the UserModel)
    let user = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      team: req.body.team
    });

    user.save()  // saving (or updating) the new user created from UserMdoel
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  }
}


