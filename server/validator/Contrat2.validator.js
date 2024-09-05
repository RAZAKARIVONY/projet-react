const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function Contrat2Validate(data) {
  let errors = {};
  data.Immatricule = !isEmpty(data.Immatricule) ? data.Immatricule : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";

  if (validator.isEmpty(data.Immatricule)) {
    errors.Immatricule = "Requis Immatricule";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Required nom";
  }
  if (validator.isEmpty(data.firstName)) {
    errors.firstName = "Required prenom";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
