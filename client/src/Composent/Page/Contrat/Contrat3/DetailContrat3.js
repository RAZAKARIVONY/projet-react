import { Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

// import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ManIcon from "@mui/icons-material/Man";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import EventIcon from "@mui/icons-material/Event";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import axios from "axios";
import SideBar from "../../../../components/navbar/SideBar";
import { PDFDownloadLink } from "@react-pdf/renderer";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../../image/logo.jpg";
import min from "../../../image/min.PNG";

function DetailContrat3() {
  const initialValue = {
    IM: "",
    nom: "",
    prenom: "",
    cors: "",
    grade: "",
    cin: "",
    tel: "",
    situation: "",
    cisco: "",
    diplome: "",
    service: "",
    date_service: "",
    date_fait: "",
    duree: "",
    indice: "",
  };
  const [getuserdata, setUserdata] = useState(initialValue);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4050/api_contrat3/${id}`).then((res) => {
      setUserdata(res.data);
    });
  }, [id]);
  // Create style
  const style = StyleSheet.create({
    page: {
      flexDirection: "row",
      marginTop: 20,
    },
    title1: {
      textAlign: "center",
      width: "110%",
    },
    logo: {
      width: 120,
      height: 70,
      marginLeft: "auto",
      marginRight: "auto",
    },
    tete: {
      marginLeft: 50,
      marginTop: 20,
    },
    min: {
      width: 50,
      height: 50,
      marginLeft: 50,
    },
    tete1: {
      fontSize: "10px",
      marginLeft: 40,
    },
    tete2: {
      fontSize: "10px",
      marginLeft: 40,
      marginTop: 5,
    },
    line: {
      fontSize: "10px",
      marginLeft: 80,
      marginTop: 5,
    },
    line1: {
      fontSize: "10px",
      marginLeft: 200,
    },
    theme: {
      fontSize: "12px",
      marginLeft: 120,
      marginTop: 50,
    },
    txt: {
      fontSize: "10px",
      marginLeft: 100,
      marginTop: 20,
    },
    txt1: {
      fontSize: "10px",
      marginLeft: 70,
      marginTop: 5,
      width: 450,
    },
    txt2: {
      fontSize: "10px",
      marginLeft: 340,
      marginTop: 10,
    },
  });

  const MyDoc = (
    <Document>
      <Page size="A4">
        <View style={style.page}>
          <View style={style.title1}>
            <Image style={style.logo} src={min} />
          </View>
        </View>
        <View style={style.tete}>
          <Image style={style.min} src={logo} />
        </View>
        <View style={style.tete1}>
          <Text>MINISTERE DE L'EDUCATION NATIONALE</Text>
        </View>
        <View style={style.line}>
          <Text>-----------------------------------</Text>
        </View>
        <View style={style.tete2}>
          <Text>DIRECTION REGIONALE DE L'EDUCATION</Text>
        </View>
        <View style={style.tete1}>
          <Text> NATIONALE DELA HAUTE MATSIATRA</Text>
        </View>
        <View style={style.line}>
          <Text>-----------------------------------</Text>
        </View>
        <View style={style.tete2}>
          <Text>CIRCONSCRIPTION SCOLAIRE</Text>
        </View>
        <View style={style.tete1}>
          <Text> de </Text>
        </View>
        <View style={style.theme}>
          <Text> ATTESTATION DE NON INTERRUPTION DE SERVICE </Text>
        </View>
        <View style={style.line1}>
          <Text>-----------------------------------</Text>
        </View>
        <View>
          <View style={style.txt}>
            <Text> Je soussigné, Chef de Circoncription Scolaire de ,</Text>
          </View>
          <View style={style.txt1}>
            <Text>
              {" "}
              atteste que le nommé : {getuserdata.nom} {getuserdata.prenom}{" "}
            </Text>
          </View>
          <View style={style.txt1}>
            <Text>IM : {getuserdata.IM} </Text>
          </View>
          <View style={style.txt1}>
            <Text>
              {" "}
              Corps et Grade: {getuserdata.cors} {getuserdata.grade}{" "}
            </Text>
          </View>
          <View style={style.txt1}>
            <Text> Budjet : GENERAL Chapitre: 00 810 110 </Text>
          </View>
          <View style={style.txt1}>
            <Text>
              {" "}
              En service à: {getuserdata.service} CISCO {getuserdata.cisco}
            </Text>
          </View>
          <View style={style.txt1}>
            <Text>
              {" "}
              Continue à servir le Ministere de l'Education Nationale, depuis le
              , date de son entrée dans l'administration, jusqu'a ce jour
            </Text>
          </View>
          <View style={style.txt}>
            <Text>
              En foi de quoi, la presente Attestation lui est delivrée pour
              servir et valoir ce que de droit{" "}
            </Text>
          </View>
        </View>
        <View style={style.txt2}>
          <Text> {getuserdata.cisco} le </Text>
        </View>
      </Page>
    </Document>
  );

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
            <Text>
              {" "}
              {getuserdata.nom} {getuserdata.prenom}{" "}
            </Text>
            <Text>IM: {getuserdata.IM}</Text>
            <Text>
              {getuserdata.cors} {getuserdata.grade}
            </Text>
            <Text>Indice: {getuserdata.indice} </Text>
            <Text>
              Né(e) le : {getuserdata.date_naiss} à {getuserdata.lieu}{" "}
            </Text>
            <Text>CIN :{getuserdata.cin} </Text>
            <Text>Situation Familiale :{getuserdata.situation} </Text>
            <Text>Diplôme:{getuserdata.diplome} </Text>
            <Text>Service :{getuserdata.service}</Text>
            <Text>CISCO: {getuserdata.cisco} </Text>
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
            {getuserdata.nom} {getuserdata.prenom}{" "}
          </Text>
        </View>

        <View style={styles.piece}>
          <Text> Piece jointe: </Text>
        </View>

        <View style={styles.entete3}>
          <View style={styles.fiche}>
            <Text>
              {" "}
              Fiche N°2
              .......................................................03{" "}
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
          <View style={styles.dater}>
            <Text> {getuserdata.cisco},le</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
  const styler = StyleSheet.create({
    entete: {
      padding: 5,
      display: "flex",
      flexDirection: "row",
      marginTop: 30,
      marginLeft: 30,
    },
    entete1: {
      width: "30%",
      fontSize: 11,
      marginLeft: 60,
    },
    entete2: {
      width: "40%",
      fontSize: 10,
      marginLeft: 100,
    },
    entete3: {
      padding: 5,
      display: "flex",
      flexDirection: "row",
      marginRight: 5,
    },
    demande: {
      fontSize: 10,
      marginLeft: 45,
      marginTop: 60,
    },
    demande1: {
      fontSize: 10,
      marginLeft: 45,
      marginTop: 6,
      width: 500,
    },
    demande2: {
      fontSize: 10,
      marginLeft: 45,
      marginTop: 30,
    },
    titre: {
      fontSize: 11,
      textAlign: "center",
      marginTop: 10,
    },

    date: {
      fontSize: 10,
      marginLeft: 300,
      marginTop: 10,
    },
  });

  const note = (
    <Document>
      <Page size="A4">
        <View style={styler.entete}>
          <Text style={styler.entete1}>MINISTERE {getuserdata.cisco} </Text>
          <Text style={styler.entete2}>NOTE DE PRESENTATION </Text>
        </View>
        <View>
          <View style={styler.demande}>
            <Text>Demande de renouvelement d'Avenant</Text>
          </View>
          <View style={styler.demande1}>
            <Text>Etablit par LE CHEF DE LA CIRCONSCRIPTION SCOLAIRE</Text>
          </View>
        </View>
        <View style={styler.entete3}>
          <View style={styler.demande2}>
            <Text>
              Nom et Prenom: {getuserdata.nom} {getuserdata.prenom}
            </Text>
          </View>
          <View style={styler.demande2}>
            <Text>IM:{getuserdata.IM}</Text>
          </View>
        </View>

        <View style={styler.demande1}>
          <Text>Nature de contrat en cour: EFA durée:</Text>
        </View>
        <View style={styler.demande1}>
          <Text>A compter de : {getuserdata.date_fait}</Text>
        </View>
        <View style={styler.demande1}>
          <Text>
            Rénumeration nette ou Rénumération forfaitaire des échéant
          </Text>
        </View>
        <View style={styler.demande1}>
          <Text>
            Indemnités, accessoires autre que les indemnités pour charge de
            famille et les indemnités de deplacement (les cas échéant).
          </Text>
        </View>
        <View style={styler.demande1}>
          <Text>BUDJET SUPPORTANT LA RENUMERATION: GENERAL</Text>
        </View>
        <View style={styler.demande1}>
          <Text>CHAPITRE: 00 81 5 302 30201</Text>
        </View>
        <View style={styler.demande1}>
          <Text>
            Modification ou complément à apporter aux renseignements donnés pour
            le contractuel dans le paragraphe 1° de la note de présentation à
            l'occasion de son engagement
          </Text>
        </View>
        <View style={styler.titre}>
          <Text>AVENANT PROPOSE</Text>
        </View>
        <View style={styler.entete3}>
          <View style={styler.demande1}>
            <Text>A- Sans changement de rénumération : durée</Text>
          </View>
          <View style={styler.demande1}>
            <Text>A comptée de: {getuserdata.date_service}</Text>
          </View>
        </View>
        <View style={styler.entete3}>
          <View style={styler.demande1}>
            <Text>B- Avec changement de rénumération : durée</Text>
          </View>
          <View style={styler.demande1}>
            <Text>A comptée de: {getuserdata.date_fait}</Text>
          </View>
        </View>
        <View style={styler.demande1}>
          <Text>
            APPRECIATION MOTIVEE JUSTIFIANT LA DEMANDE DE RENOUVELEMENT DE
            CONTRAT LE CAS ECHEANT DE L'AUGMENTATION DE RENUMERATION
          </Text>
        </View>
        <View style={styler.titre}>
          <Text>AVIS FAVORABLE</Text>
        </View>
        <View style={styler.demande1}>
          <Text>Au renouvelement de contrat de :</Text>
        </View>
        <View style={styler.entete3}>
          <View style={styler.demande2}>
            <Text>
              Nom et Prenom: {getuserdata.nom} {getuserdata.prenom}
            </Text>
          </View>
          <View style={styler.demande2}>
            <Text>IM: {getuserdata.IM}</Text>
          </View>
        </View>
        <View style={styler.demande1}>
          <Text>
            En service à: {getuserdata.service} CISCO {getuserdata.cisco}
          </Text>
        </View>
        <View style={styler.demande1}>
          <Text>A compter de : {getuserdata.date_fait}</Text>
        </View>
        <View style={styler.date}>
          <Text>,le :</Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <>
      <SideBar />

      <div className="container mt-3">
        <h6>Renouvelement du contrat</h6>
        <div>
          <PDFDownloadLink
            document={demande}
            fileName={"Demande Renouvelement" + new Date().getTime() + ".pdf"}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <button> Report loading...</button>
              ) : (
                <button>Renouvelement</button>
              )
            }
          </PDFDownloadLink>
          <PDFDownloadLink
            document={MyDoc}
            fileName={"Attestation" + new Date().getTime() + ".pdf"}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <button> Report loading...</button>
              ) : (
                <button> Attestation de non Interruption</button>
              )
            }
          </PDFDownloadLink>
          <PDFDownloadLink
            document={note}
            fileName={"Note_Presentation" + new Date().getTime() + ".pdf"}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <button> Report loading...</button>
              ) : (
                <button> Note de Presentation</button>
              )
            }
          </PDFDownloadLink>
        </div>

        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <div className="row">
              <div className="left_view col-lg-6 col-md-6 col-12">
                <img src={logo} style={{ width: 60 }} alt="logo" />
                <h5 className="mt-3">
                  Description: <span>Information de personnel</span>
                </h5>

                <h6 className="mt-3">
                  N° Matricule: <span>{getuserdata.IM}</span>
                </h6>
                <h6 className="mt-3">
                  Nom: <span>{getuserdata.nom}</span>
                </h6>
                <h6 className="mt-3">
                  Prenom: <span>{getuserdata.prenom}</span>
                </h6>
                <p className="mt-3">
                  <HomeWorkIcon />
                  CISCO : <span>{getuserdata.cisco}</span>
                </p>
                <p className="mt-3">
                  <HomeWorkIcon />
                  CIN : <span>{getuserdata.cin}</span>
                </p>
                <p className="mt-3">
                  <ManIcon />
                  Corps : <span>{getuserdata.cors}</span>
                </p>
                <p className="mt-3">
                  <ContentPasteIcon />
                  Assimilation :<span>{getuserdata.grade}</span>
                </p>
                <p className="mt-3">
                  <WorkIcon />
                  Diplome : <span>{getuserdata.diplome}</span>
                </p>
              </div>
              <div className="right_view  col-lg-6 col-md-6 col-12">
                <p className="mt-5">
                  <PhoneAndroidIcon />
                  Date de prise de servise:
                  <span>{getuserdata.date_service}</span>
                </p>
                <p className="mt-3">
                  <PendingActionsIcon />
                  Date d'effet: <span>{getuserdata.date_fait}</span>
                </p>
                <p className="mt-3">
                  <EventIcon />
                  Duree: <span>{getuserdata.duree}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Num Tel: <span>{getuserdata.tel}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Situation Familiale: <span>{getuserdata.situation}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Service: <span>{getuserdata.service}</span>
                </p>
                <p className="mt-3">
                  <TipsAndUpdatesIcon />
                  Indice: <span>{getuserdata.indice}</span>
                </p>
                <p className="mt-3">
                  Status: <span className="badge bg-success">integer</span>
                </p>
              </div>
            </div>
            <Button
              sx={{ textTransform: "none" }}
              LinkComponent={NavLink}
              to="/moncontrat3"
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

export default DetailContrat3;
