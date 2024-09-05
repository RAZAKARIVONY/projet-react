import { Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import axios from "axios";
import SideBar from "../../../../components/navbar/SideBar";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Line,
} from "@react-pdf/renderer";
import Img1 from "../../../image/logo.jpg";

function DetailContrat2() {
  const initialValue = {
    Immatricule: "",
    name: "",
    firstName: "",
    corps: "",
    assimilation: "",
    ciscolaire: "",
    diplomer: "",
    services: "",
    date_services: "",
    date_effet: "",
    duration: "",
    index: "",
  };
  const [getuserdata, setUserdata] = useState(initialValue);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4050/api_moncontrat2/${id}`).then((res) => {
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
      marginLeft: 270,
      marginTop: 9,
    },
    text: {
      fontSize: 10,
      marginLeft: 250,
      marginTop: 4,
    },
    text1: {
      fontSize: 10,
      marginLeft: 220,
      marginTop: 4,
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
    fiche: {
      fontSize: 10,
      marginLeft: 30,
      marginTop: 3,
    },
    line: {
      x1: "0",

      x2: "200",

      strokeWidth: 2,
    },
  });

  const pdf = (
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          <View style={styles.date}>
            <Text>{getuserdata.ciscolaire} le</Text>
          </View>
          <View style={styles.section1}>
            <Text>
              {" "}
              {getuserdata.name} {getuserdata.firstName}{" "}
            </Text>
            <Text>IM: {getuserdata.Immatricule}</Text>
            <Text>
              {getuserdata.corps} {getuserdata.assimilation}
            </Text>
            <Text>Indice: {getuserdata.index} </Text>
            <Text>
              Né(e) le : {getuserdata.date_naiss} à {getuserdata.lieu}{" "}
            </Text>
            <Text>CIN :{getuserdata.cin} </Text>
            <Text>Situation Familiale :{getuserdata.cin} </Text>
            <Text>Diplôme:{getuserdata.diplomer} </Text>
            <Text>Service :{getuserdata.services}</Text>
            <Text>CISCO: {getuserdata.ciscolaire} </Text>
            <Text>Tel: {getuserdata.tel} </Text>
          </View>
        </View>

        <View style={styles.a}>
          <Text> à </Text>
        </View>

        <View style={styles.section2}>
          <Text> Monsieur le PREFET </Text>
        </View>

        <View style={styles.adresse}>
          <Text> FIANARANTSOA </Text>
          <Line style={styles.line}></Line>
        </View>

        <View style={styles.section2}>
          <Text> Mr, Le DIRECTEUR REGIONALE DE L'EDUCATION</Text>
        </View>
        <View style={styles.section3}>
          <Text> NATIONALE</Text>
        </View>

        <View style={styles.adresse}>
          <Text> HAUTE MATSIATRA </Text>
        </View>

        <View style={styles.section2}>
          <Text>S/C de madame, LE CHEF DE LA CIRCONSCRIPTION </Text>
        </View>
        <View style={styles.section4}>
          <Text>SCOLAIRE </Text>
        </View>

        <View style={styles.adresse}>
          <Text> {getuserdata.ciscolaire} </Text>
        </View>

        <View style={styles.objet}>
          <Text> Objet : Demande d'Avenant</Text>
        </View>

        <View style={styles.mr}>
          <Text> Monsieur</Text>
        </View>
        <View style={styles.text}>
          <Text>
            {" "}
            J'ai l'honneur de soliciter votre haute bienveilance de bien vouloir{" "}
          </Text>
        </View>
        <View style={styles.text1}>
          <Text> accorder ma demande d'avenant </Text>
        </View>
        <View style={styles.text}>
          <Text>
            {" "}
            Veuillez agréer Monsieur le PREFET , l'expression de ma tres haute{" "}
          </Text>
        </View>
        <View style={styles.text1}>
          <Text> consideration </Text>
        </View>

        <View style={styles.text2}>
          <Text> L'interessé </Text>
        </View>

        <View style={styles.nom}>
          <Text>
            {" "}
            {getuserdata.name} {getuserdata.firstName}{" "}
          </Text>
        </View>

        <View style={styles.piece}>
          <Text> Piece jointe: </Text>
        </View>
        <View style={styles.fiche}>
          <Text>
            {" "}
            Fiche N°2 .......................................................03{" "}
          </Text>
          <Text>
            {" "}
            Note de presentation .....................................03{" "}
          </Text>
          <Text> Photocopie du 1ere,2eme,3eme contrat .......03 </Text>
          <Text>
            {" "}
            Projet d'Avenant prés signé ...........................03{" "}
          </Text>
          <Text>
            {" "}
            Photocopie Bulletin de solde .........................03{" "}
          </Text>
          <Text>
            {" "}
            Attestarion de non interuption .......................03{" "}
          </Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <>
      <SideBar />

      <div className="container mt-3">
        <h5>
          <PDFDownloadLink
            document={pdf}
            fileName={"REPORT" + new Date().getTime() + ".pdf"}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <button> Report loading...</button>
              ) : (
                <button>Demade Avenant</button>
              )
            }
          </PDFDownloadLink>
          <PDFDownloadLink
            document={pdf}
            fileName={"REPORT" + new Date().getTime() + ".pdf"}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <button> Report loading...</button>
              ) : (
                <button>Note de presentation</button>
              )
            }
          </PDFDownloadLink>
          <PDFDownloadLink
            document={pdf}
            fileName={"REPORT" + new Date().getTime() + ".pdf"}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <button> Report loading...</button>
              ) : (
                <button>Certificat de continuité</button>
              )
            }
          </PDFDownloadLink>
        </h5>
        <Card sx={{ maxWidth: 700 }}>
          <CardContent>
            <div className="row">
              <div className="left_view col-lg-6 col-md-6 col-12">
                <p className="mt-3">
                  Description: <span>Information de personnel</span>
                </p>
                <img src={Img1} style={{ width: 50 }} alt="logo" />
                <h4 className="mt-3">
                  IM: <span>{getuserdata.Immatricule}</span>
                </h4>
                <h5 className="mt-3">
                  Nom: <span>{getuserdata.name}</span>
                </h5>
                <h6 className="mt-3">
                  Prenom: <span>{getuserdata.firstName}</span>
                </h6>
                <p className="mt-3">
                  <MailOutlineIcon />
                  CISCO : <span>{getuserdata.ciscolaire}</span>
                </p>
                <p className="mt-3">
                  <MailOutlineIcon />
                  Corps : <span>{getuserdata.corps}</span>
                </p>
                <p className="mt-3">
                  <MailOutlineIcon />
                  Assimilation :<span>{getuserdata.assimilation}</span>
                </p>
                <p className="mt-3">
                  <WorkIcon />
                  Diplome : <span>{getuserdata.diplomer}</span>
                </p>
              </div>
              <div className="right_view  col-lg-6 col-md-6 col-12">
                <p className="mt-5">
                  <PhoneAndroidIcon />
                  Date de prise de servise:
                  <span>{getuserdata.date_services}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Date d'effet: <span>{getuserdata.date_effet}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Duree: <span>{getuserdata.duration}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Service: <span>{getuserdata.services}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Indice: <span>{getuserdata.index}</span>
                </p>
              </div>
            </div>
            <Button
              sx={{ textTransform: "none" }}
              LinkComponent={NavLink}
              to="/moncontrat2"
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

export default DetailContrat2;
