const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("error: " + err));
});

router.route("/create").post((req, re) => {
  User.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  })
    .then(() => re.json("user created successfully"))
    .catch((err) => {
      re.status(400);
      const errObj = {};
      err.errors.map((er) => {
        errObj[er.path] = er.message;
      });
      re.json(errObj);
    });
});

router.route("/user").post((req, res) => {
  User.findOne({
    where: { email: req.body.email, password: req.body.password },
  })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json("error: " + err));
});

module.exports = router;
