import Edit from "@mui/icons-material/Edit";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Recrutement.css";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";

function TableRecrut() {
  const [records, setRecord] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  //voir tout le liste
  const getAllUser = async () => {
    let response = await axios.get("http://localhost:4050/api_recrut");
    setRecord(response.data);
  };
  useEffect(() => {
    getAllUser();
  });

  // Dlelete
  const OnDelete = (id_) => {
    if (window.confirm("Voulez vous vraiment supprimer")) {
      axios.delete(`http://localhost:4050/api_recrut/${id_}`).then((res) => {
        console.log(res.data.message);
      });
    }
    toast.error("Suprimer avec succes");
  };

  // Schearch
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };
  return (
    <div className="container">
      {/* <div className="input-group mt-2 mb-3">
        <div className="form-outline">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
        <span className="input-group-text" id="inputGroupPrepend">
          @
        </span>
      </div> */}

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="topbarLeft">
              <div className="searchbar">
                <input
                  type="text"
                  className="searchInput"
                  placeholder="Search..."
                  onChange={(e) => searchItems(e.target.value)}
                />
                <SearchIcon className="searchIcon" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="add">
              <NavLink className="nav-link" to="/addRecrut" exact>
                <button>Nouveau Recrut</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-hover small">
        <thead className="table-primary">
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>CISCO</th>
            <th>CIN</th>
            <th>Diplome</th>
            <th>Situation</th>
            <th>Adresse</th>
            <th>Date de naissance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
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
                <td>{recrut.situation}</td>
                <td>{recrut.adresse}</td>
                <td>{recrut.date_naiss}</td>
                <td className="d-flex justify-content-between">
                  <h5>
                    <Tooltip title="consulter" placement="bottom" arrow>
                      <Link to={`/detailrecrut/${recrut._id}`}>
                        <RemoveRedEye />
                      </Link>
                    </Tooltip>
                  </h5>
                  <h5>
                    <Tooltip title="modifier" placement="bottom" arrow>
                      <Link to={`/editRecrut/${recrut._id}`}>
                        <Edit />
                      </Link>
                    </Tooltip>
                  </h5>
                  <h5 onClick={() => OnDelete(recrut._id)}>
                    <GoTrashcan />
                  </h5>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableRecrut;
