import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SideBar from "../../../components/navbar/SideBar";
import classnames from "classnames";
import "./Reclassement.css";

function InputReclassement() {
  const navigate = useNavigate();
  const [reclassement, setReclassement] = useState({
    IM: "",
    nom: "",
    prenom: "",
    cisco: "",
    diplome: "",
    corps: "",
    grade: "",
    indice: "",
    diplome1: "",
    corps1: "",
    grade1: "",
    indice1: "",
  });
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});

  const {
    nom,
    prenom,
    cisco,
    diplome,
    corps,
    grade,
    indice,
    diplome1,
    corps1,
    grade1,
    indice1,
  } = reclassement;

  // const [showtext, setShowtext] = useState("");

  // const handleText = (e) => {
  //   const getValue = e.target.value;
  //   console.log(getValue);

  //   if (getValue === 1) {
  //     const show = "200";
  //     setShowtext(show);
  //   } else if (getValue === 2) {
  //     const show = "400";
  //     setShowtext(show);
  //   }
  // };

  const onInputChange = function (e) {
    const { name, value } = e.target;
    console.log(name, value);
    setReclassement({
      ...reclassement,
      [name]: value,
    });
  };
  // Ajouter un premiere contrat
  const submitReclassement = async (e) => {
    e.preventDefault();

    if (
      nom.length === 0 ||
      prenom.length === 0 ||
      cisco.length === 0 ||
      grade.length === 0 ||
      corps.length === 0 ||
      diplome.length === 0 ||
      indice.length === 0 ||
      grade1.length === 0 ||
      corps1.length === 0 ||
      diplome1.length === 0 ||
      indice1.length === 0
    ) {
      setError(true);
    }

    e.target.reset();
    await axios
      .post("http://localhost:4050/api_reclassement", reclassement)
      .then((res) => {
        toast.success("Ajouter avec succes");
        navigate("/monreclassement");
      })
      .catch((err) => setErrors(err.response.data));
  };

  return (
    <>
      <SideBar />
      <div>
        <form className="forms" onSubmit={submitReclassement}>
          <fieldset className="fieldsets">
            <legend className="legends"> formulaire d'ajout </legend>
            <div>
              <label>Immatricule</label>
              <input
                type="number"
                placeholder="Votre IM"
                name="IM"
                value={reclassement.IM}
                className={classnames({
                  "is-invalid": errors.IM,
                })}
                onChange={onInputChange}
              />
              {errors && <div className="errorIM">{errors.IM}</div>}
            </div>
            <div>
              <label>Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                name="nom"
                value={reclassement.nom}
                onChange={onInputChange}
              />
              {error && nom.length <= 0 ? (
                <label className="erreur">Name can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Prenom</label>
              <input
                type="text"
                placeholder="Votre prenom"
                name="prenom"
                value={reclassement.prenom}
                onChange={onInputChange}
              />
              {error && prenom.length <= 0 ? (
                <label className="erreur">Prenom can't be Empty </label>
              ) : (
                ""
              )}
            </div>

            <div>
              <label>cisco</label>
              <select
                name="cisco"
                value={reclassement.cisco}
                onChange={onInputChange}
              >
                <option></option>
                <option value="Ambalavao">Ambalavao</option>
                <option value="Ambohimahasoa">Ambohimahasoa</option>
                <option value="Fianarantsoa">Fianarantsoa</option>
                <option value="Lalangina">Lalangina</option>
                <option value="Ikalamavony">Ikalamavony</option>
                <option value="Isandra">Isandra</option>
                <option value="Vohibato">Vohibato</option>
              </select>
              {error && cisco.length <= 0 ? (
                <label className="erreur">Cisco can't be Empty </label>
              ) : (
                ""
              )}
            </div>
          </fieldset>
          <fieldset className="fieldsets">
            <legend className="legends"> Diplome Actuel</legend>

            <div>
              <label>Diplome</label>
              <select
                name="diplome"
                value={reclassement.diplome}
                onChange={onInputChange}
              >
                <option></option>
                <option value="CEPE">CEPE</option>
                <option value="BEPC">BEPC</option>
                <option value="BACC">BACC</option>
              </select>
              {error && diplome.length <= 0 ? (
                <label className="erreur">Diplome can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Corps</label>
              <select
                name="corps"
                value={reclassement.corps}
                onChange={onInputChange}
              >
                <option></option>
                <option className="Sous-Operateur">Sous-Operateur</option>
                <option className="Operateur">Operateur</option>
                <option className="Encadreur">Encadreur</option>
              </select>
              {error && corps.length <= 0 ? (
                <label className="erreur">Corps can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Grade</label>
              <select
                name="grade"
                value={reclassement.grade}
                onChange={onInputChange}
              >
                <option></option>
                <option className=" Echele II 1eme Echelon">
                  Echele II 1<sup>ere</sup> Echelon
                </option>
                <option className=" Echele II 2eme Echelon">
                  Echele II 2<sup>ere</sup> Echelon
                </option>
                <option className=" Echele II 3eme Echelon">
                  Echele II 3<sup>ere</sup> Echelon
                </option>
                <option className=" Echele III 1ere Echelon">
                  Echele III 1<sup>ere</sup> Echelon
                </option>
                <option className=" Echele III 2eme Echelon">
                  Echele III 2<sup>ere</sup> Echelon
                </option>
                <option className=" Echele III 3eme Echelon">
                  Echele III 3<sup>ere</sup> Echelon
                </option>
                <option className=" Echele IV 1ere Echelon">
                  Echele IV 1<sup>ere</sup> Echelon
                </option>
                <option className=" Echele IV 2eme Echelon">
                  Echele IV 2<sup>ere</sup> Echelon
                </option>
                <option className=" Echele IV 3eme Echelon">
                  Echele IV 3<sup>ere</sup> Echelon
                </option>
              </select>
              {error && grade.length <= 0 ? (
                <label className="erreur">Grade can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Indice</label>
              <input
                type="text"
                placeholder="Votre Indice"
                name="indice"
                value={reclassement.indice}
                onChange={onInputChange}
              />
              {error && indice.length <= 0 ? (
                <label className="erreur">Indice can't be Empty </label>
              ) : (
                ""
              )}
            </div>
          </fieldset>
          <fieldset className="fieldsets">
            <legend className="legends"> Diplome reclasser</legend>
            <div>
              <label>Diplome</label>
              <select
                name="diplome1"
                value={reclassement.diplome1}
                onChange={onInputChange}
              >
                <option></option>
                <option value="CEPE">CEPE</option>
                <option value="BEPC">BEPC</option>
                <option value="BACC">BACC</option>
              </select>
              {error && diplome1.length <= 0 ? (
                <label className="erreur">Diplome can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Corps</label>
              <select
                name="corps1"
                value={reclassement.corps1}
                onChange={onInputChange}
              >
                <option></option>
                <option className="Sous-Operateur">Sous-Operateur</option>
                <option className="Operateur">Operateur</option>
                <option className="Encadreur">Encadreur</option>
              </select>
              {error && corps1.length <= 0 ? (
                <label className="erreur">Corps can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Grade</label>
              <select
                name="grade1"
                value={reclassement.grade1}
                onChange={onInputChange}
              >
                <option></option>
                <option className=" Echele II 1ere Echelon">
                  Echele II 1<sup>ere</sup> Echelon
                </option>
                <option className=" Echele II 2eme Echelon">
                  Echele II 2<sup>ere</sup> Echelon
                </option>
                <option className=" Echele III 3eme Echelon">
                  Echele II 3<sup>ere</sup> Echelon
                </option>
                <option className=" Echele III 1ere Echelon">
                  Echele III 1<sup>ere</sup> Echelon
                </option>
                <option className=" Echele III 2eme Echelon">
                  Echele III 2<sup>ere</sup> Echelon
                </option>
                <option className=" Echele III 3eme Echelon">
                  Echele III 3<sup>ere</sup> Echelon
                </option>
                <option className=" Echele IV 1ere Echelon">
                  Echele IV 1<sup>ere</sup> Echelon
                </option>
                <option className=" Echele IV 2eme Echelon">
                  Echele IV 2<sup>ere</sup> Echelon
                </option>
                <option className=" Echele IV 3eme Echelon">
                  Echele IV 3<sup>ere</sup> Echelon
                </option>
              </select>
              {error && grade1.length <= 0 ? (
                <label className="erreur">Grade can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Indice</label>
              <input
                type="text"
                placeholder="Votre Indice"
                name="indice1"
                value={reclassement.indice1}
                onChange={onInputChange}
              />
              {error && indice1.length <= 0 ? (
                <label className="erreur">Indice can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <button type="submit"> Ajouter</button>
            <Link to="/monreclassement">
              <button className="bton" type="submit">
                Annuler
              </button>
            </Link>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default InputReclassement;
