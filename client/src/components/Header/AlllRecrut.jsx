import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AlllRecrut() {

  const [liste, setList]= useState([])

  const getAllUser=async()=>{
    let response= await axios.get('http://localhost:4050/api_recrut')
    setList(response.data)
    console.log(response.data);
  }
  useEffect(()=>{
    getAllUser();
  },[])  

  return (
    <div>
    <div className='container'>
      <div className='row mt-3'>

        <div className='col-sm-8'>
            <h5 className='text-center ml-4 mt-4 mb-5'> Tableau</h5>
            <div className='input-group mt-3 mb-4'>
               <div className='form-outline'>
                 <input type="text" className='form-control' placeholder='Recherche'/> 
               </div>
               <button type="button" className='btn btn-success'>
                <i className='fa fa-search' aria-hidden="true"></i>
               </button>
            </div>


            <table className='table table-hover tablr-strped table-bordered ml-4'>
              <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>CIN</th>
                    <th>Diplome</th>
                    <th>Date de naissance</th>
                    <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                {console.log(liste)};
              </tbody>
            </table>
        </div>

      </div>

    </div>
</div>
  )
}

export default AlllRecrut