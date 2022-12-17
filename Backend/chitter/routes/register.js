import express from "express";
import bodyParser from "body-parser";
import { body, validationResult } from "express-validator";

import User from "../models/user.js";

const router = express.Router();
router.use(bodyParser.json());

const register = (req, res) => {
  const newUser = new User({
    email: req.body.email,
    pass: req.body.pass,
  });

  User.find({ email: newUser.email }).then(users => {
    if (users.length > 0) {
      res.status(200).send({ message: "E-mail already in use", email: newUser.email });
      return;
    }

    newUser.save((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(201).send({ message: `User registered successfully`, user });
    });
  });
};

router.route("/").post(
    [  
    body("email").exists(),
    body("pass").exists(),
  ],
  register);

export default router;