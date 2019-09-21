const User = require('../models/user');

module.exports.CREATE_USER = (req, res, next) => {
  const userName = req.body.userName;
  if (!userName) {
    return res.status(400).json({ status: 'error', message: 'User name is required' });
  }

  User.findOne({ userName }).then(async user => {
    if (user) {
      let errors = {};
      errors.message = 'User name already exists.';
      
      return res.status(400).json({ status: 'error User Name Already Exists', user });
    } else {
      
      const newUser = new User({
        userName
      });

      newUser
        .save()
        .then(user => {
          res.status(200).json({ status: 'success', user });
        })
        .catch(err =>
          next(err)
        );
    }
  });
};