import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import "./Login.css";
import logo from "../../image/logo.jpg";

function Login({ setLoginUser }) {
  // const history= createBrowserHistory()
  const navigate = useNavigate();

  const [user, setUser] = useState({
    nom: "",
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

  const login = () => {
    axios.post("http://localhost:4050/api_auth/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };

  // const login = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:4050/api_auth/login",
  //       user
  //     );
  //     if (res.error) toast.error("Il y a un erreur ");
  //     else {
  //       toast.success("Connecter avec succes", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //       setLoginUser(res.data.user);
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const entrer = () => {
    navigate("/inscrire");
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="login">
          <img className="image" src={logo} alt=""></img>
          <h1>Login</h1>
          <label>Username</label>
          <input
            type="text"
            name="nom"
            value={user.nom}
            onChange={handleChange}
            placeholder="Entrer votre nom"
          />
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Entrer votre mot de passe"
            onChange={handleChange}
          />

          <div className="button" onClick={login}>
            Login
          </div>
          <div>ou</div>

          <div className="buttons" onClick={entrer}>
            Creer un compte
          </div>
        </div>
      </Box>
    </>
  );
}

export default Login;
