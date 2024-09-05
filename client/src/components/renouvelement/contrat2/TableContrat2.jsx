
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GoTrashcan } from 'react-icons/go'

function TableContrat2() {
    const [records, setRecord]= useState([])

      //voir tout le liste
    const getAllUser=async()=>{
        let response= await axios.get('http://localhost:4050/api_contrat2')
        setRecord(response.data)
    }
    useEffect(()=>{
        getAllUser();
    },[])

       // Dlelete
   const OnDelete= (id_)=>{
    if(window.confirm('Voulez vous vraiment supprimer')){
        axios.delete(`http://localhost:4050/api_contrat2/${id_}`)
        .then(res=>{
            console.log(res.data.message)
        })
      }
    }
  return (
    <>       
            <div className='col-sm-10'>
                <table className='table table-hover table-striped table-bordered ml-4'>
                  <thead className='table-dark' >
                    <tr>
                      <th>Immatricule</th>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>CISCO</th>
                      <th>Diplome</th>
                      <th>Date de prise de service</th>
                      <th>Date de prise fait</th>
                      <th>Duree</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                  {console.log(records)}
                    {
                          records.map((contrat2) => 
                            (
                              <tr key={contrat2.id}>
                                  <td>{contrat2.IM}</td>
                                  <td>{contrat2.nom}</td>
                                  <td>{contrat2.prenom}</td>
                                  <td>{contrat2.cisco}</td>
                                  <td>{contrat2.diplome}</td>
                                  <td>{contrat2.date_service}</td>
                                  <td>{contrat2.date_fait}</td>
                                  <td>{contrat2.duree}</td>
                                  <td className='d-flex justify-content-between'>
                                    <button className='btn btn-success'>

                                    </button>
                                    <button className='btn btn-primary'>

                                    </button>
                                    <button className='btn btn-danger' onClick={()=>OnDelete(contrat2._id)} >
                                       <GoTrashcan/>
                                    </button> 
                                  </td>
                              </tr>
                            ))
                    } 
                  </tbody>
                </table> 
            </div>
    </>
  )
}

export default TableContrat2