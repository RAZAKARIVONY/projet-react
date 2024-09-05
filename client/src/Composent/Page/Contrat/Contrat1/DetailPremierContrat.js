import { Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import SideBar from "../../../../components/navbar/SideBar";
import Img1 from "../../../image/logo.jpg";

function DetailPremierContrat() {
  const initialValue = {
    IM: "",
    nom: "",
    prenom: "",
    cors: "",
    grade: "",
    cisco: "",
    diplome: "",
    service: "",
    date_service: "",
    date_fait: "",
    duree: "",
    indice: "",
  };
  const [getcontrat1data, setgetcontrat1data] = useState(initialValue);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4050/api_contrat1/${id}`).then((res) => {
      setgetcontrat1data(res.data);
    });
  }, [id]);
  return (
    <>
      <SideBar />
      <div className="container mt-3">
        <h4 style={{ fontWeight: 400 }}>Detail de Renouvelement de contrat</h4>
        <Card sx={{ maxWidth: 700 }}>
          <CardContent>
            <div className="row">
              <div className="left_view col-lg-6 col-md-6 col-12">
                <img src={Img1} style={{ width: 80, height: 80 }} alt="" />
                <p className="mt-3">
                  Description: <span>Information de personnel</span>
                </p>

                <h4 className="mt-3">
                  CIN: <span>{getcontrat1data.CIN}</span>
                </h4>
                <h5 className="mt-3">
                  Nom: <span>{getcontrat1data.nom}</span>
                </h5>
                <h5 className="mt-3">
                  Prenom: <span>{getcontrat1data.prenom}</span>
                </h5>
                <p className="mt-3">
                  <MailOutlineIcon />
                  CISCO : <span>{getcontrat1data.cisco}</span>
                </p>
                <p className="mt-3">
                  <MailOutlineIcon />
                  Corps : <span>{getcontrat1data.cors}</span>
                </p>
                <p className="mt-3">
                  <MailOutlineIcon />
                  Assimilation :<span>{getcontrat1data.grade}</span>
                </p>
                <p className="mt-3">
                  <WorkIcon />
                  Diplome : <span>{getcontrat1data.diplome}</span>
                </p>
              </div>
              <div className="right_view  col-lg-6 col-md-6 col-12">
                <p className="mt-5">
                  <PhoneAndroidIcon />
                  Date de prise de servise:
                  <span>{getcontrat1data.date_service}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Date d'effet: <span>{getcontrat1data.date_fait}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Duree: <span>{getcontrat1data.duree}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Service: <span>{getcontrat1data.service}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Indice: <span>{getcontrat1data.indice}</span>
                </p>
              </div>
            </div>
            <Button
              sx={{ textTransform: "none" }}
              LinkComponent={NavLink}
              to="/premiercontrat"
              variant="contained"
              color="error"
              startIcon={<ArrowBackIosNewIcon />}
            >
              Close
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default DetailPremierContrat;
