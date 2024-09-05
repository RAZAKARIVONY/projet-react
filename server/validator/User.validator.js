const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateUser(data) {
  let errors = {};
  data.IM = !isEmpty(data.IM) ? data.IM : "";
  data.nom = !isEmpty(data.nom) ? data.nom : "";
  data.prenom = !isEmpty(data.prenom) ? data.prenom : "";

  if (validator.isEmpty(data.IM)) { 
    errors.IM = "Required IM";
  }
  if (validator.isEmpty(data.nom)) {
    errors.nom = "Required nom";
  }
  if (validator.isEmpty(data.prenom)) {
    errors.prenom = "Required prenom";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
