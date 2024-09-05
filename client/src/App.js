import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Recrutement from "./components/Header/Recrutement";
import EditRecrut from "./components/Header/EditRecrut";
import TroisiemeContrat from "./components/renouvelement/contrat3/TroisiemeContrat";
import PremierContrat from "./components/renouvelement/contrat1/PremierContrat";
// import Reclassement from "./components/reclassement/Reclassement";
import Integration from "./components/integration/Integration";
import Recrutements from "./components/recrutement/Recrutements";

import Registre from "./components/Auth/Registre";
import { useState } from "react";
import Details from "./components/Header/Details";

import Login from "./Composent/Auth/Login/Login";
import Registrer from "./Composent/Auth/Registre/Registrer";

import Recrutementer from "./Composent/Page/Recrutement/Recutement";
import DetailRecrut from "./Composent/Page/Recrutement/DetailRecrut";
import EditRecruts from "./Composent/Page/Recrutement/EditRecrut";

import PremierContrat1 from "./Composent/Page/Contrat/Contrat1/PremierContrat";
import DetailPremierContrat from "./Composent/Page/Contrat/Contrat1/DetailPremierContrat";
import EditerPremierContrat from "./Composent/Page/Contrat/Contrat1/EditerPremierContrat";

import MonContrat2 from "./Composent/Page/Contrat/Contrat2/MonContrat2";
import DetailContrat2 from "./Composent/Page/Contrat/Contrat2/DetailContrat2";
import EditContrat2 from "./Composent/Page/Contrat/Contrat2/EditContrat2";

import TroisiemeContrats from "./Composent/Page/Contrat/Contrat3/TroisiemeContrat";
import DetailContrat3 from "./Composent/Page/Contrat/Contrat3/DetailContrat3";
import EditContrat3 from "./Composent/Page/Contrat/Contrat3/EditContrat3";

// import ReactPDF from "./Composent/PDF_Generate/ReactPDF";
import Home from "./Composent/Page/Home/Home";
import RecrutInput from "./Composent/Page/Recrutement/RecrutInput";
import AddContrat1 from "./Composent/Page/Contrat/Contrat1/AddContrat1";
import Input from "./Composent/Page/Contrat/Contrat2/Input";
import Reclassement from "./Composent/Page/Reclassement/Reclassement";
import AddContrat3 from "./Composent/Page/Contrat/Contrat3/AddContrat3";
import InputReclassement from "./Composent/Page/Reclassement/InputReclassement";
import EditReclassement from "./Composent/Page/Reclassement/EditReclassement";
//import Presentation from "./Composent/PDF_Generate/Presentation";
// import NavigateurBar from "./Composent/Headers/NavigateurBar";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="app">
      <Router>
        {/* <ReactPDF />
        <Presentation /> */}
        <Routes>
          <Route path="/registre" element={<Registre />} />
          <Route path="/recrutement" element={<Recrutement />} />
          <Route path="/contrat1" element={<PremierContrat />} />
          <Route path="/contrat3" element={<TroisiemeContrat />} />

          <Route path="/integration" element={<Integration />} />
          <Route path="/recrut" element={<Recrutements />} />

          <Route
            path="/"
            element={
              user && user._id ? (
                <Home />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          {/* <Route path="/" element={<Home />} /> */}

          <Route
            path="loginer"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="inscrire" element={<Registrer />} />
          <Route path="monrecrutement" element={<Recrutementer />} />
          <Route path="addRecrut" element={<RecrutInput />} />
          <Route path="/detailrecrut/:id" element={<DetailRecrut />} />
          <Route path="/editRecrut/:id" element={<EditRecruts />} />

          <Route path="premiercontrat" element={<PremierContrat1 />} />
          <Route path="addContrat1" element={<AddContrat1 />} />
          <Route
            path="/detailcontrat1/:id"
            element={<DetailPremierContrat />}
          />
          <Route path="/editContrat1/:id" element={<EditerPremierContrat />} />

          <Route path="moncontrat2" element={<MonContrat2 />} />
          <Route path="addContrat2" element={<Input />} />
          <Route path="/detailcontrat2/:id" element={<DetailContrat2 />} />
          <Route path="/editContrat2/:id" element={<EditContrat2 />} />

          <Route path="moncontrat3" element={<TroisiemeContrats />} />
          <Route path="addMonContrat3" element={<AddContrat3 />} />
          <Route path="/detailcontrat3/:id" element={<DetailContrat3 />} />
          <Route path="/editContrat3/:id" element={<EditContrat3 />} />

          <Route path="monreclassement" element={<Reclassement />} />
          <Route path="addReclassement" element={<InputReclassement />} />
          <Route path="/editReclassement/:id" element={<EditReclassement />} />

          <Route path="/edit/:id" element={<EditRecrut />} />
          <Route path="/views/:id" element={<Details />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
