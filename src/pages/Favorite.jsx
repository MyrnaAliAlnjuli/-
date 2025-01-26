import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Favorite() {
  const [favorite, setFavorite] = useState([]);  // Use null initially to indicate no data
  const [loading, setLoading] = useState(true);    // Loading state for when the data is being fetched
  const [error, setError] = useState(null);        // Error state for any API request failure

  const token = JSON.parse(localStorage.getItem('token'));
  const headers = {
    Authorization: `Bearer ${token}`
  };

  useEffect(() => {
    axios
      .get('https://dalil.mlmcosmo.com/api/favorites', { headers })
      .then((response) => {
        setFavorite(response.data);  // Set the fetched data into the state
        setLoading(false);            // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError('Error fetching data');
        setLoading(true);            // Set loading to false even if there’s an error
      });
  }, []);  // Empty dependency array to fetch data on component mount only

  if (loading) {
    return <div className="container">Loading...</div>;  // Show loading message while data is being fetched
  }

  if (error) {
    return <div className="container">Error: {error}</div>;  // Show error message if there’s an issue
  }

  return (
    <div className="container vh-100">
      <h1>الاماكن المفضله</h1>
   <div className="row">
 <div className="col">
{favorite.map((place)=>(
  <div className="card">
    <img src={place.cover_image} alt="" />
  </div>
))}
 </div>
   </div>
    </div>
  );
}

export default Favorite;
