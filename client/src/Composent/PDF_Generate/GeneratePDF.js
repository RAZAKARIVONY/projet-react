import React, { useRef } from "react";
import jsPDF from "jspdf";
import ArchiveIcon from "@mui/icons-material/Archive";

function GeneratePDF() {
  const styles = {
    // display: "none",
    fontSize: "14px",
    fontFamily: "Times",
  };

  const contrat1 = {
    flexDirection: "row",
    display: "flex",
    paddingHorizontal: 20,
    marginBottom: 20,
  };

  const pdfRef = useRef(null);

  const handleDownload = () => {
    const content = pdfRef.current;
    const doc = new jsPDF("p", "mm", "a4");
    doc.fromHTML(content);
    doc.save("pdf");
  };

  return (
    <div>
      <header ref={pdfRef} style={styles}>
        <div className="container">
          <div className="text-center">
            <h2> FICHE N°2 </h2>
            <h3>DE RENOUVELEMENT OU DE REVISION</h3>
          </div>
          <div>
            <div className="col">Monsieur: </div>
            <div className="col">IM:</div>
            <div className="col">
              Dont l'engagement arrive a l'expiation le:
            </div>
            <div className="col">Corps des:</div>
            <div className="col">En service à</div>
            <div className="col">Budjet:</div>
            <div className="col">Née le:</div>
            <div className="col">Situation de famille:</div>
            <div className="col">Diplôme:</div>
            <div className="col">Service anterieur:</div>
          </div>
          <div>
            <div className="row" style={contrat1}>
              <div className="col">1ere CONTRAT</div>
              <div className="col">EFA Durée: 24 mois</div>
              <div className="col">Date d'effet</div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">Assimilation:</div>
                <div className="col-6">Indice:</div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col">2eme CONTRAT</div>
              <div className="col">EFA Durée: 24 mois</div>
              <div className="col">Date d'effet</div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">Assimilation:</div>
                <div className="col-6">Indice:</div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col">3eme CONTRAT</div>
              <div className="col">EFA Durée: Indeterminer</div>
              <div className="col">Date d'effet</div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">Assimilation:</div>
                <div className="col-6">Indice:</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4>DEMANDE D'AVENANT</h4>
          </div>
          <div>
            <div className="row">
              <div className="col">AVENANT</div>
              <div className="col">EFA Durée: </div>
              <div className="col">Date d'effet</div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">Assimilation:</div>
                <div className="col-6">Indice:</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <button onClick={handleDownload}>
          <ArchiveIcon />
          PDF
        </button>
      </footer>
    </div>
  );
}

export default GeneratePDF;
