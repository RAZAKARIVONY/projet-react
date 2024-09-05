import React from "react";
import SideBar from "../../../components/navbar/SideBar";
import "./Home.css";
import dren from "../../image/dren.png";
function Home() {
  return (
    <>
      <SideBar />
      <div className="accueil">
        <h4>
          Bienvenue sur l'appication de le gestion de personnel contractuel
        </h4>
        <h4> DREN HAUTE MATSIATRA </h4>
      </div>
      <img className="logo" src={dren} style={{ width: 500 }} alt="dren" />
    </>
  );
}

export default Home;
