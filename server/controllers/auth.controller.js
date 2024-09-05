const mongoose = require("mongoose");
const User = require("../models/auth.model");

exports.registre = (req, res) => {
  const { nom, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User est deja enregistrer" });
    } else {
      const user = new User({
        nom,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Enregistrer avec succes" });
        }
      });
    }
  });
};
exports.login = (req, res) => {
  const { nom, password } = req.body;
  User.findOne({ nom: nom }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login avec succes", user: user });
      } else {
        res.send({ message: "Username ou mot de passe incorrect" });
      }
    } else {
      res.send({ message: "Formulaire vide" });
    }
  });
};
