import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../image/logo.jpg";
import min from "../image/min.PNG";

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
    marginLeft: 400,
    marginTop: 10,
  },
});

// Create Document Component

function MyDocument() {
  return (
    <>
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
              <Text> atteste que le nommé : </Text>
            </View>
            <View style={style.txt1}>
              <Text>IM : </Text>
            </View>
            <View style={style.txt1}>
              <Text> Corps et Grade: </Text>
            </View>
            <View style={style.txt1}>
              <Text> Budjet : GENERAL Chapitre: 00 810 110 </Text>
            </View>
            <View style={style.txt1}>
              <Text> En service à: CISCO </Text>
            </View>
            <View style={style.txt1}>
              <Text>
                {" "}
                Continue à servir le Ministere de l'Education Nationale, depuis
                le , date de son entrée dans l'administration, jusqu'a ce jour
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
            <Text> le </Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default MyDocument;
