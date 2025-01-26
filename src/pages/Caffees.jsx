import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

function Caffees() {
    const [caffees ,setCaffees] =useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
    const headers = {
        Authorization: `Bearer ${token}`,
      };
    useEffect(()=>{
axios.get("https:\\dalil.mlmcosmo.com/api/cafes",{headers}).then((res)=>{console.log(res.data);
}).catch((error)=>{console.log(error)})
    },[])
  return (
    <div className='container vh-100'>
      <div className="row">

      </div>
    </div>
  )
}

export default Caffees
