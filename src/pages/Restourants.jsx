import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Restourants() {
  const [restaurants, setRestaurants] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios
      .get('https://dalil.mlmcosmo.com/api/restaurants', { headers })
      .then((res) => {
        console.log(res.data);
        setRestaurants(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row text-black">
        <h1 className="w-100 text-center mb-4 text-white">اكتشف الأماكن المناسبة</h1>
        {restaurants.length > 0 ? (
          restaurants.map((res) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 "  key={res.id}>
              <div className="card text-white cardBeastRes mt-5" >
                <img
                  src={res.cover_image}
                  className="card-img-top img-fluid"
                  alt={res.name}
                  style={{ height: 'auto' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{res.name}</h5>
                  <p className="card-text">{res.map_disc}</p>
                </div>
                <div>
                  <div className="card ">
                    {/* <iframe
                      src={`https://maps.google.com/maps?q=${res.latitude},${res.longitude}&z=15&output=embed`}
                      frameBorder="0"
                      style={{ width: "100%", height: "200px" }}
                    ></iframe> */}
                  </div>
                  <h4 className="text-white"> التقيم :{res.rating}</h4>
                  <p className="text-white"> الحاله :{ res.status}</p>
                  <p className="text-white">
                    الساعات: {res.open_at} - {res.close_at}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          
          <p className="w-100 text-center">جاري تحميل البيانات ......</p>
        )}
      </div>
    </div>
  );
}

export default Restourants;
