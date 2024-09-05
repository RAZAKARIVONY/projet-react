import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SideBar from "../../../../components/navbar/SideBar";

function EditerPremierContrat() {
  const [error, setError] = useState(false);
  const [contrat1, setContrat1] = useState({
    nom: "",
    prenom: "",
    cors: "",
    CIN: "",
    grade: "",
    cisco: "",
    diplome: "",
    service: "",
    date_service: new Date(),
    date_fait: new Date(),
    duree: "",
    indice: "",
  });
  const {
    nom,
    prenom,
    CIN,
    cors,
    grade,
    cisco,
    diplome,
    service,
    date_service,
    date_fait,
    duree,
    indice,
  } = contrat1;
  let navigate = useNavigate();
  const { id } = useParams();

  const onInputChange = function (e) {
    const { name, value } = e.target;
    console.log(name, value);

    setContrat1({
      ...contrat1,
      [name]: value,
    });
  };

  const newDateService = new Date(contrat1.date_service);
  const newDateFait = new Date(contrat1.date_fait);
  let result = moment(newDateFait).diff(newDateService, "month");

  const submitContrat = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios.get(`http://localhost:4050/api_contrat1/${id}`).then((res) => {
      setContrat1(res.data);
    });
  }, [id]);
  const editContrat = async () => {
    if (
      nom.length === 0 ||
      prenom.length === 0 ||
      CIN.length === 0 ||
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
      nom &&
      prenom &&
      cisco &&
      CIN &&
      diplome &&
      cors &&
      grade &&
      service &&
      date_service &&
      date_fait &&
      duree &&
      indice
    )
      await axios
        .put(`http://localhost:4050/api_contrat1/${id}`, contrat1)
        .then((res) => {
          toast.success("Reclassement modifier avec succes");
          navigate("/premiercontrat");
        })
        .catch((err) => setContrat1(err.response.data));
  };
  return (
    <>
      <SideBar />
      <form className="former" onSubmit={submitContrat}>
        <h5>Modifier le formulaire du premier contrat</h5>
        <fieldset className="fieldsetts">
          <legend className="legender">Votre Identité</legend>

          <div>
            <label>Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              name="nom"
              value={contrat1.nom}
              onChange={onInputChange}
            />
            {error && nom.length <= 0 ? (
              <label className="erreur">
                Name : veuillez remplir ce champ vide{" "}
              </label>
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
              value={contrat1.prenom}
              onChange={onInputChange}
            />
            {error && prenom.length <= 0 ? (
              <label className="erreur">
                Prenom : veuillez remplir ce champ vide{" "}
              </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>CIN </label>
            <input
              type="number"
              placeholder="Votre CIN"
              name="CIN"
              value={contrat1.CIN}
              onChange={onInputChange}
            />
            {error && CIN.length <= 0 ? (
              <label className="erreur">
                CIN : veuillez remplir ce champ vide{" "}
              </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>cisco</label>
            <select
              name="cisco"
              value={contrat1.cisco}
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
              <label className="erreur">
                Cisco : veuillez remplir ce champ vide{" "}
              </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Fonction</label>
            <select
              name="service"
              value={contrat1.service}
              onChange={onInputChange}
            >
              <option></option>
              <option value="Personnel Administratif">
                Personnel Administratif
              </option>
              <option value="Personnel Enseignant">Personnel Enseignant</option>
            </select>
            {error && service.length <= 0 ? (
              <label className="erreur">
                Service : veuillez remplir ce champ vide{" "}
              </label>
            ) : (
              ""
            )}
          </div>
        </fieldset>

        <fieldset className="fieldsetts">
          <legend className="legender">Concernant le date</legend>
          <div>
            <label>Date de prise de service</label>
            <input
              type="date"
              placeholder="Entrer date de prise de service"
              name="date_service"
              value={contrat1.date_service}
              onChange={onInputChange}
            />
            {error && date_service.length <= 0 ? (
              <label className="erreur">
                date de service : veuillez remplir ce champ vide{" "}
              </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Date d'effet</label>
            <input
              type="date"
              placeholder="Entrer date de fait"
              name="date_fait"
              value={contrat1.date_fait}
              onChange={onInputChange}
            />
            {error && date_fait.length <= 0 ? (
              <label className="erreur">
                Date d'effet : veuillez remplir ce champ vide{" "}
              </label>
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
              value={result}
              onChange={onInputChange}
            />
          </div>
        </fieldset>

        <fieldset className="fieldsetts">
          <legend className="legender">Autre</legend>

          <div>
            <label>Diplome</label>
            <select
              name="diplome"
              value={contrat1.diplome}
              onChange={onInputChange}
            >
              <option></option>
              <option value="CEPE">CEPE</option>
              <option value="BEPC">BEPC</option>
              <option value="BACC">BACC</option>
            </select>
            {error && diplome.length <= 0 ? (
              <label className="erreur">
                Diplome : veuillez remplir ce champ vide{" "}
              </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Corps</label>
            <select name="cors" value={contrat1.cors} onChange={onInputChange}>
              <option></option>
              <option className="Sous-Operateur">Sous-Operateur</option>
              <option className="Operateur">Operateur</option>
              <option className="Encadreur">Encadreur</option>
            </select>
            {error && cors.length <= 0 ? (
              <label className="erreur">
                Corps : veuillez remplir ce champ vide{" "}
              </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Grade</label>
            <select
              name="grade"
              value={contrat1.grade}
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
              <label className="erreur">
                Grade : veuillez remplir ce champ vide{" "}
              </label>
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
              value={contrat1.indice}
              onChange={onInputChange}
            />
            {error && indice.length <= 0 ? (
              <label className="erreur">
                Indice : veuillez remplir ce champ vide{" "}
              </label>
            ) : (
              ""
            )}
          </div>
          <button type="submit" onClick={editContrat}>
            Modifier
          </button>
          <Link to="/premiercontrat">
            <button className="bton" type="submit">
              Annuler
            </button>
          </Link>
        </fieldset>
      </form>
    </>
  );
}

export default EditerPremierContrat;
