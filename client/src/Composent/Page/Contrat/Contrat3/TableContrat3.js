import Edit from "@mui/icons-material/Edit";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
// import DownloadIcon from "@mui/icons-material/Download";
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
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import DownloadIcon from "@mui/icons-material/Download";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../../image/min.PNG";
import "./TroisiemeContrat.css";

function TableContrat3() {
  const navigate = useNavigate();
  const [tables, setTables] = useState([]);
  const [voir, setVoir] = useState([]);
  const [record, setRecord] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [initialValue, setPdfdata] = useState({
    IM: "",
    nom: "",
    prenom: "",
    cors: "",
    grade: "",
    cisco: "",
    diplome: "",
    situation: "",
    service: "",
    date_service: "",
    date_fait: "",
    duree: "",
    indice: "",

    assimilation: "",
    index: "",

    assim: "",
    date_j: "",
    indices: "",
  });
  const { id } = useParams();

  //voir tout le liste
  const getContrat1 = async () => {
    let response = await axios.get("http://localhost:4050/api_contrat1");
    setTables(response.data);
  };
  useEffect(() => {
    getContrat1();
  });

  //voir tout le liste
  const AllUser = async () => {
    let response = await axios.get("http://localhost:4050/api_moncontrat2");
    setVoir(response.data);
  };
  useEffect(() => {
    AllUser();
  });

  // getId
  useEffect(() => {
    axios.get(`http://localhost:4050/api_contrat3/${id}`).then((res) => {
      setPdfdata(res.data);
    });
  }, [id]);

  //voir tout le liste
  const getAllUser = async () => {
    let response = await axios.get("http://localhost:4050/api_contrat3");
    setRecord(response.data);
  };
  useEffect(() => {
    getAllUser();
  }, []);

  // Dlelete
  const OnDelete = (id_) => {
    if (window.confirm("Voulez vous vraiment supprimer")) {
      axios.delete(`http://localhost:4050/api_contrat3/${id_}`).then((res) => {
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
    navigate("/addMonContrat3");
  };

  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      marginTop: 20,
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
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    section1: {
      fontSize: 10,
      marginLeft: "30px",
      marginTop: 5,
    },
    section2: {
      marginLeft: "30px",
      paddingHorizontal: 20,
      display: "flex",
      marginBottom: 10,
    },
    line1: {
      padding: 5,
      display: "flex",
      flexDirection: "row",
    },
    tabA: {
      width: "30%",
      fontSize: 11,
    },
    tabB: {
      width: "40%",
      fontSize: 10,
    },
    tabC: {
      width: "25%",
      fontSize: 10,
    },
    tabD: {
      width: "25%",
      fontSize: 10,
      marginLeft: 10,
    },
    tabE: {
      width: "25%",
      fontSize: 10,
      marginLeft: 60,
    },
    sectn: {
      marginTop: 4,
      fontSize: 10,
    },
  });

  const pdf = (
    <Document>
      <Page size="A4">
        <View style={styles.page}>
          <View style={styles.title1}>
            <Image style={styles.logo} src={logo} />
            <Text style={styles.title2}>ANNEXE II FICHE N°2</Text>
            <Text style={styles.title3}>DE RENOUVELEMENT OU DE REVISION</Text>
          </View>
        </View>
        <View style={styles.section1}>
          <View style={styles.section1}>
            <Text>
              Monsieur: {initialValue.nom} {initialValue.prenom}
            </Text>
          </View>
          <View style={styles.section1}>
            <Text>IM: {initialValue.IM}</Text>
          </View>
          <View style={styles.section1}>
            <Text>
              Dont l'engagement arrive a l'expiation le:{" "}
              {initialValue.date_fait}{" "}
            </Text>
          </View>
          <View style={styles.section1}>
            <Text>
              Corps des: {initialValue.cors} {initialValue.grade}
            </Text>
          </View>
          <View style={styles.section1}>
            <Text>Budje General, Chapitre: 00 81 5 301 30101 </Text>
          </View>
          <View style={styles.section1}>
            <Text>Diplôme:{initialValue.diplome} </Text>
          </View>
          <View style={styles.section1}>
            <Text>Situation de famille: {initialValue.situation} </Text>
          </View>
          <View style={styles.section1}>
            <Text>
              Service anterieur: {initialValue.service} CISCO{" "}
              {initialValue.cisco}
            </Text>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={styles.line1}>
            <Text style={styles.tabA}>1ere CONTRAT</Text>
            <Text style={styles.tabB}>EFA Durée: 24 mois</Text>
            <Text style={styles.tabC}>Date d'effet:{initialValue.date_j}</Text>
          </View>
          <View style={styles.line1}>
            <Text style={styles.tabD}>Assimilation:{initialValue.assim}</Text>
            <Text style={styles.tabE}>Indice:{initialValue.indices}</Text>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={styles.line1}>
            <Text style={styles.tabA}>2eme CONTRAT</Text>
            <Text style={styles.tabB}>EFA Durée: 24 mois</Text>
            <Text style={styles.tabC}>
              Date d'effet: {initialValue.date_service}
            </Text>
          </View>
          <View style={styles.line1}>
            <Text style={styles.tabD}>
              Assimilation: {initialValue.assimilation}
            </Text>
            <Text style={styles.tabE}>Indice:{initialValue.index}</Text>
          </View>
        </View>

        <View style={styles.page}>
          <View style={styles.title1}>
            <Text style={styles.title3}>CONTRAT PROPOSE</Text>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={styles.line1}>
            <Text style={styles.tabA}>3eme CONTRAT</Text>
            <Text style={styles.tabB}>EFA Durée: {initialValue.duree}</Text>
            <Text style={styles.tabC}>
              Date d'effet: {initialValue.date_fait}
            </Text>
          </View>
          <View style={styles.line1}>
            <Text style={styles.tabD}>
              Assimilation: {initialValue.cors} {initialValue.grade}
            </Text>
            <Text style={styles.tabE}>Indice:{initialValue.indice}</Text>
          </View>
        </View>
        <View style={styles.page}>
          <View style={styles.title1}>
            <Text style={styles.title4}>AVIS DES AUTORITE HIERARCHIQUE</Text>
            <Text style={styles.title5}>AVIS DE CHEF DE SERVICE</Text>
            <Text style={styles.title6}>
              "............................................"
            </Text>
            <Text style={styles.title6}>Fianarantsoa le</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
  return (
    <>
      <div>
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
                  table="table-to-excel"
                  filename="trosiemeContrat"
                  sheet="tablexls"
                  buttonText="Generer en Excel"
                />
              </div>
            </div>
          </div>

          <div>
            <Table size="small" id="table-to-excel">
              <TableHead>
                <TableRow>
                  <TableCell>IM</TableCell>
                  <TableCell>Nom & Prenom</TableCell>
                  <TableCell>CISCO</TableCell>
                  <TableCell>Corps</TableCell>
                  <TableCell>Grade</TableCell>
                  <TableCell>Diplome</TableCell>
                  <TableCell>Date service</TableCell>
                  <TableCell>Date d'effet</TableCell>
                  <TableCell>Duree</TableCell>
                  <TableCell>Service</TableCell>
                  <TableCell>Indice</TableCell>

                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {record
                  .filter((contrat3) => {
                    return Object.values(contrat3)
                      .join("")
                      .toLowerCase()
                      .includes(searchInput.toLowerCase());
                  })
                  .map((contrat3) => (
                    <TableRow key={contrat3.id}>
                      <TableCell>{(initialValue.IM = contrat3.IM)}</TableCell>
                      <TableCell>
                        {(initialValue.nom = contrat3.nom)}{" "}
                        {(initialValue.prenom = contrat3.prenom)}
                      </TableCell>
                      <TableCell>
                        {(initialValue.cisco = contrat3.cisco)}
                      </TableCell>
                      <TableCell>
                        {(initialValue.cors = contrat3.cors)}
                      </TableCell>
                      <TableCell>
                        {(initialValue.grade = contrat3.grade)}
                      </TableCell>

                      <TableCell>
                        {(initialValue.diplome = contrat3.diplome)}
                      </TableCell>
                      <TableCell>
                        {(initialValue.date_service = contrat3.date_service)}
                      </TableCell>
                      <TableCell>
                        {(initialValue.date_fait = contrat3.date_fait)}
                      </TableCell>
                      <TableCell>
                        {(initialValue.duree = contrat3.duree)}
                      </TableCell>
                      <TableCell>
                        {(initialValue.service = contrat3.service)}
                      </TableCell>
                      <TableCell>
                        {(initialValue.indice = contrat3.indice)}
                      </TableCell>
                      <TableCell className="d-flex justify-content-between">
                        <h5>
                          <Tooltip title="consulter" placement="bottom" arrow>
                            <Link to={`/detailcontrat3/${contrat3._id}`}>
                              <RemoveRedEye />
                            </Link>
                          </Tooltip>
                        </h5>
                        <h5>
                          <Tooltip title="modifier" placement="bottom" arrow>
                            <Link to={`/editContrat3/${contrat3._id}`}>
                              <Edit />
                            </Link>
                          </Tooltip>
                        </h5>
                        <h5 onClick={() => OnDelete(contrat3._id)}>
                          <Tooltip title="supprimer" placement="bottom" arrow>
                            <GoTrashcan />
                          </Tooltip>
                        </h5>
                        <h5>
                          <PDFDownloadLink
                            document={pdf}
                            fileName={
                              "FICHE N°2" + new Date().getTime() + ".pdf"
                            }
                          >
                            {({ blob, url, loading, error }) =>
                              loading ? (
                                <button> Report loading...</button>
                              ) : (
                                <DownloadIcon />
                              )
                            }
                          </PDFDownloadLink>
                        </h5>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
          <div className="tableau2">
            <Table size="small" id="table-to-xls">
              <TableHead>
                <TableRow>
                  <TableCell>IM</TableCell>
                  <TableCell>Nom</TableCell>
                  <TableCell>Prenom</TableCell>
                  <TableCell>Grade</TableCell>
                  <TableCell>Date service</TableCell>
                  <TableCell>Date de fait</TableCell>
                  <TableCell>Duree</TableCell>
                  <TableCell>Indice</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {voir.map((contrat2) => (
                  <TableRow key={contrat2.id}>
                    <TableCell>{contrat2.Immatricule}</TableCell>
                    <TableCell>{contrat2.name}</TableCell>
                    <TableCell>{contrat2.firstName}</TableCell>
                    <TableCell>
                      {(initialValue.assimilation = contrat2.assimilation)}
                    </TableCell>
                    <TableCell>{contrat2.date_services}</TableCell>
                    <TableCell>{contrat2.date_effet}</TableCell>
                    <TableCell>{contrat2.duration}</TableCell>
                    <TableCell>
                      {(initialValue.index = contrat2.index)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="tableau1">
            <Table size="small" id="table-to-xls">
              <TableHead>
                <TableRow>
                  <TableCell>Nom et Prenom</TableCell>
                  <TableCell>CIN</TableCell>
                  <TableCell>CISCO</TableCell>
                  <TableCell>Grade</TableCell>
                  <TableCell>Date de service</TableCell>
                  <TableCell>Date de fait</TableCell>
                  <TableCell>Duree</TableCell>

                  <TableCell>Indice</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tables.map((contrat1) => (
                  <TableRow key={contrat1.id}>
                    <TableCell>
                      {contrat1.nom} {contrat1.prenom}
                    </TableCell>
                    <TableCell>{contrat1.CIN}</TableCell>
                    <TableCell>{contrat1.cisco}</TableCell>
                    <TableCell>
                      {(initialValue.assim = contrat1.grade)}
                    </TableCell>
                    <TableCell>
                      {(initialValue.date_j = contrat1.date_service)}
                    </TableCell>
                    <TableCell>{contrat1.date_fait}</TableCell>
                    <TableCell>{contrat1.duree}</TableCell>
                    <TableCell>
                      {(initialValue.indices = contrat1.indice)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableContrat3;
