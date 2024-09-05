import { Button, Card, CardContent, Tooltip } from "@mui/material";
import axios from "axios";
import "./Recrutement.css";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Img1 from "../../image/users.PNG";
import SideBar from "../../../components/navbar/SideBar";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DownloadIcon from "@mui/icons-material/Download";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
function DetailRecrut() {
  const initialValue = {
    nom: "",
    prenom: "",
    cisco: "",
    CIN: "",
    diplome: "",
    situation: "",
    adresse: "",
    date_naiss: "",
  };

  const [getuserdata, setUserdata] = useState(initialValue);

  const { nom, prenom, cisco, CIN, diplome, date_naiss, situation, adresse } =
    getuserdata;

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4050/api_recrut/${id}`).then((res) => {
      setUserdata(res.data);
    });
  }, [id]);

  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
    },
    logo: {
      width: 100,
      height: 70,
      marginLeft: "auto",
      marginRight: "auto",
    },
    title1: {
      textAlign: "center",
      width: "110%",
    },
    title2: {
      fontSize: "14px",
    },
    title3: {
      fontSize: "13px",
    },
    title4: {
      fontSize: "11px",
    },
    title5: {
      fontSize: "11px",
    },
    title6: {
      fontSize: "10px",
    },

    section: {
      marginTop: 50,
    },
    section1: {
      fontSize: 10,
      marginLeft: 250,
      marginTop: 10,
    },
    section2: {
      fontSize: 10,
      marginLeft: 250,
      marginTop: 5,
    },
    section3: {
      fontSize: 10,
      marginLeft: 250,
    },
    section4: {
      fontSize: 10,
      marginLeft: 325,
    },
    date: {
      fontSize: 10,
      marginLeft: 280,
      marginTop: 7,
    },
    a: {
      fontSize: 10,
      marginLeft: 320,
      marginTop: 5,
    },
    adresse: {
      fontSize: 10,
      marginLeft: 450,
      marginTop: 5,
    },
    objet: {
      fontSize: 10,
      marginLeft: 60,
      marginTop: 5,
    },
    mr: {
      fontSize: 10,
      marginLeft: 150,
      marginTop: 9,
    },
    text: {
      fontSize: 10,
      marginLeft: 150,
      marginTop: 4,
      width: 400,
    },
    text1: {
      fontSize: 10,
      marginLeft: 130,
      marginTop: 4,
      width: 400,
    },
    text2: {
      fontSize: 10,
      marginLeft: 400,
      marginTop: 4,
    },
    nom: {
      fontSize: 10,
      marginLeft: 390,
      marginTop: 50,
    },
    piece: {
      fontSize: 10,
      marginLeft: 25,
      marginTop: 6,
    },
    entete3: {
      padding: 5,
      display: "flex",
      flexDirection: "row",
      marginRight: 5,
    },
    fiche: {
      fontSize: 10,
      marginLeft: 30,
      marginTop: 3,
    },
    dater: {
      fontSize: 10,
      marginLeft: 60,
      marginTop: 10,
    },
  });
  const demande = (
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          <View style={styles.date}>
            <Text>{getuserdata.cisco} le</Text>
          </View>
          <View style={styles.section1}>
            <Text> Nom : {getuserdata.nom} </Text>
            <Text> Prenom: {getuserdata.prenom} </Text>

            <Text>Né(e) le : {getuserdata.date_naiss} à Fianarantsoa </Text>
            <Text>CIN :{getuserdata.CIN} </Text>
            <Text>Situation Familiale :{getuserdata.situation} </Text>
            <Text>Adresse:{getuserdata.adresse} </Text>
          </View>
        </View>

        <View style={styles.a}>
          <Text> à </Text>
        </View>

        <View style={styles.section2}>
          <Text>Madame LE MINISTRE DE L’EDUCATION NATIONALE </Text>
        </View>

        <View style={styles.adresse}>
          <Text> ANTANANARIVO </Text>
        </View>

        <View style={styles.section2}>
          <Text> S/c de Monsieur LE DIRECTEUR REGIONAL DE </Text>
        </View>
        <View style={styles.section3}>
          <Text> L’EDUCATION NATIONALE</Text>
        </View>

        <View style={styles.adresse}>
          <Text> HAUTE MATSIATRA </Text>
        </View>

        <View style={styles.objet}>
          <Text> Objet : DEMANDE DE RECRUTEMENT </Text>
        </View>
        <View style={styles.objet}>
          <Text>« Personnel Administratif »</Text>
        </View>

        <View style={styles.mr}>
          <Text> Madame, Le MINISTRE</Text>
        </View>
        <View style={styles.text}>
          <Text>
            {" "}
            J’ai l’honneur de solliciter votre haute bienveillance de bien
            vouloir me recruter
          </Text>
        </View>
        <View style={styles.text1}>
          <Text>
            {" "}
            pour être Personnel Administratif au bureau de la DREN HAUTE
            MATSIATRA{" "}
          </Text>
        </View>
        <View style={styles.text}>
          <Text>
            Dans l’attente d’une suite favorable de votre part, veuillez agréer
            Madame
          </Text>
        </View>
        <View style={styles.text1}>
          <Text>
            {" "}
            LE MINISTRE L’expression de ma très haute considération.{" "}
          </Text>
        </View>

        <View style={styles.text2}>
          <Text> L'interessé </Text>
        </View>

        <View style={styles.nom}>
          <Text>
            {" "}
            {getuserdata.nom} {getuserdata.prenom}{" "}
          </Text>
        </View>

        <View style={styles.piece}>
          <Text> Piece jointe: </Text>
        </View>

        <View style={styles.entete3}>
          <View style={styles.fiche}>
            <Text>- Copie d’Acte de Naissance................01 </Text>
            <Text> - Photocopie du diplôme.......................01 </Text>
            <Text> - Contrat de travail pré signés...............01</Text>
            <Text> - Photocopie CIN..................................01 </Text>
            <Text>- Certificat de résidence.......................01 </Text>
            <Text> - Visite médicale 57/ 58........................01 </Text>
            <Text>
              {" "}
              - Bulletin N°3.......................................01{" "}
            </Text>
          </View>
          <View style={styles.dater}>
            <Text> {getuserdata.cisco},le</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
  return (
    <>
      <SideBar />
      <div className="container mt-3">
        <div>
          <PDFDownloadLink
            document={demande}
            fileName={"DEMANDE DE RECRUTEMENT " + new Date().getTime() + ".pdf"}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <button> Loading...</button>
              ) : (
                <Tooltip
                  title="DEMANDE DE RECRUTEMENT"
                  placement="bottom"
                  arrow
                >
                  <button>
                    {" "}
                    <DownloadIcon /> Demande
                  </button>
                </Tooltip>
              )
            }
          </PDFDownloadLink>
        </div>

        <Card sx={{ maxWidth: 700 }}>
          <CardContent>
            <div className="row">
              <div className="left_view col-lg-5 col-md-6 col-12">
                <img src={Img1} style={{ width: 80 }} alt="" />
                <h5 className="mt-3">
                  Nom: <span>{nom}</span>
                </h5>
                <h5 className="mt-3">
                  Prenom: <span>{prenom}</span>
                </h5>
                <p className="mt-3">
                  <LocationOnIcon />
                  Adresse: <span>{adresse}</span>
                </p>
                <p className="mt-3">
                  <MailOutlineIcon />
                  CISCO <span>{cisco}</span>
                </p>
                <p className="mt-3">
                  <WorkIcon /> Diplome <span>{diplome}</span>
                </p>
              </div>
              <div className="right_view  col-lg-6 col-md-6 col-12">
                <p className="mt-5">
                  <PhoneAndroidIcon />
                  Date de naussance: <span>{date_naiss}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Situation Familiale: <span>{situation}</span>
                </p>

                <p className="mt-3">
                  <LocationOnIcon />
                  Carte d'identité Nationale: <span>{CIN}</span>
                </p>
                <p className="mt-3">
                  Description: <span>Recrutement de personnel</span>
                </p>
              </div>
            </div>
            <Button
              sx={{ textTransform: "none" }}
              LinkComponent={NavLink}
              to="/monrecrutement"
              variant="contained"
              color="error"
              startIcon={<ArrowBackIosNewIcon />}
            >
              Retour
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default DetailRecrut;
