import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Details() {
  const initialValue={
    nom:"",
    prenom:"",
    cisco:"",
    CIN:"",
    diplome:"",
    date_naiss:"",
  }
  

  const [getuserdata, setUserdata] = useState(initialValue);

    const {nom,prenom,cisco,CIN,diplome,date_naiss}=getuserdata;
  
    const {id}= useParams();

    useEffect(()=>{
      axios.get(`http://localhost:4050/api_recrut/${id}`)
     .then(res=>{
      setUserdata(res.data)
  
     });
  },[id]);
  return (
    <>
     <div className='container mt-3'>
        <h1 style={{fontWeight:400}}>Detail Views</h1>
          <Card sx={{ maxWidth: 600 }}>
                  <CardContent>
                      <div className="row">
                          <div className="left_view col-lg-6 col-md-6 col-12">
                              <img src='./logo.jpg' style={{ width: 50 }} alt="logo" />
                              <h3 className="mt-3">Mom: <span >{nom}</span></h3>
                              <h3 className="mt-3">Prenom: <span >{prenom}</span></h3>
                              <p className="mt-3"><MailOutlineIcon />CISCO <span>{cisco}</span></p>
                              <p className="mt-3"><WorkIcon /> Diplome <span>{diplome}</span></p>
                          </div>
                          <div className="right_view  col-lg-6 col-md-6 col-12">

                              <p className="mt-5"><PhoneAndroidIcon />mobile: <span>{date_naiss}</span></p>
                              <p className="mt-3"><LocationOnIcon />location: <span>{CIN}</span></p>
                              <p className="mt-3">Description: <span>Recrutement de personnel</span></p>
                          </div>

                      </div>
                      <Button sx={{textTransform: "none"}} LinkComponent={NavLink} to="/recrutement" variant="contained" color="error" startIcon={<ArrowBackIosNewIcon/>} >Close</Button>
                  </CardContent>
              </Card>
     </div>
    </>
  )
}

export default Details