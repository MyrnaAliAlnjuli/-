import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Restourants() {
  const [restaurants, setRestaurants] = useState([]); // تم تعديل الاسم من restourants إلى restaurants
  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios
      .get('https://dalil.mlmcosmo.com/api/restaurants', { headers })
      .then((res) => {
        console.log(res.data);
        setRestaurants(res.data); // تم تعديل setRestourants إلى setRestaurants
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container vh-100">
      <div className="row  text-black">
       
          <h1>اكتشف الأماكن المناسبة</h1>
          {restaurants.length > 0 ? (
            restaurants.map((res) => (
                <div className="col-md-4"  key={res.id} >
                <div className="card m-4 text-black" >
                <img
                  src={res.cover_image}
                  className="card-img-top"
                  alt={res.name}
                  width={"300px"}
                />
                <div className="card-body">
                  <h5 className="card-title  text-black">{res.name}</h5>
                  <p className="card-text  text-black">{res.map_disc}</p>
                </div>
                <div>
                    <div className="card">
                    <iframe src={`https://maps.google.com/maps?q=${restaurants.latitude},${restaurants.longitude}&z=15&output=embed`} frameborder="0" style={{width:"100%",height:"200px"}}></iframe>
                   
                    </div>
                    <h4 className='text-black'>{restaurants.rating}</h4>
                    <p className='text-black'>{restaurants.status}</p>
                    <p className='text-black'>الساعات{restaurants.open_at}{restaurants.close_at}</p>
                </div>
                
              </div>

              
                </div>
            
            ))
          ) : (
            <p>لا توجد بيانات لعرضها.</p>
          )}
        </div>
      </div>
  );
}

export default Restourants;
