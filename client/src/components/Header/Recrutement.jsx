import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoTrashcan } from "react-icons/go";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import Edit from "@mui/icons-material/Edit";
import classnames from "classnames";

function Recrutement() {
  const [formErrors, setFormErrors] = useState({});

  // const [isSubmit, setIsSubmit]= useState(false)

  const [records, setRecord] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const [recrut, setRecrut] = useState({
    nom: "",
    prenom: "",
    cisco: "",
    CIN: "",
    diplome: "",
    date_naiss: new Date(),
  });

  //Object destructurer
  const { nom, prenom, cisco, CIN, diplome, date_naiss } = recrut;
  const onInputChange = (e) => {
    setRecrut({ ...recrut, [e.target.name]: e.target.value });
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  //voir tout le liste
  const getAllUser = async () => {
    let response = await axios.get("http://localhost:4050/api_recrut");
    setRecord(response.data);
  };
  useEffect(() => {
    getAllUser();
  }, []);

  // Ajouter un recrut
  const submitRecrut = async (e) => {
    e.preventDefault();
    setFormErrors(validate(recrut));

    e.target.reset();
    await axios.post("http://localhost:4050/api_recrut", recrut);
    toast.success("Ajouter avec succes");
  };

  //  Validate Error
  const validate = (values) => {
    const errors = {};

    if (!values.nom) {
      errors.nom = "Nom requis";
    }
    if (!values.prenom) {
      errors.prenom = "prenom requis";
    }
    if (!values.cisco) {
      errors.cisco = "cisco requis";
    }
    if (!values.CIN) {
      errors.CIN = "cin requis";
    }
    if (!values.diplome) {
      errors.diplome = "Diplome requis";
    }
    if (!values.date_naiss) {
      errors.date_naiss = "Date de naissance requis";
    }
    return errors;
  };

  // Dlelete
  const OnDelete = (id_) => {
    if (window.confirm("Voulez vous vraiment supprimer")) {
      axios.delete(`http://localhost:4050/api_recrut/${id_}`).then((res) => {
        console.log(res.data.message);
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-7">
            <div
              className="box p-3 mb-3 mb-3 mt-5"
              style={{ border: "1px solid #d0d0d0" }}
            >
              <form onSubmit={submitRecrut}>
                <h5 className="mb-3">Insert formulaire</h5>
                <div className="row">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label>Nom</label>
                        <input
                          type="text"
                          className={classnames("form-control mb-4", {
                            "is-invalid": formErrors.nom,
                          })}
                          placeholder="votre nom"
                          name="nom"
                          value={nom}
                          onChange={onInputChange}
                        />
                        {formErrors.nom && (
                          <div className="invalid-feedback">{formErrors.nom}</div>
                        )}
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label>Prenom</label>
                        <input
                          type="text"
                          className={classnames("form-control mb-4", {
                            "is-invalid": formErrors.prenom,
                          })}
                          placeholder="votre prenom"
                          name="prenom"
                          value={prenom}
                          onChange={onInputChange}
                        />
                        {formErrors.prenom && (
                          <div class="invalid-feedback">
                            {formErrors.prenom}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <label>CISCO</label>
                      <input
                        type="text"
                        className={classnames("form-control mb-4", {
                          "is-invalid": formErrors.cisco,
                        })}
                        placeholder="votre CISCO"
                        name="cisco"
                        value={cisco}
                        onChange={onInputChange}
                      />
                      {formErrors.cisco && (
                        <div class="invalid-feedback">{formErrors.cisco}</div>
                      )}
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>CIN</label>
                      <input
                        type="number"
                        className={classnames("form-control mb-4", {
                          "is-invalid": formErrors.CIN,
                        })}
                        placeholder="votre CIN"
                        name="CIN"
                        value={CIN}
                        onChange={onInputChange}
                      />
                      {formErrors.CIN && (
                        <div class="invalid-feedback">{formErrors.CIN}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Diplome</label>
                      <input
                        type="text"
                        className={classnames("form-control mb-4", {
                          "is-invalid": formErrors.diplome,
                        })}
                        placeholder="votre Diplome"
                        name="diplome"
                        value={diplome}
                        onChange={onInputChange}
                      />
                      {formErrors.diplome && (
                        <div class="invalid-feedback">{formErrors.diplome}</div>
                      )}
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Date de naissance</label>
                      <input
                        type="date"
                        className="form-control mb-4"
                        placeholder="votre date de naissance"
                        name="date_naiss"
                        value={date_naiss}
                        onChange={onInputChange}
                      />
                      {formErrors.date_naiss && (
                        <p className="error">{formErrors.date_naiss}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary mb-3" type="submit">
                    Ajouter
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-10">
            <div className="input-group mt-2 mb-3">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={(e) => searchItems(e.target.value)}
                />
              </div>
              <button type="button" className="btn btn-outline-primary">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
            
            <table className="table table-hover table-striped table-bordered ml-4">
              <thead className="table-dark">
                <tr>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>CISCO</th>
                  <th>CIN</th>
                  <th>Diplome</th>
                  <th>Date de naissance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {console.log(records)}
                {records
                  .filter((recrut) => {
                    return Object.values(recrut)
                      .join("")
                      .toLowerCase()
                      .includes(searchInput.toLowerCase());
                  })
                  .map((recrut) => (
                    <tr key={recrut.id}>
                      <td>{recrut.nom}</td>
                      <td>{recrut.prenom}</td>
                      <td>{recrut.cisco}</td>
                      <td>{recrut.CIN}</td>
                      <td>{recrut.diplome}</td>
                      <td>{recrut.date_naiss}</td>
                      <td className="d-flex justify-content-between">
                        <button className="btn btn-success">
                          <Link
                            to={`/views/${recrut._id}`}
                            className="text-white"
                          >
                            <RemoveRedEye />
                          </Link>
                        </button>
                        <button className="btn btn-primary">
                          <Link
                            to={`/edit/${recrut._id}`}
                            className="text-white"
                          >
                            <Edit />
                          </Link>
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => OnDelete(recrut._id)}
                        >
                          <GoTrashcan />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recrutement;
