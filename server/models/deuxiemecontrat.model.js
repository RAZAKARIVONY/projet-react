const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    IM: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    cors: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    diplome: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    cisco: {
      type: String,
      required: true,
    },
    date_service: {
      type: String,
      required: true,
    },
    date_fait: {
      type: String,
      required: true,
    },
    duree: {
      type: String,
      required: true,
    },
    indice: {
      type: String,
      required: true,
    },
  },
  {
    collection: "contrat2",
  }
);

module.exports = mongoose.model("Contrat2", bookSchema);
