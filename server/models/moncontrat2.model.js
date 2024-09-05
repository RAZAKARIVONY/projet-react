const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    Immatricule: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    corps: {
      type: String,
      required: true,
    },
    assimilation: {
      type: String,
      required: true,
    },
    diplomer: {
      type: String,
      required: true,
    },
    services: {
      type: String,
      required: true,
    },
    ciscolaire: {
      type: String,
      required: true,
    },
    date_services: {
      type: String,
      required: true,
    },
    date_effet: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    index: {
      type: String,
      required: true,
    },
  },
  {
    collection: "moncontrat2",
  }
);

module.exports = mongoose.model("DeuxiemeContrat", bookSchema);
