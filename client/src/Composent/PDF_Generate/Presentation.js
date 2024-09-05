import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import MyPresentation from "./MyPresentation";

function Presentation() {
  return (
    <>
      <div>
        <PDFDownloadLink
          document={<MyPresentation />}
          fileName={"Note_Presentation"}
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
    </>
  );
}

export default Presentation;
