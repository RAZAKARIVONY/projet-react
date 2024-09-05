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
    cisco: {
      type: String,
      required: true,
    },
    diplome: {
      type: String,
      required: true,
    },
    corps: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    indice: {
      type: String,
      required: true,
    },
    diplome1: {
      type: String,
      required: true,
    },
    corps1: {
      type: String,
      required: true,
    },
    grade1: {
      type: String,
      required: true,
    },

    indice1: {
      type: String,
      required: true,
    },
  },
  {
    collection: "reclassement",
  }
);

module.exports = mongoose.model("Reclassement", bookSchema);
