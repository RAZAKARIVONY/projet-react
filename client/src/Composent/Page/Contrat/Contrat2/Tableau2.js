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
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import { GoTrashcan } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SearchIcon from "@mui/icons-material/Search";

function Tableau2() {
  const navigate = useNavigate();
  const [record, setRecord] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //voir tout le liste
  const getAllUser = async () => {
    let response = await axios.get("http://localhost:4050/api_moncontrat2");
    setRecord(response.data);
  };
  useEffect(() => {
    getAllUser();
  });

  // Dlelete
  const OnDelete = (id_) => {
    if (window.confirm("Voulez vous vraiment supprimer")) {
      axios
        .delete(`http://localhost:4050/api_moncontrat2/${id_}`)
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
    navigate("/addContrat2");
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
              <ReactHtmlTableToExcel
                id="test-table-xls-button"
                className="generate"
                table="table-to-contrat2"
                filename="DeuxiemeContrat"
                sheet="tablexls"
                buttonText="Generer en Excel"
              />
            </div>
          </div>
        </div>

        <Table size="small" id="table-to-contrat2">
          <TableHead>
            <TableRow>
              <TableCell>IM</TableCell>
              <TableCell>Nom et Prenom</TableCell>
              <TableCell>CISCO</TableCell>
              <TableCell>Diplome</TableCell>
              <TableCell>Date service</TableCell>
              <TableCell>Date d'effet</TableCell>
              <TableCell>Duree</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {record
              .filter((contrat2) => {
                return Object.values(contrat2)
                  .join("")
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              })
              .map((contrat2) => (
                <TableRow key={contrat2.id}>
                  <TableCell>{contrat2.Immatricule}</TableCell>
                  <TableCell>
                    {contrat2.name} {contrat2.firstName}
                  </TableCell>
                  <TableCell>{contrat2.ciscolaire}</TableCell>
                  <TableCell>{contrat2.diplomer}</TableCell>
                  <TableCell>{contrat2.date_services}</TableCell>
                  <TableCell>{contrat2.date_effet}</TableCell>
                  <TableCell>{contrat2.duration}</TableCell>
                  <TableCell className="d-flex justify-content-between">
                    <h5>
                      <Tooltip title="consulter" placement="bottom" arrow>
                        <Link to={`/detailcontrat2/${contrat2._id}`}>
                          <RemoveRedEye />
                        </Link>
                      </Tooltip>
                    </h5>
                    <h5>
                      <Tooltip title="modifier" placement="bottom" arrow>
                        <Link to={`/editContrat2/${contrat2._id}`}>
                          <Edit />
                        </Link>
                      </Tooltip>
                    </h5>

                    <h5 onClick={() => OnDelete(contrat2._id)}>
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

export default Tableau2;
