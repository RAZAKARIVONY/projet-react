
import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';




function EditRecrut() {
  const initialValue={
    nom:"",
    prenom:"",
    cisco:"",
    CIN:"",
    diplome:"",
    date_naiss:"",
  }

    const [recrut, setRecrut]= useState(initialValue);

    const {nom,prenom,cisco,CIN,diplome,date_naiss}=recrut;
  
    const {id}= useParams();

    let navigate= useNavigate()
    useEffect(()=>{
      axios.get(`http://localhost:4050/api_recrut/${id}`)
     .then(res=>{
         setRecrut(res.data)
  
     });
  },[id]);

  //  useEffect(
  //     function(){
  //       async function updateCrud(){
  //          try {
  //           let response= await axios.get(`http://localhost:4050/api_recrut/${id}`)
  //           setRecrut(response.data);
  //          } catch (error) {
  //            console.log(error)
  //          }
  //       }
  //       updateCrud();
  //     },
  //     )

    // const loadAllUser=async()=>{
    //   let response= await axios.get(`http://localhost:4050/api_recrut/${id}`)
    //   setRecrut(response.data);
    // }

  const onInputChange = (e) =>{
    setRecrut({
      ...recrut, 
      [e.target.name]: e.target.value})
  }

  const editRecut = async() =>{
     await axios.put(`http://localhost:4050/api_recrut/${id}`, recrut)
    .then((res)=>(
        res.data
    ))
    .then(data=>setRecrut(data.recruts))
    .catch(err=>setRecrut(err.response.data))   
    navigate('/recrutement')   
  } 

  const submitRecrut = (e) => {
    e.preventDefault();
  }
    
  return (
    
    <div>
        <div className='container'>
          <div className='row mt-3'>
            <div className='col-sm-6'>
              <div className='box p-3 mb-3 mb-3 mt-5' style={{border:"1px solid #d0d0d0"}}>

                <form onSubmit={submitRecrut}>
                  <h5 className='mb-3'>Insert formulaire</h5>
                    <div className='form-group'>
                    <label>Nom</label>               
                      <input 
                        name='nom' 
                        type="text"   
                        placeholder='votre nom'                            
                        value={nom} 
                        onChange={(e)=>onInputChange(e)}
                        className='form-control mb-4'  
                      />
                    </div>

                    <div className='form-group'>
                    <label>Prenom</label>
                      <input 
                        type="text" 
                        className='form-control mb-4' 
                        placeholder='votre prenom' 
                        name='prenom' 
                        value={prenom} 
                        onChange={onInputChange}
                      />
                    </div>

                    <div>
                    <label>CISCO</label>
                    <input type="text" 
                             className='form-control mb-4'  
                             placeholder='votre CISCO' 
                             name='cisco' 
                             value={cisco} 
                             onChange={onInputChange}/>
                    </div>

                    <div className='form-group'>
                    <label>CIN</label>
                      <input 
                        type="number" 
                        className='form-control mb-4' 
                        placeholder='votre CIN' 
                        name='CIN' 
                        value={CIN} 
                        onChange={onInputChange}
                      />
                    </div>
                    <div className='form-group'>
                    <label>Diplome</label>
                      <input 
                        type="text" 
                        className='form-control mb-4' 
                        placeholder='votre Diplome' 
                        name='diplome' 
                        value={diplome} 
                        onChange={onInputChange}/>
                    </div>
                    <div className='form-group'>
                    <label>Date de naissance</label>
                      <input 
                        type="date" 
                        className='form-control mb-4' 
                        placeholder='votre date de naissance' 
                        name='date_naiss' value={date_naiss} 
                        onChange={onInputChange}
                             
                      />
                    </div>
                    <div className='col-auto'>
                      <button 
                          className='btn btn-primary mb-3'  
                          type='submit' 
                          onClick={editRecut}>Update
                      </button>
                    </div>
                </form>
              </div>
            </div>

          </div>

        </div>
    </div>
  )
}

export default EditRecrut