const Reclassement = require("../models/reclassement.model");
const ValidateUser = require("../validator/User.validator");

const getAllReclassement = async (req, res, next) => {
  try {
    const reclasser = await Reclassement.find();
    res.status(201).json(reclasser);
  } catch (err) {
    res.status(404).json(err);
  }
};

const addReclassement = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Reclassement.findOne({ IM: req.body.IM }).then(async (exist) => {
        if (exist) {
          errors.IM = "Cette IM existe deja";
          res.status(404).json(errors);
        } else {
          await Reclassement.create(req.body);
          res.status(201).json({ message: "contrat created succes!!" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
  // if (
  //   !req.body.IM &&
  //   !req.body.nom &&
  //   !req.body.prenom &&
  //   !req.body.cisco &&
  //   !req.body.diplome &&
  //   !req.body.corps &&
  //   !req.body.grade &&
  //   !req.body.indice &&
  //   !req.body.diplome1 &&
  //   !req.body.corps1 &&
  //   !req.body.grade1 &&
  //   !req.body.indice1
  // ) {
  //   res.status(400).send({ message: "Contenent not be empty" });
  // }

  // const reclasser = new Reclassement({
  //   IM: req.body.IM,
  //   nom: req.body.nom,
  //   prenom: req.body.prenom,
  //   cisco: req.body.cisco,
  //   diplome: req.body.diplome,
  //   corps: req.body.corps,
  //   grade: req.body.grade,
  //   indice: req.body.indice,
  //   diplome1: req.body.diplome1,
  //   corps1: req.body.corps1,
  //   grade1: req.body.grade1,
  //   indice1: req.body.indice1,
  // });
  // await reclasser
  //   .save()
  //   .then((data) => {
  //     res.send({
  //       message: "contrat created succes!!",
  //       contractuel: data,
  //     });
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Il y a un erreur sur la creation de l'utulisateur",
  //     });
  //   });
};

const getById = async (req, res) => {
  try {
    const data = await Reclassement.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const updateReclassement = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data to update can not empty",
    });
  }
  const id = req.params.id;

  await Reclassement.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "User not found",
        });
      } else {
        res.send({ message: "user update succesfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

const deleteReclassement = async (req, res) => {
  await Reclassement.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "User not found",
        });
      } else {
        res.send({ message: "user delede succesfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
exports.getAllReclassement = getAllReclassement;
exports.addReclassement = addReclassement;
exports.getById = getById;
exports.updateReclassement = updateReclassement;
exports.deleteReclassement = deleteReclassement;
