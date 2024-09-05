import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import SideBar from "../../../../components/navbar/SideBar";
// import SideBar from "../../../../components/navbar/SideBar";
import "./TroisiemeContrat.css";
import classnames from "classnames";

function AddContrat3() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const [error, setError] = useState(false);

  const [contrat3, setContrat3] = useState({
    IM: "",
    nom: "",
    prenom: "",
    cors: "",
    grade: "",
    tel: "",
    cin: "",
    situation: "",
    cisco: "",
    diplome: "",
    service: "",
    date_service: new Date(),
    date_fait: new Date(),
    duree: "",
    indice: "",
  });
  const {
    IM,
    nom,
    prenom,
    cors,
    grade,
    tel,
    cin,
    situation,
    cisco,
    diplome,
    service,
    date_service,
    date_fait,
    duree,
    indice,
  } = contrat3;

  const onInputChange = function (e) {
    const { name, value } = e.target;
    console.log(name, value);

    setContrat3({
      ...contrat3,
      [name]: value,
    });
  };

  // Ajouter un deuxieme contrat
  const submitContrat = async (e) => {
    e.preventDefault();

    if (
      IM.length === 0 ||
      nom.length === 0 ||
      prenom.length === 0 ||
      cin.length === 0 ||
      tel.length === 0 ||
      situation.length === 0 ||
      cors.length === 0 ||
      grade.length === 0 ||
      cisco.length === 0 ||
      diplome.length === 0 ||
      service.length === 0 ||
      date_service.length === 0 ||
      date_fait.length === 0 ||
      duree.length === 0 ||
      indice.length === 0
    ) {
      setError(true);
    }
    if (
      IM &&
      nom &&
      prenom &&
      cisco &&
      cin &&
      tel &&
      situation &&
      diplome &&
      cors &&
      grade &&
      service &&
      date_service &&
      date_fait &&
      duree &&
      indice
    )
      e.target.reset();
    await axios
      .post("http://localhost:4050/api_contrat3", contrat3)
      .then((res) => {
        toast.success("Ajouter avec succes");
        navigate("/moncontrat3");
      })
      .catch((err) => setErrors(err.response.data));
  };
  return (
    <>
      <SideBar />
      <div>
        <form className="form" onSubmit={submitContrat}>
          <fieldset className="fieldset">
            <legend className="legend">Votre Identité</legend>
            <div>
              <label>N° Matricule </label>
              <input
                type="number"
                placeholder="Votre immatriculation"
                name="IM"
                value={contrat3.IM}
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
                value={contrat3.nom}
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
                value={contrat3.prenom}
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
                value={contrat3.cisco}
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
            <div>
              <label>CIN</label>
              <input
                type="text"
                placeholder="Votre cin "
                name="cin"
                value={contrat3.cin}
                onChange={onInputChange}
              />
              {error && cin.length <= 0 ? (
                <label className="erreur">CIN can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Telephone</label>
              <input
                type="text"
                placeholder="Votre tel "
                name="tel"
                value={contrat3.tel}
                onChange={onInputChange}
              />
              {error && tel.length <= 0 ? (
                <label className="erreur">
                  Numero de telephone can't be Empty{" "}
                </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Situation Familiale</label>
              <input
                type="text"
                placeholder="Votre situation "
                name="situation"
                value={contrat3.situation}
                onChange={onInputChange}
              />
              {error && situation.length <= 0 ? (
                <label className="erreur">
                  Situation familiale can't be Empty{" "}
                </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Service</label>
              <input
                type="text"
                placeholder="Votre service "
                name="service"
                value={contrat3.service}
                onChange={onInputChange}
              />
              {error && service.length <= 0 ? (
                <label className="erreur">Service can't be Empty </label>
              ) : (
                ""
              )}
            </div>
          </fieldset>

          <fieldset className="fieldsetname">
            <legend>Concernant le date </legend>
            <div>
              <label>Date de prise de service</label>
              <input
                type="date"
                placeholder="Entrer date de prise de service"
                name="date_service"
                value={contrat3.date_service}
                onChange={onInputChange}
              />
              {error && date_service.length <= 0 ? (
                <label className="erreur">
                  date de service can't be Empty{" "}
                </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Date de fait</label>
              <input
                type="date"
                placeholder="Entrer date de fait"
                name="date_fait"
                value={contrat3.date_fait}
                onChange={onInputChange}
              />
              {error && date_fait.length <= 0 ? (
                <label className="erreur">Date d'effet can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Durée</label>
              <input
                type="text"
                placeholder="duree"
                name="duree"
                value={contrat3.duree}
                onChange={onInputChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Autre</legend>

            <div>
              <label>Diplome</label>
              <select
                name="diplome"
                value={contrat3.diplome}
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
                name="cors"
                value={contrat3.cors}
                onChange={onInputChange}
              >
                <option></option>
                <option className="Sous-Operateur">Sous-Operateur</option>
                <option className="Operateur">Operateur</option>
                <option className="Encadreur">Encadreur</option>
              </select>
              {error && cors.length <= 0 ? (
                <label className="erreur">Corps can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Grade</label>
              <select
                name="grade"
                value={contrat3.grade}
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
                value={contrat3.indice}
                onChange={onInputChange}
              />
              {error && indice.length <= 0 ? (
                <label className="erreur">Indice can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <button type="submit"> Valider </button>
            <Link to="/moncontrat3">
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

export default AddContrat3;
