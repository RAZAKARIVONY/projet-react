import React, { useState } from 'react'
import './SignIn.css';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Container, CssBaseline, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { toast, ToastContainer } from 'react-toastify';
// import { createBrowserHistory } from 'history';

function SignIn({setLoginUser}) {
    // const history= createBrowserHistory()
    const navigate= useNavigate();

    const [user , setUser] = useState({
        nom: "",
        password: ""
    })
 
    const handleChange=function(e){
        const {name,value} = e.target
        console.log(name, value)
 
        setUser({
            ...user,
            [name]:value
        })
    }

    const login =()=>{
        axios.post('http://localhost:4050/api_auth/login', user)
        .then(res => {
            toast.success('Connecter avec succes', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            setLoginUser(res.data.user)
            navigate('/recrutement')

        }
   
            )}

    const entrer= ()=>{navigate("/signup")}
 
    const handleClickShowPassword = () => {
        setUser({
          ...user,
          showPassword: !user.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    

  return (
    <>
         {/* {console.log("User", user)} */}
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
            m:1,
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
                Sign in
            </Typography>
            <Box component="form"  noValidate sx={{ mt: 1, m:1 }}>
                <TextField
                margin="normal"
                autoComplete="given-name"
                value={user.nom}
                onChange={handleChange}
                name="nom"
                required
                fullWidth
                id="nom"
                label="Username"
                autoFocus
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                    ),
                }}
                />
            <FormControl sx={{ mt: 1, width: '44ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
            id="outlined-adornment-password"
            type={user.showPassword ? 'text' : 'password'}
            name='password'
            value={user.password}
            fullWidth
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

                
                <Button sx={{mt:1, textTransform:'none'}} variant="contained" onClick={login} fullWidth>Login</Button>

            <Grid container justifyContent="flex-end">
                <Grid sx={{mt:1}} item>
                    creer un compte?
                    <NavLink to='/registre' onClick={entrer}>
                    {"Sign Up"}
                    </NavLink>
                </Grid>
            </Grid>
            </Box>
        </Box>
    </Container>


    </>
    
  )
}

export default SignIn