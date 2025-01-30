import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Favorite() {
  const [favorite, setFavorite] = useState([]);  
  const [loading, setLoading] = useState(true);    
  const [error, setError] = useState(null);        

  const token = localStorage.getItem('token');
  console.log("Token being sent:", token); // ✅ تأكدي إن التوكن موجود

  useEffect(() => {
    if (!token) {
      setError('لم يتم تسجيل الدخول.');  
      setLoading(false);
      return;
    }

    axios.get('https://dalil.mlmcosmo.com/api/favorites', {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` }
    })
    .then((response) => {
      console.log("API Response:", response.data); // ✅ شوفي شكل البيانات الجاية
      setFavorite(response.data.data || response.data); 
      setLoading(false);
    })
    .catch((error) => {
      console.error("API Error:", error.response?.data || error.message); // ✅ طباعة أي خطأ
      setError('حدث خطأ أثناء جلب البيانات.');
      setLoading(false);
    });

  }, [token]);

  if (loading) return <div className="container text-center mt-5">جارِ التحميل...</div>;
  if (error) return <div className="container text-danger text-center mt-5">❌ {error}</div>;

  return (
    <div className="container vh-100">
      <h1 className="text-center my-4">📌 الأماكن المفضلة</h1>
      <div className="row justify-content-center">
        {favorite.length > 0 ? (
          favorite.map((place, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card shadow-sm">
                <img 
                  src={place.cover_image || 'https://via.placeholder.com/300'} 
                  alt={place.name} 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">{place.name}</h5>
                  <p className="card-text">التقييم: {place.rating} ⭐</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center w-100">
            <p>🚀 لا يوجد أماكن مفضلة بعد.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorite;
