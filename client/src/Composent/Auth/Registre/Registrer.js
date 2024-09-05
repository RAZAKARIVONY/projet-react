import { Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./Registre.css";
import { Box } from "@mui/system";

function Registrer() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    nom: "",
    email: "",
    password: "",
  });
  const handleChange = function (e) {
    const { name, value } = e.target;
    console.log(name, value);

    setUser({
      ...user,
      [name]: value,
    });
  };

  const registre = async function (e) {
    e.preventDefault();

    try {
      const { nom, email, password } = user;
      if (nom && email && password) {
        await axios
          .post("http://localhost:4050/api_auth/registre", user)
          .then((res) => {
            toast.success("Inscrit avec succes", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            navigate("/loginer");
          });
      } else {
        alert("Invalid input");
      }
    } catch (error) {
      console.log(error.res);
    }
  };

  const click = () => {
    navigate("/loginer");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="registre">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h3>Creer un compte</h3>
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            value={user.nom}
            placeholder="Entrer votre nom"
            onChange={handleChange}
          />
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Entrer votre email"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Entrer votre mot de passe"
            onChange={handleChange}
          />
          <div className="button" onClick={registre}>
            Inscrire
          </div>
          J'ai deja un compte?
          <NavLink to="/loginer" onClick={click}>
            {"login"}
          </NavLink>
        </div>
      </Box>
    </>
  );
}

export default Registrer;
