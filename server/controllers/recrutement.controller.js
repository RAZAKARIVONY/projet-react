const Recrutement = require("../models/recrutement.model");

const getAllRecruter = async (req, res, next) => {
  try {
    const recrut = await Recrutement.find();
    res.status(201).json(recrut);
  } catch (err) {
    res.status(404).json(err);
  }

};

const getById = async (req, res) => {
  try {
    const data = await Recrutement.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const addRecruter = async (req, res) => {
  if (
    !req.body.nom &&
    !req.body.prenom &&
    !req.body.cisco &&
    !req.body.CIN &&
    !req.body.diplome &&
    !req.body.date_naiss &&
    !req.body.situation &&
    !req.body.adresse
  ) {
    res.status(400).send({ message: "Contenent not be empty" });
  }

  const recrut = new Recrutement({
    nom: req.body.nom,
    prenom: req.body.prenom,
    cisco: req.body.cisco,
    CIN: req.body.CIN,
    diplome: req.body.diplome,
    date_naiss: req.body.date_naiss,
    situation: req.body.situation,
    adresse: req.body.adresse,
  });

  await recrut
    .save()
    .then((data) => {
      res.send({
        message: "recrut created succes!!",
        recrut: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Il y a un erreur sur la creation de l'utulisateur",
      });
    });
};



// const updateRecruter=async(req,res)=>{
//     try {
//         const data = await Recrutement.findOneAndUpdate(
//             {_id: req.params.id},
//             req.body,
//             {new : true}
//         )
//         res.status(201).json(data)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

const updateRecruter = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data to update can not empty",
    });
  }
  const id = req.params.id;

  await Recrutement.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

const deleteRecuter = async (req, res) => {
  await Recrutement.findByIdAndRemove(req.params.id)
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

exports.getAllRecruter = getAllRecruter;
exports.addRecruter = addRecruter;
exports.getById = getById;
exports.updateRecruter = updateRecruter;
exports.deleteRecuter = deleteRecuter;
