import React, { useEffect, useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import axios from "axios";

function MyPresentation() {
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
  const [getuserdata, setUserdata] = useState(initialValue);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4050/api_contrat3/${id}`).then((res) => {
      setUserdata(res.data);
    });
  }, [id]);
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

  return (
    <>
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
              Modification ou complément à apporter aux renseignements donnés
              pour le contractuel dans le paragraphe 1° de la note de
              présentation à l'occasion de son engagement
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
              <Text>A comptée de: {initialValue.date_service}</Text>
            </View>
          </View>
          <View style={styler.entete3}>
            <View style={styler.demande1}>
              <Text>B- Avec changement de rénumération : durée</Text>
            </View>
            <View style={styler.demande1}>
              <Text>A comptée de: {initialValue.date_fait}</Text>
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
              <Text>IM: {initialValue.IM}</Text>
            </View>
          </View>
          <View style={styler.demande1}>
            <Text>
              En service à: {initialValue.service} CISCO {initialValue.cisco}
            </Text>
          </View>
          <View style={styler.demande1}>
            <Text>A compter de : {initialValue.date_fait}</Text>
          </View>
          <View style={styler.date}>
            <Text>,le :</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default MyPresentation;
