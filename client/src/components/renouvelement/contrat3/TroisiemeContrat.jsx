import moment from 'moment';
import React, { useState } from 'react'


function TroisiemeContrat() {

  const [date, setDate]= useState({
    startDate:new Date(),
    dateFin:new Date(),
    duree:""
  });
  

const onInputChange = e =>{
    setDate({...date, [e.target.name]: e.target.value})
  }

    const newStartDate= new Date(date.startDate);
    const newEndDate=new Date(date.dateFin);
    let result=moment(newEndDate).diff(newStartDate,'month')

  // let starDate= moment(startDate, 'DD-MM-YYYY');
  // let endDate = moment(dateFin, 'DD-MM-YYYY');
  // const dayDiff = endDate.diff(starDate, 'days');
  // console.log('Jour:' + dayDiff);

  return (
    <>
        <div className='col-sm-4' >


          <label>Date Fin</label>
          <input 
            type="date" 
            className='form-control mb-4' 
            placeholder='votre date de naissance' 
            name='dateFin' 
            value={date.dateFin} 
            onChange={onInputChange}                   
          />
          <label>Date Debut</label>
          <input 
            type="date" 
            className='form-control mb-4' 
            placeholder='votre date de naissance' 
            name='startDate' 
            value={date.startDate} 
            onChange={onInputChange}                  
          />
          <input
            type="text" 
            className='form-control mb-4' 
            name='duree'
            value={result}
          />
          <button>Calculer</button>
          <br/>
          <p>duree:{result} jour</p>
        </div>
    </>
  )
}

export default TroisiemeContrat