import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";
import axios from "axios";

function Input() {
  const [contrat1, setContrat1] = useState({
    nom: "",
    prenom: "",
    cors: "",
    grade: "",
    CIN: "",
    cisco: "",
    diplome: "",
    service: "",
    date_naiss: new Date(),
    telephone: "",
    indice: "",
  });

  const handleChange = function (e) {
    const { name, value } = e.target;
    console.log(name, value);

    setContrat1({
      ...contrat1,
      [name]: value,
    });
  };
  // Ajouter un recrut
  const submitContrat = async (e) => {
    e.preventDefault();
    e.target.reset();
    await axios.post("http://localhost:4050/api_contrat1", contrat1);
    toast.success("Ajouter avec succes");
  };
  return (
    <>
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 420,
            height: 420,
          },
        }}
      >
        <form onSubmit={submitContrat}>
          <Paper
            elevation={0}
            sx={{
              p: 1,
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              paddingLeft: 0,
              width: "75ch",
              "& > :not(style)": {
                mr: 1,
              },
            }}
          >
            <Typography variant="h5" sx={{ ml: 3 }}>
              Contrat formulaire
            </Typography>

            <Grid container spacing={2} sx={{ m: 1 }}>
            
              <Grid item xs={12} sm={6}>
                <TextField
                  id="filled-basic"
                  label="Nom"
                  variant="filled"
                  name="nom"
                  value={contrat1.nom}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="filled-basic"
                  label="Prenom"
                  variant="filled"
                  name="prenom"
                  value={contrat1.prenom}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="filled"
                  sx={{ minWidth: 325 }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Corps
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    name="cors"
                    value={contrat1.cors}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    <MenuItem value="Sous Operateur"> Sous Operateur </MenuItem>
                    <MenuItem value="Operateur"> Operateur </MenuItem>
                    <MenuItem value="Inst C"> Inst C </MenuItem>
                    <MenuItem value="Encadreur"> Encadreur </MenuItem>
                    <MenuItem value="Inst B"> Inst B </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="filled-basic"
                  label="Grade"
                  variant="filled"
                  name="grade"
                  value={contrat1.grade}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="filled-basic"
                  label="CIN"
                  variant="filled"
                  name="CIN"
                  value={contrat1.CIN}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={5}>
                <FormControl
                  variant="filled"
                  sx={{ minWidth: 270 }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    CISCO
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    name="cisco"
                    value={contrat1.cisco}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    <MenuItem value="Ambalavao"> Ambalavao </MenuItem>
                    <MenuItem value="Ambohimahasoa"> Ambohimahasoa </MenuItem>
                    <MenuItem value="Ikalamavony"> Ikalamavony </MenuItem>
                    <MenuItem value="Fianarantsoa"> Fianarantsoa </MenuItem>
                    <MenuItem value="Isandra"> Isandra </MenuItem>
                    <MenuItem value="Vohibato"> Vohibato </MenuItem>
                    <MenuItem value="Lalangina"> Lalangina </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="filled"
                  sx={{ minWidth: 325 }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Diplome
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    name="diplome"
                    value={contrat1.diplome}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    <MenuItem value="Ambalavao"> CEPE </MenuItem>
                    <MenuItem value="Ambohimahasoa"> BEPC+BEP </MenuItem>
                    <MenuItem value="Ikalamavony"> BEPC+CAE </MenuItem>
                    <MenuItem value="Fianarantsoa"> BACC </MenuItem>
                    <MenuItem value="Isandra"> BACC+CAP </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="filled-basic"
                  label="Service"
                  variant="filled"
                  name="service"
                  value={contrat1.service}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="filled-basic"
                  label="Date ne naissance"
                  variant="filled"
                  name="date_naiss"
                  value={contrat1.date_naiss}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="filled-basic"
                  label="Telephone"
                  variant="filled"
                  name="telephone"
                  value={contrat1.telephone}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  id="filled-basic"
                  label="Indice"
                  variant="filled"
                  name="indice"
                  value={contrat1.indice}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Stack direction="row" spacing={2} sx={{ ml: 3, pt: 1 }}>
              <Button
                sx={{ textTransform: "none" }}
                variant="contained"
                color="primary"
                type="submit"
                className="btns"
                endIcon={<AddIcon />}
              >
                Ajouter
              </Button>
            </Stack>
          </Paper>
        </form>
      </Box>
    </>
  );
}

export default Input;
