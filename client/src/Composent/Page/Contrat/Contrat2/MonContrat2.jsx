import React from "react";
import SideBar from "../../../../components/navbar/SideBar";
import Tableau2 from "./Tableau2";

function MonContrat2() {
  return (
    <>
    <SideBar/>
      <div className="row mt-2">

        <div className="col-sm-9">
          <Tableau2 />
        </div>
      </div>
    </>
  );
}

export default MonContrat2;
