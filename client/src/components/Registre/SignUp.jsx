import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Container, CssBaseline, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./SignUp.css"

function SignUp() {
    const navigate= useNavigate()

   const [user , setUser] = useState({
       nom: "",
       email: "",
       password: "",
       weight: '',
       weightRange: '',
       showPassword: false,

   })

  const handleClickShowPassword = () => {
    setUser({
      ...user,
      showPassword: !user.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

   const handleChange=function(e){
       const {name,value} = e.target
       console.log(name, value)

       setUser({
           ...user,
           [name]:value
       })
   }

   const registre=async function(e){
       e.preventDefault();

       try {
        const {nom, email, password} =user
        if(nom && email && password){

              await axios.post('http://localhost:4050/api_auth/registre' ,user)
                .then(res => {
                    alert(res.data.message)
                    navigate('/registre')
                })
            }else{
                alert('Invalid input')
            }
           
       } catch (error) {
           console.log(error.res);
         
       }
   }

   const click=()=>{navigate('/')}
  return (
    <div className='registre'>
    {console.log("User", user)}
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
            Sign up
          </Typography>
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
              </Grid>
            </Grid>
        </Box>
    </Container>
<div className='button' onClick={registre}>Registre</div>
<div>ou</div>
<div className='button' onClick={click}>Creer un compte</div>

</div>
  )
}

export default SignUp