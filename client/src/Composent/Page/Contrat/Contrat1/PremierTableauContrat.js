import Edit from "@mui/icons-material/Edit";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import SearchIcon from "@mui/icons-material/Search";
import "./PremierContrat.css";

function PremierTableauContrat() {
  const navigate = useNavigate();
  const [record, setRecord] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const news = () => {
    navigate("/addContrat1");
  };
  //voir tout le liste
  const getAllUser = async () => {
    let response = await axios.get("http://localhost:4050/api_contrat1");
    setRecord(response.data);
  };
  useEffect(() => {
    getAllUser();
  });

  // Dlelete
  const OnDelete = (id_) => {
    if (window.confirm("Voulez vous vraiment supprimer")) {
      axios.delete(`http://localhost:4050/api_contrat1/${id_}`).then((res) => {
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
    <>
      <div className="container">
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
              <button>Nouveau Contrat</button>
            </div>
          </div>
          <div className="topbarRight">
            <div>
              <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="generate"
                table="table-to-contrat1"
                filename="PremierContrat"
                sheet="tablexls"
                buttonText="Generer en Excel"
              />
            </div>
          </div>
        </div>

        {/* <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="search-input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={(e) => searchItems(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div>
                <NavLink className="nav-link" to="/addContrat1" exact>
                  <button>Nouveau Contrat</button>
                </NavLink>
              </div>
            </div>
            <div className="col">
              <div>
                <ReactHTMLTableToExcel
                  id="test-table-xls-button"
                  className="download-table-xls-button"
                  table="table-to-xls"
                  filename="premierContrat"
                  sheet="tablexls"
                  buttonText="Generer en XLS"
                />
              </div>
            </div>
          </div>
        </div> */}

        <Table size="small" id="table-to-contrat1">
          <TableHead>
            <TableRow>
              <TableCell>Nom et Prenom</TableCell>
              <TableCell>CIN</TableCell>
              <TableCell>CISCO</TableCell>
              <TableCell>Diplome</TableCell>
              <TableCell>Date de service</TableCell>
              <TableCell>Date d'effet</TableCell>
              <TableCell>Duree</TableCell>

              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {record
              .filter((contrat1) => {
                return Object.values(contrat1)
                  .join("")
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              })
              .map((contrat1) => (
                <TableRow key={contrat1.id}>
                  <TableCell>
                    {contrat1.nom} {contrat1.prenom}
                  </TableCell>

                  <TableCell>{contrat1.CIN}</TableCell>
                  <TableCell>{contrat1.cisco}</TableCell>
                  <TableCell>{contrat1.diplome}</TableCell>
                  <TableCell>{contrat1.date_service}</TableCell>
                  <TableCell>{contrat1.date_fait}</TableCell>
                  <TableCell>{contrat1.duree}</TableCell>
                  <TableCell className="d-flex justify-content-between">
                    <h5>
                      <Tooltip title="Consuler" placement="bottom" arrow>
                        <Link to={`/detailcontrat1/${contrat1._id}`}>
                          <RemoveRedEye />
                        </Link>
                      </Tooltip>
                    </h5>
                    <h5>
                      <Tooltip title="modifier" placement="bottom" arrow>
                        <Link to={`/editContrat1/${contrat1._id}`}>
                          <Edit />
                        </Link>
                      </Tooltip>
                    </h5>
                    <h5 onClick={() => OnDelete(contrat1._id)}>
                      <Tooltip title="Supprimer" placement="bottom" arrow>
                        <GoTrashcan />
                      </Tooltip>
                    </h5>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default PremierTableauContrat;
