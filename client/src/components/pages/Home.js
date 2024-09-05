import React, { useEffect, useState } from 'react';
import InputGroup from '../conponents/InputGroup';
import RowDetails from '../conponents/RowDetails';
import axios from 'axios'
import Alert from './Alert';

function Home() {
    const [users, setUsers] = useState([])

    const [form, setForm]=useState({})
   
    const [errors, setErrors]=useState({})

    const [message, setMessage]=useState("")

    const [show, setShow]=useState(true)



    const onChangeHandler=(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8050/api', form)
        .then(res=>{
            setMessage(res.data.message)
            setShow(true)
            setTimeout(()=>{
                setShow(false)
            }, 4000)
        })
        .catch(err=>setErrors(err.response.data))
    }

    // Dlelete
    const OnDelete= (id_)=>{
        if(window.confirm('Voulez vous vraiment supprimer')){
            axios.delete(`http://localhost:8050/api/${id_}`)
            .then(res=>{
                setMessage(res.data.message)
                setShow(true)
                setTimeout(()=>{
                    setShow(false)
                }, 4000)
            })
        }
    }

    // find all user
    useEffect(()=>{
         axios.get('http://localhost:8050/api')
        .then(res=>{
            setUsers(res.data)
        })
    }, [])

  return (
    <div className='row p-4'>

          <Alert message={message} show={show}/>

        <div className='mt-4'>
            <h3>CRUD User</h3>
        </div>
        <div className='col-12 col-lg-4'>
            <form onSubmit={onSubmitHandler}>
              <InputGroup 
              label="Email" 
              type="text" 
              name="email"  
              onChangeHandler={ onChangeHandler}
              errors={errors.message}
               />
              <InputGroup 
              label="Nom" 
              type="text" 
              name="nom" 
              onChangeHandler={ onChangeHandler}
              errors={errors.message}
              />
              <InputGroup 
              label="Prenom" 
              type="text" 
              name="prenom" 
              onChangeHandler={ onChangeHandler}
              errors={errors.message}
              />
              <InputGroup 
              label="Telephone"
               type="number" 
               name="phone" 
               onChangeHandler={ onChangeHandler}
               errors={errors.message}
               />

              <button className='btn btn-primary' type='submit'>Add User</button>

            </form>
        </div>

        <div className='col-12 col-lg-7'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Email</th>
                        <th scope='col'>Nom</th>
                        <th scope='col'>Prenom</th>
                        <th scope='col'>Telephone</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        users.map(({email, nom, prenom, phone, _id})=>(
                            <RowDetails 
                                email={email} 
                                nom={nom} 
                                prenom={prenom} 
                                phone={phone} 
                                Id={_id}
                                OnDelete={OnDelete}
                            />
                        ))
                           
                        
                    }

                </tbody>

            </table>

        </div>

    </div>
  )
}

export default Home