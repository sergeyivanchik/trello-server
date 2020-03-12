const User = require('../models/user');
const service = require('../passport/service.js');


const signup = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({ message: 'Please pass username and password.' });
  } else {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(500).json({ error: "User already exists." });
    } else {
      const newUser = new User({
        username: req.body.username,
        password: service.createHash(req.body.password),
        email: req.body.email
      });
      await newUser.save()
        .then(user => res.send(user))
        .catch(error => {
          res.status(500).send({
            message: error.message
          });
          res.send(error);
        })
    }
  }
};

const login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user || !service.isValidPassword(user, req.body.password)) {
    res.status(401).send({ message: 'Wrong username or password.' });
  } else {
    req.body.token = service.createToken(user.id);
    res.json({
      token: req.body.token,
      username: req.body.username,
      id: user.id,
      email: user.email
    })
  }
};

getToken = headers => 
  headers && headers.authorization ? headers.authorization : null;

module.exports = {
  signup,
  login,
  getToken
};
