import React, { useEffect, useState } from 'react';
import '../style/bset.css';
import axios from 'axios';
import star from '../assests/star.png'
import best from '../assests/istockphoto-2004635695-612x612.webp'
import { Link, useParams } from 'react-router-dom';
function BastRes() {
  const [topRated, setTopRated] = useState([]);
  // const {id} =useParams()
  const token = JSON.parse(localStorage.getItem('token'));
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios
      .get('https://dalil.mlmcosmo.com/api/top-rated-places', { headers })
      .then((res) => {
        setTopRated(res.data);
        console.log(res.data)
      })
      .catch((error) => {
        console.error('Error fetching top-rated places:', error);
      });
  }, [token]);

  return (
    <div className="container pt-5 pb-5" dir="rtl">
      <div className="row pt-5 " >
        <div className="best_text">
          <h3 className="best">افضل المطاعم</h3>
          <p>استكشف افضل الاماكن القريبه منك</p>
        </div>
      </div>
      <div className="row">
        {topRated.map((top, index) => (
<div className="col mb-5">
<Link to={`single/${top.id}`} className='text-decoration-none'>
           
           <div className="card  cardBeastRes" key={index}>
              <img 
                src={top.cover_image}
                alt={top.name || 'مطعم'}
                className="card-img-top coverBest w-100"/>
              <div className="card-body">
                <h5 className="card-title">{top.name}</h5>
               <div className="rating d-flex">
<img src={star} alt="" className='starImg'/>
<img src={star} alt="" className='starImg'/>
<img src={star} alt="" className='starImg'/>
<img src={star} alt="" className='starImg'/>
<img src={star} alt="" className='starImg'/>

               <p>{top.rating}</p>
               </div>
              <div className="state d-flex ">
              <p className="card-text">الحالة: {top.status}</p>
              <span className='px-2'> | </span>
              <p> يغلق الساعه{top.close_at}</p>
              </div>
              </div>
          
          </div>
       </Link>
</div>
        ))}
      </div>
    </div>
  );
}

export default BastRes;
