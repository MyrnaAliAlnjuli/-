import React from 'react'
import '../style/nearPlce.css'
import { Link } from 'react-router-dom'
function Card({place}) {
  return (
    <Link to={`/single/${place.id}`} className='text-decoration-none text-black'>
    <div className='container'>
                <div className="place-card d-flex p-2">
                <div className="d-flex flex-column align-items-end justify-content-center mx-1 ">
                <h3 className='text-card '>{place.name}</h3>
                <p className='dispription '>{place.map_disc}</p>
                </div>
                <img src={place.cover_image} className ="nearImg"alt="" />
              </div>
    </div></Link>
  )
}



export default Card
