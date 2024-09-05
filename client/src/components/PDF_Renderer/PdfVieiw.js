import React, { useRef } from "react";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
function PdfVieiw() {
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  const colstyle = {
    width: "3%",
  };
  const tableStyle = {
    width: "1%",
  };
  const pstyle = {
    display: "flex",
    flexdirection: "column",
  };
  const section = {
    display: "flex ",
    marginbottom: "20px",
    marginLeft: "10px",
    margintop: "35px",
    border: " 1px solid #ffff66",
  };
  const update = {
    color: "red",
    textAlign: "center",
    fontsize: "20px",
    marginLeft: "50%",
  };

  const Prints = () => (
    <div>
      <h2> FICHE N°2 </h2>
      <h3>DE RENOUVELEMENT OU DE REVISION</h3>

      <p>
        <div className="col">Monsieur</div>
        <div className="col">IM:</div>
        <div className="col">Dont l'engagement arrive a l'expiation le:</div>
        <div className="col">Corps des:</div>
        <div className="col">En service à</div>
        <div className="col">Budjet:</div>
        <div className="col">Née le:</div>
        <div className="col">Situation de famille:</div>
        <div className="col">Diplôme:</div>
        <div className="col">Service anterieur:</div>
      </p>

      <p>
        <p>
          1<sup>er</sup> CONTRAT
        </p>
        <div className="col-6 col-md-4">EFA Durée</div>
        <div>Date d'effet</div>
      </p>

      <p>
        <div className="col-6">Assimilation</div>
        <div>Indice</div>
      </p>
    </div>
  );

  const print = () => {
    const string = renderToString(<Prints />);
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.fromHTML(string);
    pdf.save("Fiche");
  };

  const pdfRef = useRef(null);

  const handleDownload = () => {
    const content = pdfRef.current;
    const doc = new jsPDF();
    doc.fromHTML(content);
    doc.save("pdf");
  };

  return (
    <div>
      <header ref={pdfRef}>
        <div>
          <h3>Time & Materials Statement of Work (SOW)</h3>
          <h4>General Information</h4>
          <table
            id="tab_customers"
            className="table table-striped"
            style={tableStyle}
          >
            <colgroup>
              <col span="1" style={colstyle} />
              <col span="1" style={colstyle} />
            </colgroup>
            <thead>
              <tr className="warning">
                <th>SOW Creation Date</th>
                <th>SOW Start Date</th>
                <th>Project</th>
                <th>Last Updated</th>
                <th>SOW End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dec 13, 2017</td>
                <td>Jan 1, 2018</td>
                <td>NM Connect - NMETNMCM</td>
                <td>Dec 13, 2017</td>
                <td>Dec 31, 2018</td>
              </tr>
            </tbody>
          </table>
          <div style={pstyle}>
            <div style={section}>
              <p>Time and Materials</p>
              <p>Company and Infosys</p>
              <p> Master Agreement </p>
            </div>
          </div>
          <div className="policy-container">
            <div className="policy-table">
              <div className="headings">
                <span className="heading">Name</span>
                <span className="updatte" style={update}>
                  Last Updated
                </span>
                <span className="heading">Actions</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <button onClick={handleDownload}>Download</button>
      </footer>
      <div style={styles}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
        <button onClick={print}>Export PDF</button>
      </div>
    </div>
  );
}

export default PdfVieiw;
