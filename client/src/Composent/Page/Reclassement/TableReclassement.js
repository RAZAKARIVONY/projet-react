import Edit from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SearchIcon from "@mui/icons-material/Search";

function TableReclassement() {
  const navigate = useNavigate();
  const [exist, setExist] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //voir tout le liste
  const getAllUser = async () => {
    let response = await axios.get("http://localhost:4050/api_reclassement");
    setExist(response.data);
  };
  useEffect(() => {
    getAllUser();
  });
  // Dlelete
  const OnDelete = (id_) => {
    if (window.confirm("Voulez vous vraiment supprimer")) {
      axios
        .delete(`http://localhost:4050/api_reclassement/${id_}`)
        .then((res) => {
          console.log(res.data.message);
        });
    }
    toast.error("Suprimer avec succes");
  };
  // Schearch
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  const news = () => {
    navigate("/addReclassement");
  };

  return (
    <>
      <div className="container">
        <div className="container text-center">
          <div className="topbarContainer">
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
            <div className="topbarCenter">
              <div onClick={news}>
                <button>Nouveau Reclassement</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5> Classement de diplome Actuel</h5>

          <table className="table table-striped table-bordered table-sm ml-4 small">
            <thead className="table-primary">
              <tr>
                <th>IM</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Diplome</th>
                <th>Corps</th>
                <th>Grade</th>
                <th>Indice</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {exist
                .filter((reclasser) => {
                  return Object.values(reclasser)
                    .join("")
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
                })
                .map((reclasser) => (
                  <tr key={reclasser.id}>
                    <td>{reclasser.IM}</td>
                    <td>{reclasser.nom}</td>
                    <td>{reclasser.prenom}</td>
                    <td>{reclasser.diplome}</td>
                    <td>{reclasser.corps}</td>
                    <td>{reclasser.grade}</td>
                    <td>{reclasser.indice}</td>
                    <td className="d-flex justify-content-between">
                      <h5>
                        <Tooltip title="modifier" placement="bottom" arrow>
                          <Link to={`/editReclassement/${reclasser._id}`}>
                            <Edit />
                          </Link>
                        </Tooltip>
                      </h5>
                      <h5 onClick={() => OnDelete(reclasser._id)}>
                        <GoTrashcan />
                      </h5>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <h5>Reclassement de diplome demandé</h5>
          <table className="table table-sm table-hover small">
            <thead className="table-info">
              <tr>
                <th>IM</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Diplome</th>
                <th>Corps</th>
                <th>Grade</th>
                <th>Indice</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {exist
                .filter((reclasser) => {
                  return Object.values(reclasser)
                    .join("")
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
                })
                .map((reclasser) => (
                  <tr key={reclasser.id}>
                    <td>{reclasser.IM}</td>
                    <td>{reclasser.nom}</td>
                    <td>{reclasser.prenom}</td>
                    <td>{reclasser.diplome1}</td>
                    <td>{reclasser.corps1}</td>
                    <td>{reclasser.grade1}</td>
                    <td>{reclasser.indice1}</td>
                    <td className="d-flex justify-content-between">
                      {" "}
                      <h5>
                        <Tooltip title="modifier" placement="bottom" arrow>
                          <Link to={`/editReclassement/${reclasser._id}`}>
                            <Edit />
                          </Link>
                        </Tooltip>
                      </h5>
                      <h5 onClick={() => OnDelete(reclasser._id)}>
                        <GoTrashcan />
                      </h5>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableReclassement;
