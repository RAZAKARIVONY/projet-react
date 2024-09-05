import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SideBar from "../../../../components/navbar/SideBar";
import "./MonContrat2.css";

function EditContrat2() {
  const [error, setError] = useState(false);

  const [contrat2, setContrat2] = useState({
    Immatricule: "",
    name: "",
    firstName: "",
    corps: "",
    assimilation: "",
    ciscolaire: "",
    diplomer: "",
    services: "",
    date_services: new Date(),
    date_effet: new Date(),
    duration: "",
    index: "",
  });
  const {
    Immatricule,
    name,
    firstName,
    corps,
    assimilation,
    ciscolaire,
    diplomer,
    services,
    date_services,
    date_effet,
    duration,
    index,
  } = contrat2;
  let navigate = useNavigate();
  const { id } = useParams();

  const onInputChange = function (e) {
    const { name, value } = e.target;
    console.log(name, value);

    setContrat2({
      ...contrat2,
      [name]: value,
    });
  };

  const newDateService = new Date(contrat2.date_services);
  const newDateFait = new Date(contrat2.date_effet);
  let result = moment(newDateFait).diff(newDateService, "month");

  const submitContrat = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios.get(`http://localhost:4050/api_moncontrat2/${id}`).then((res) => {
      setContrat2(res.data);
    });
  }, [id]);
  const editContrat = async () => {
    if (
      Immatricule.length === 0 ||
      name.length === 0 ||
      firstName.length === 0 ||
      corps.length === 0 ||
      assimilation.length === 0 ||
      ciscolaire.length === 0 ||
      diplomer.length === 0 ||
      services.length === 0 ||
      date_services.length === 0 ||
      date_effet.length === 0 ||
      duration.length === 0 ||
      index.length === 0
    ) {
      setError(true);
    }
    if (
      Immatricule &&
      name &&
      firstName &&
      corps &&
      assimilation &&
      ciscolaire &&
      diplomer &&
      services &&
      date_services &&
      date_effet &&
      duration &&
      index
    )
      await axios
        .put(`http://localhost:4050/api_moncontrat2/${id}`, contrat2)
        .then((res) => {
          toast.success("Ajouter avec succes");
          navigate("/moncontrat2");
        })
        .catch((err) => setContrat2(err.response.data));
  };
  return (
    <>
      <SideBar />
      <form className="former" onSubmit={submitContrat}>
        <h5>Modifier le formulaire du deuxieme contrat</h5>
        <fieldset className="fieldsetts">
          <legend className="legender">Votre Identité</legend>
          <div>
            <label>Immatricule </label>
            <input
              type="text"
              placeholder="Votre immatriculation"
              name="Immatricule"
              value={contrat2.Immatricule}
              onChange={onInputChange}
              disabled="disabled"
            />
          </div>
          <div>
            <label>Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              name="name"
              value={contrat2.name}
              onChange={onInputChange}
            />
            {error && name.length <= 0 ? (
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
              name="firstName"
              value={contrat2.firstName}
              onChange={onInputChange}
            />
            {error && firstName.length <= 0 ? (
              <label className="erreur">
                Prenom : veuillez remplir ce champ vide{" "}
              </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>cisco</label>
            <select
              name="ciscolaire"
              value={contrat2.ciscolaire}
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
            {error && ciscolaire.length <= 0 ? (
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
              name="services"
              value={contrat2.services}
              onChange={onInputChange}
            >
              <option></option>
              <option value="Personnel Administratif">
                Personnel Administratif
              </option>
              <option value="Personnel Enseignant">Personnel Enseignant</option>
            </select>
            {error && services.length <= 0 ? (
              <label className="erreur">
                Service : veuillez remplir ce champ vide{" "}
              </label>
            ) : (
              ""
            )}
          </div>
        </fieldset>

        <fieldset className="fieldsetts">
          <legend className="legender">Date d'expiation de contrat </legend>

          <div>
            <label>Date de prise de service</label>
            <input
              type="date"
              placeholder="Entrer date de prise de service"
              name="date_services"
              value={contrat2.date_services}
              onChange={onInputChange}
            />
            {error && date_services.length <= 0 ? (
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
              name="date_effet"
              value={contrat2.date_effet}
              onChange={onInputChange}
            />
            {error && date_effet.length <= 0 ? (
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
              name="duration"
              value={result}
              onChange={onInputChange}
            />
          </div>
        </fieldset>

        <fieldset className="fieldsetts">
          <legend className="legender"> Autre</legend>

          <div>
            <label>Diplome</label>
            <select
              name="diplomer"
              value={contrat2.diplomer}
              onChange={onInputChange}
            >
              <option></option>
              <option>CEPE</option>
              <option>BEPC</option>
              <option>BACC</option>
            </select>
            {error && diplomer.length <= 0 ? (
              <label className="erreur">
                Diplome : veuillez remplir ce champ vide{" "}
              </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Corps</label>
            <select
              name="corps"
              value={contrat2.corps}
              onChange={onInputChange}
            >
              <option></option>
              <option>Sous-Operateur</option>
              <option>Operateur</option>
              <option>Encadreur</option>
            </select>
            {error && corps.length <= 0 ? (
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
              name="assimilation"
              value={contrat2.assimilation}
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
            {error && assimilation.length <= 0 ? (
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
              name="index"
              value={contrat2.index}
              onChange={onInputChange}
            />
            {error && index.length <= 0 ? (
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
          <Link to="/moncontrat2">
            <button className="bton" type="submit">
              Annuler
            </button>
          </Link>
        </fieldset>
      </form>
    </>
  );
}

export default EditContrat2;
