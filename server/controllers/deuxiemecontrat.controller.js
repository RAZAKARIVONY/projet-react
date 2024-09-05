const Contrat2 = require("../models/deuxiemecontrat.model");

const getAllContrat2 = async (req, res, next) => {
  try {
    const contractuel = await Contrat2.find();
    res.status(201).json(contractuel);
  } catch (err) {
    res.status(404).json(err);
  }
};

const addContrat2 = async (req, res) => {
  if (
    !req.body.IM &&
    !req.body.nom &&
    !req.body.prenom &&
    !req.body.cors &&
    !req.body.grade &&
    !req.body.cisco &&
    !req.body.diplome &&
    !req.body.service &&
    !req.body.date_service &&
    !req.body.date_fait &&
    !req.body.duree &&
    !req.body.indice
  ) {
    res.status(400).send({ message: "Contenent not be empty" });
  }

  const contractuel = new Contrat2({
    IM: req.body.IM,
    nom: req.body.nom,
    prenom: req.body.prenom,
    cors: req.body.cors,
    grade: req.body.grade,
    cisco: req.body.cisco,
    diplome: req.body.diplome,
    service: req.body.service,

    date_service: req.body.date_service,
    date_fait: req.body.date_fait,
    duree: req.body.duree,
    indice: req.body.indice,
  });

  await contractuel
    .save()
    .then((data) => {
      res.send({
        message: "contrat created succes!!",
        contractuel: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Il y a un erreur sur la creation de l'utulisateur",
      });
    });
};

const getById = async (req, res) => {
  try {
    const data = await Contrat2.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const updateContrat2 = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data to update can not empty",
    });
  }
  const id = req.params.id;

  await Contrat2.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

const deleteContrat2 = async (req, res) => {
  await Contrat2.findByIdAndRemove(req.params.id)
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

exports.getAllContrat2 = getAllContrat2;
exports.addContrat2 = addContrat2;
exports.getById = getById;
exports.updateContrat2 = updateContrat2;
exports.deleteContrat2 = deleteContrat2;
