import React from "react";
import {
  Page,
  Text,
  Document,
  Image,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import Img1 from "../image/logo.jpg";

function Donnee() {
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
    titles: {
      fontSize: "17px",
      textAlign: "center",
    },
  });

  return (
    <>
      <div>
        <Document>
          <Page style={styles.body}>
            <Image style={styles.image} src={Img1} />
            <Text style={styles.header} fixed>
              {" "}
              Oh right.
            </Text>
            <Text style={styles.text}></Text>
            <View style={styles.titles}>
              <Text> FICHE N°2</Text>
            </View>
            <View>
              <Text> DE RENOUVELEMENT OU DE REVISION </Text>
            </View>
            <View>
              <Text> Monsieur </Text>
              <Text> IM </Text>
              <Text> Dont l'engagement arrive a l'expiation le: </Text>
              <Text>Corps des: </Text>
              <Text> En service à </Text>
            </View>
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
            />
          </Page>
        </Document>
      </div>
    </>
  );
}

export default Donnee;
