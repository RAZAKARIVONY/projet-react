import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SideBar from "../../../components/navbar/SideBar";

function EditRecrut() {
  const initialValue = {
    nom: "",
    prenom: "",
    cisco: "",
    CIN: "",
    diplome: "",
    date_naiss: "",
    situation: "",
    adresse: "",
  };

  const [recrut, setRecrut] = useState(initialValue);
  const [error, setError] = useState(false);

  const { nom, prenom, cisco, CIN, diplome, date_naiss, situation, adresse } =
    recrut;

  const { id } = useParams();

  let navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:4050/api_recrut/${id}`).then((res) => {
      setRecrut(res.data);
    });
  }, [id]);

  const onInputChange = (e) => {
    setRecrut({
      ...recrut,
      [e.target.name]: e.target.value,
    });
  };

  const editRecut = async () => {
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
      await axios
        .put(`http://localhost:4050/api_recrut/${id}`, recrut)
        .then((res) => {
          toast.success("Reclassement modifier avec succes");
          navigate("/monrecrutement");
        })
        .catch((err) => setRecrut(err.response.data));
  };

  const submitRecrut = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SideBar />
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-6">
            <form className="former" onSubmit={submitRecrut}>
              <fieldset className="fieldsetts">
                <legend className="legender"> Modifier le formulaire </legend>
                <div>
                  <label>Nom</label>
                  <input
                    name="nom"
                    type="text"
                    placeholder="votre nom"
                    value={nom}
                    onChange={(e) => onInputChange(e)}
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
                    placeholder="votre prenom"
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
                  <select
                    name="diplome"
                    value={diplome}
                    onChange={onInputChange}
                  >
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
                    value={date_naiss}
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" onClick={editRecut}>
                    Modifier
                  </button>
                  <Link to="/monrecrutement">
                    <button className="bton" type="submit">
                      Annuler
                    </button>
                  </Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditRecrut;
