import { Avatar, Box, Button,  Container, CssBaseline, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Tooltip, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import"./style/Registre.css"
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function Registre() {

  const navigate= useNavigate()

  const [user , setUser] = useState({
      nom: "",
      email: "",
      password: "",
      weight: '',
      weightRange: '',
      showPassword: false,

  })

  const handleChange=function(e){
    const {name,value} = e.target
    console.log(name, value)

    setUser({
        ...user,
        [name]:value
    })
}

  const handleClickShowPassword = () => {
    setUser({
      ...user,
      showPassword: !user.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const registre=async function(e){
    e.preventDefault();

    try {
     const {nom, email, password} =user
     if(nom && email && password){

           await axios.post('http://localhost:4050/api_auth/registre' ,user)
             .then(res => {
              toast.success('Inscrit avec succes', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                 navigate('/signin')
             })
         }else{
             alert('Invalid input')
         }
        
    } catch (error) {
        console.log(error.res);
      
    }
}

const click=()=>{navigate('/signin')}

  return (
    <>
<Container component="main" maxWidth="xs">
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
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

            <Box component="form" noValidate  sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="given-name"
                    value={user.nom}
                    onChange={handleChange}
                    name="nom"
                    required
                    fullWidth
                    id="nom"
                    label="Username"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    value={user.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"                
                  />
                </Grid>
                <Grid item xs={12}>
                <FormControl sx={{ m: 0, width: '44ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={user.showPassword ? 'text' : 'password'}
              name='password'
              value={user.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {user.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
                    </FormControl>
                </Grid>
                
              </Grid>
            <Tooltip title="Inscrire" placement="bottom" arrow>
              <Button
                type="submit"
                onClick={registre}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, textTransform:'none' }}
              >
                S'inscrire
              </Button>
            </Tooltip>
              <Grid container justifyContent="flex-end">
                <Grid item>
                J'ai deja un compte?
                <NavLink to='/signin' onClick={click}>
                  {"login"}
                  </NavLink>
                </Grid>
              </Grid>
            </Box>

        </Box>
      </Container>
    </>
  )
}

export default Registre