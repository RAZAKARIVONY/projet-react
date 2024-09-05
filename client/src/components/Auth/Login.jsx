import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import"./style/Login.css"
import { NavLink, useNavigate } from 'react-router-dom';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import axios from 'axios';



function Login({setLoginUser}) {
  const navigate= useNavigate();

    const [user , setUser] = useState({
        nom: "",
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

  const login =()=>{
    axios.post('http://localhost:4050/api_auth/login', user)
    .then(res => {
        alert(res.data.message)
        setLoginUser(res.data.user)
        navigate('/homepage')

    }

        )}
  const entrer= ()=>{navigate("/registre")}

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
    
      <Container component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
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
           <FormControl sx={{ m: 1, width: '31ch' }} variant="outlined">
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              onClick={login}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Connexion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to='/registre' onClick={entrer}>
                creer un compte?{"Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
  );
}

export default Login