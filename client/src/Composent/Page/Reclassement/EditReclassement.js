import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SideBar from "../../../components/navbar/SideBar";

function EditReclassement() {
  const [editreclassement, setEditreclassement] = useState({
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
  let navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(false);

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
  } = editreclassement;

  const onInputChange = function (e) {
    const { name, value } = e.target;
    console.log(name, value);

    setEditreclassement({
      ...editreclassement,
      [name]: value,
    });
  };

  const submitReclassement = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios.get(`http://localhost:4050/api_reclassement/${id}`).then((res) => {
      setEditreclassement(res.data);
    });
  }, [id]);

  const editReclass = async () => {
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
    if (
      nom &&
      prenom &&
      cisco &&
      grade &&
      corps &&
      diplome &&
      indice &&
      grade1 &&
      corps1 &&
      diplome1 &&
      indice1
    )
      await axios
        .put(`http://localhost:4050/api_reclassement/${id}`, editreclassement)
        .then((res) => {
          toast.success("Reclassement modifier avec succes");
          navigate("/monreclassement");
        })

        .catch((err) => setEditreclassement(err.response.data));
  };
  return (
    <>
      <SideBar />
      <div>
        <form className="former" onSubmit={submitReclassement}>
          <fieldset className="fieldsetts">
            <legend className="legender"> Modifier le formulaire </legend>
            <div>
              <label>Immatricule</label>
              <input
                type="text"
                placeholder="Votre nom"
                name="IM"
                value={editreclassement.IM}
                onChange={onInputChange}
                disabled="disabled"
              />
            </div>
            <div>
              <label>Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                name="nom"
                value={editreclassement.nom}
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
                value={editreclassement.prenom}
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
                value={editreclassement.cisco}
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
          <fieldset className="fieldsetts">
            <legend className="legender">Diplome Actuel</legend>

            <div>
              <label>Diplome</label>
              <select
                name="diplome"
                value={editreclassement.diplome}
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
                value={editreclassement.corps}
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
                value={editreclassement.grade}
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
                value={editreclassement.indice}
                onChange={onInputChange}
              />
            </div>
            {error && indice.length <= 0 ? (
              <label className="erreur">Indice can't be Empty </label>
            ) : (
              ""
            )}
          </fieldset>
          <fieldset className="fieldsetts">
            <legend className="legender">Diplome à reclasser</legend>
            <div>
              <label>Diplome</label>
              <select
                name="diplome1"
                value={editreclassement.diplome1}
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
                value={editreclassement.corps1}
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
                value={editreclassement.grade1}
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
                value={editreclassement.indice1}
                onChange={onInputChange}
              />
              {error && indice1.length <= 0 ? (
                <label className="erreur">Indice can't be Empty </label>
              ) : (
                ""
              )}
            </div>
            <button type="submit" onClick={editReclass}>
              Modifier
            </button>
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

export default EditReclassement;
