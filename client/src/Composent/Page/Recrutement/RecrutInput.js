import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SideBar from "../../../components/navbar/SideBar";
import "./Recrutement.css";

function RecrutInput() {
  const navigate = useNavigate();

  const [recrut, setRecrut] = useState({
    nom: "",
    prenom: "",
    cisco: "",
    CIN: "",
    diplome: "",
    date_naiss: new Date(),
    situation: "",
    adresse: "",
  });
  const [error, setError] = useState(false);

  const { nom, prenom, cisco, CIN, diplome, situation, adresse } = recrut;

  const onInputChange = function (e) {
    const { name, value } = e.target;
    console.log(name, value);
    setRecrut({
      ...recrut,
      [name]: value,
    });
  };

  // Ajouter un recrut
  const submitRecrut = async (e) => {
    e.preventDefault();
    if (
      nom.length === 0 ||
      prenom.length === 0 ||
      cisco.length === 0 ||
      CIN.length === 0 ||
      diplome.length === 0 ||
      situation.length === 0 ||
      adresse.length === 0
    ) {
      setError(true);
    }
    if (nom && prenom && cisco && CIN && diplome && situation && adresse)
      e.target.reset();
    await axios.post("http://localhost:4050/api_recrut", recrut);
    toast.success("Ajouter avec succes");
    navigate("/monrecrutement");
  };

  return (
    <div>
      <SideBar />
      <form className="forms" onSubmit={submitRecrut}>
        <fieldset className="fieldsets">
          <legend className="legends"> formulaire d'ajout </legend>
          <div>
            <label>Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              name="nom"
              value={nom}
              onChange={onInputChange}
            />
            {error && nom.length <= 0 ? (
              <label className="erreur">champ nom vide </label>
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
              value={prenom}
              onChange={onInputChange}
            />
            {error && prenom.length <= 0 ? (
              <label className="erreur">champ prenom vide </label>
            ) : (
              ""
            )}
          </div>

          <div>
            <label>cisco</label>
            <select name="cisco" value={cisco} onChange={onInputChange}>
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
              <label className="erreur">champ cisco vide </label>
            ) : (
              ""
            )}
          </div>

          <div>
            <label>CIN</label>
            <input
              type="number"
              placeholder="Votre cin"
              name="CIN"
              value={CIN}
              onChange={onInputChange}
            />
            {error && CIN.length <= 0 ? (
              <label className="erreur">champ CIN vide </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Situation Familiale</label>
            <select
              name="situation"
              value={situation}
              onChange={onInputChange}
              placeholder="Votre situation familiale"
            >
              <option></option>
              <option value="Celibataire">Celibataire</option>
              <option value="Marié">Marié</option>
            </select>

            {error && situation.length <= 0 ? (
              <label className="erreur">champ situation vide </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Adresse</label>
            <input
              type="text"
              placeholder="Votre cin"
              name="adresse"
              value={adresse}
              onChange={onInputChange}
            />
            {error && adresse.length <= 0 ? (
              <label className="erreur">champ adresse vide </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Diplome</label>
            <select name="diplome" value={diplome} onChange={onInputChange}>
              <option></option>
              <option value="CEPE">CEPE</option>
              <option value="BEPC">BEPC</option>
              <option value="BACC">BACC</option>
            </select>
            {error && diplome.length <= 0 ? (
              <label className="erreur">champ diplome vide </label>
            ) : (
              ""
            )}
          </div>

          <div>
            <label>Date de naissance</label>
            <input
              type="date"
              placeholder="Votre date de naissance"
              name="date_naiss"
              value={recrut.date_naiss}
              onChange={onInputChange}
            />
          </div>
          <button type="submit"> Ajouter</button>
          <Link to="/monrecrutement">
            <button className="bton" type="submit">
              Annuler
            </button>
          </Link>
        </fieldset>
      </form>
    </div>
  );
}

export default RecrutInput;
