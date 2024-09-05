import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import InputGroup from '../conponents/InputGroup'

function Details() {
  const navigate = useNavigate

  const [form, setForm]=useState({})
   
  const [errors, setErrors]=useState({})

  const {id} = useParams()


  const onChangeHandler=(e)=>{
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  };

  const onSubmitHandler=(e)=>{
      e.preventDefault();
      axios.put(`http://localhost:8050/api/${id}`, form)
      .then(res=>{
        navigate('/home')
          })
    
      .catch(err=>setErrors(err.response.data))
  }

  useEffect(()=>{
    axios.get(`http://localhost:8050/api/${id}`)
   .then(res=>{
       setForm(res.data)

   });
},[id]);

  return (
    <div className='container mt-4 col-12 col-lg-4'>
    <form onSubmit={onSubmitHandler}>
      <InputGroup
      label="Email" 
      type="text" 
      name="email"  
      onChangeHandler={ onChangeHandler}
      errors={errors.message}
      value={form.email}
       />
      <InputGroup 
      label="Nom" 
      type="text" 
      name="nom" 
      onChangeHandler={ onChangeHandler}
      errors={errors.message}
      value={form.nom}
      />
      <InputGroup 
      label="Prenom" 
      type="text" 
      name="prenom" 
      onChangeHandler={ onChangeHandler}
      errors={errors.message}
      value={form.prenom}
      />
      <InputGroup 
      label="Telephone"
       type="number" 
       name="phone" 
       onChangeHandler={ onChangeHandler}
       errors={errors.message}
       value={form.phone}
       />

      <button className='btn btn-primary' type='submit'>Add User</button>

    </form>
</div>
  )
}

export default Details