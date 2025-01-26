import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../style/single.css';
import star from'../assests/star.png'
import Swal from 'sweetalert2';

function Single() {
  const { userId } = useParams();
  const [heart,setHeart]=useState(false);
  const [singlePlace, setSinglePlace] = useState({});
  const [images, setImages] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const HandelFav=()=>{
    axios.post(`https:\\dalil.mlmcosmo.com/api/favorites/${userId}/toggle`,{},{headers}).then((res)=>{
      console.log(res);
      Swal.fire(res.data.message)
    }).catch((error)=>{
      console.log(error);

    })
  }

  useEffect(() => {
    axios
      .get(`https://dalil.mlmcosmo.com/api/place/${userId}`, { headers })
      .then((res) => {
        console.log(res.data);
        setSinglePlace(res.data); // حفظ بيانات المكان
        setImages(res.data.images ); // حفظ الصور
      })
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <>
      <NavBar/>
      <div className="container singlePage" dir="rtl">
        <div className="row">
          <div className="col">
            {images.map((imageObj, index) => (
              <img
                key={index}
                src={imageObj.image} // الوصول إلى مسار الصورة
                alt= {`Image ${index}`}
                width={301}
                height={267}
                className="m-2 singleeImg img-fluid"/>
            ))}
          </div>
        </div>
      </div>
      <div dir='rtl' className='container-fluid'>
       <div className="row">
        <div className="col">
        <h2 >{singlePlace.name}</h2>
        <h5> يفتح الساعه {singlePlace.open_at}</h5>
        <h5> يغلق الساعه{singlePlace.close_at}</h5>
        </div>
     
<div className="col">
<h3>{singlePlace.rating}
<img src={star} alt="" className='starImg'/>
<img src={star} alt="" className='starImg'/>
<img src={star} alt="" className='starImg'/>
<img src={star} alt="" className='starImg'/>
<img src={star} alt="" className='starImg'/>
</h3>
<h6>{singlePlace.reviews_count} reviews</h6>
</div>
<div className='col'>
<i class="fa-regular fa-heart" onClick={()=>{HandelFav()}} style={{fontSize:"24px"}}></i>
</div>
       </div>
        
      </div>
      <div >
        <h4 dir='rtl' className='p-5'>الخريطه/الموقع</h4>
      <iframe src={`https://maps.google.com/maps?q=${singlePlace.latitude},${singlePlace.longitude}&z=15&output=embed`} frameborder="0" style={{width:"100%",height:"400px"}}></iframe>
      </div>
      <section>

      </section>
    </>
  );
}

export default Single;
