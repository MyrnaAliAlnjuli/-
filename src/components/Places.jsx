import { useEffect, useState } from 'react';
import '../style/styleHome.css';
import axios from 'axios';
import Card from './Card';
function Places() {
  const [places, setPlaces] = useState([]);
  const token = JSON.parse(localStorage.getItem('token'));
  const [location, setLocation] = useState({
    longitude: 31.357649683936735,
    latitude: 31.03425874981445,
  });

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios.post("https:\\dalil.mlmcosmo.com/api/store-location",location,{headers}).then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
    
    axios.get("https:\\dalil.mlmcosmo.com/api/nearby-places",{headers},location).then((response)=>{
      console.log(response.data);
      setPlaces(response.data)
    }).catch((error)=>{
      console.log(error);
    })
  }, []);

  return (
    <>
      <div className="section-2 d-flex justify-content-between align-items-center w-100 container pt-5 my-2">
        <div className="section23 d-flex">
          <button className="view">شاهد اماكن اكثر</button>
        </div>
        <div className="section22 d-flex justify-content-start align-items-center flex-column">
          <h1 className='text-white'>استكشف الاماكن القريبه منك</h1>
          <a href="# ">
            <p>البحث عن الاماكن القريبه والاكان الاكثر شعبيه لدينا</p>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {places.map((place, index) => (
            <div className="col-md-4" key={index}>
            <Card place = {place}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Places;
