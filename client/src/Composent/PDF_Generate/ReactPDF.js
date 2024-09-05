import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import MyDocument from "./MyDocument";

function ReactPDF() {
  return (
    <>
      <div>
        <PDFDownloadLink document={<MyDocument />} fileName={"Attestation"}>
          {({ blob, url, loading, error }) =>
            loading ? (
              <button> Report loading...</button>
            ) : (
              <button> Attestation de non Interruption</button>
            )
          }
        </PDFDownloadLink>
      </div>
    </>
  );
}

export default ReactPDF;
