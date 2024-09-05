const DeuxiemeContrat = require("../models/moncontrat2.model");
const Contrat2Validate = require("../validator/Contrat2.validator");

const getAllMonContrat2 = async (req, res, next) => {
  try {
    const contratDeux = await DeuxiemeContrat.find();
    res.status(201).json(contratDeux);
  } catch (err) {
    res.status(404).json(err);
  }
};

const addMonContrat2 = async (req, res) => {
  const { errors, isValid } = Contrat2Validate(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await DeuxiemeContrat.findOne({ Immatricule: req.body.Immatricule }).then(
        async (exist) => {
          if (exist) {
            errors.Immatricule = "Cette IM existe deja";
            res.status(404).json(errors);
          } else {
            await DeuxiemeContrat.create(req.body);
            res.status(201).json({ message: "contrat created succes!!" });
          }
        }
      );
    }
  } catch (error) {
    console.log(error.message);
  }
  // if (
  //   !req.body.Immatricule &&
  //   !req.body.name &&
  //   !req.body.firstName &&
  //   !req.body.corps &&
  //   !req.body.assimilation &&
  //   !req.body.diplomer &&
  //   !req.body.services &&
  //   !req.body.ciscolaire &&
  //   !req.body.date_services &&
  //   !req.body.date_effet &&
  //   !req.body.duration &&
  //   !req.body.index
  // ) {
  //   res.status(400).send({ message: "Contenent not be empty" });
  // }

  // const contratDeux = new DeuxiemeContrat({
  //   Immatricule: req.body.Immatricule,
  //   name: req.body.name,
  //   firstName: req.body.firstName,
  //   corps: req.body.corps,
  //   assimilation: req.body.assimilation,
  //   diplomer: req.body.diplomer,
  //   services: req.body.services,
  //   ciscolaire: req.body.ciscolaire,
  //   date_services: req.body.date_services,
  //   date_effet: req.body.date_effet,
  //   duration: req.body.duration,
  //   index: req.body.index,
  // });
  // await contratDeux
  //   .save()
  //   .then((data) => {
  //     res.send({
  //       message: "contrat created succes!!",
  //       contratDeux: data,
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
    const data = await DeuxiemeContrat.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const updateMonContrat2 = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data to update can not empty",
    });
  }
  const id = req.params.id;

  await DeuxiemeContrat.findByIdAndUpdate(id, req.body, {
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

const deleteMonContrat2 = async (req, res) => {
  await DeuxiemeContrat.findByIdAndRemove(req.params.id)
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

exports.getAllMonContrat2 = getAllMonContrat2;
exports.addMonContrat2 = addMonContrat2;
exports.getById = getById;
exports.updateMonContrat2 = updateMonContrat2;
exports.deleteMonContrat2 = deleteMonContrat2;
