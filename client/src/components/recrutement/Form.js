import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

function Form() {
  return (
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
      <form>
        <Paper
          elevation={0}
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            paddingLeft: 0,
            width: "85ch",
            "& > :not(style)": {
              mr: 1,
            },
          }}
        >
          <Typography variant="h5" sx={{ mr: 3 }}>
            Recrut formulaire
          </Typography>
          <Grid container spacing={2} sx={{ m: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <TextField
                  id="filled-basic"
                  label="Nom"
                  variant="filled"
                  name="nom"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="filled-basic"
                  label="Prenom"
                  variant="filled"
                  name="prenom"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3.5}>
                <TextField
                  id="filled-basic"
                  label="Cors"
                  variant="filled"
                  name="cors"
                  size="small"
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="filled-basic"
                  label="Grade"
                  variant="filled"
                  name="grade"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="filled-basic"
                  label="CIN"
                  variant="filled"
                  name="cin"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="filled-basic"
                  label="CISCO"
                  variant="filled"
                  name="cisco"
                  size="small"
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="filled-basic"
                  label="Diplome"
                  variant="filled"
                  name="diplome"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="filled-basic"
                  label="Service"
                  variant="filled"
                  name="service"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="filled-basic"
                  label="Date de naissance"
                  variant="filled"
                  size="small"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="filled-basic"
                  label="Telephone"
                  variant="filled"
                  name="telephone"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  id="filled-basic"
                  label="Indice"
                  variant="filled"
                  name="indice"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Stack direction="row" spacing={2}>
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
          </Box>
        </Paper>
      </form>
    </Box>
  );
}

export default Form;
