const Contrat3 = require("../models/troisiemeContrat.model");
const ValidateUser = require("../validator/User.validator");

const getAllContrat3 = async (req, res, next) => {
  try {
    const contractuel = await Contrat3.find();
    res.status(201).json(contractuel);
  } catch (err) {
    res.status(404).json(err);
  }
};

const addContrat3 = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Contrat3.findOne({ IM: req.body.IM }).then(async (exist) => {
        if (exist) {
          errors.IM = "Cette IM existe deja";
          res.status(404).json(errors);
        } else {
          await Contrat3.create(req.body);
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
  //   !req.body.cors &&
  //   !req.body.grade &&
  //   !req.body.cin &&
  //   !req.body.tel &&
  //   !req.body.situation &&
  //   !req.body.diplome &&
  //   !req.body.service &&
  //   !req.body.date_service &&
  //   !req.body.date_fait &&
  //   !req.body.duree &&
  //   !req.body.indice
  // ) {
  //   res.status(400).send({ message: "Contenent not be empty" });
  // }

  // const contractuel = new Contrat3({
  //   IM: req.body.IM,
  //   nom: req.body.nom,
  //   prenom: req.body.prenom,
  //   cors: req.body.cors,
  //   grade: req.body.grade,
  //   cin: req.body.cin,
  //   tel: req.body.tel,
  //   situation: req.body.situation,
  //   cisco: req.body.cisco,
  //   diplome: req.body.diplome,
  //   service: req.body.service,
  //   date_service: req.body.date_service,
  //   date_fait: req.body.date_fait,
  //   duree: req.body.duree,
  //   indice: req.body.indice,
  // });

  // await contractuel
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
    const data = await Contrat3.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const updateContrat3 = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data to update can not empty",
    });
  }
  const id = req.params.id;

  await Contrat3.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

const deleteContrat3 = async (req, res) => {
  await Contrat3.findByIdAndRemove(req.params.id)
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

exports.getAllContrat3 = getAllContrat3;
exports.addContrat3 = addContrat3;
exports.getById = getById;
exports.updateContrat3 = updateContrat3;
exports.deleteContrat3 = deleteContrat3;
