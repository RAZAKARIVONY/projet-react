const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    cisco: {
      type: String,
      required: true,
    },
    CIN: {
      type: String,
      required: true,
    },
    diplome: {
      type: String,
      required: true,
    },

    date_naiss: {
      type: String,
      required: true,
    },
    situation: {
      type: String,
      required: true,
    },
    adresse: {
      type: String,
      required: true,
    },
  },
  {
    collection: "recrutement",
  }
);

module.exports = mongoose.model("Recrutement", bookSchema);
