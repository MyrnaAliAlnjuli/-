import React, { useContext, useEffect } from 'react'
import NavBar from '../components/NavBar';
import '../style/styleHome.css'
import Places from '../components/Places';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import CaffesAndRes from '../components/CaffesAndRes';
import BastRes from '../components/BastRes';

function Home() {
  
    const {isLogedIn, setLogedIn}= useContext(AuthContext);
    const navigate =useNavigate();
    useEffect(() => {
        anime({
          targets: '.animated-text',
          translateY: [-700, 0],
          opacity: [0, 1],
          duration: 1500,
          easing: 'easeOutExpo',
          delay: (el, i) => i * 100,
        });
        const token = localStorage.getItem("token");
        setLogedIn(!!token)
      },[]);
    
      const handleLogout = () => {
        const token = JSON.parse(localStorage.getItem("token")
        
      );
      
        // التأكد من وجود التوكن قبل الإرسال
        if (!token) {
          console.warn("No token found, user might already be logged out.");
          return;
        }
      
        axios.post("https://dalil.mlmcosmo.com/api/logout", {}, {
          headers: {
            Authorization: `Bearer ${token}` // إرسال التوكن في الهيدر
          }
        })
        .then((response) => {
          console.log("Logout successful:", response.data);
      
          // حذف التوكن من localStorage بعد نجاح الطلب
          localStorage.removeItem("token");
      
          // (اختياري) إعادة توجيه المستخدم لصفحة تسجيل الدخول
        navigate('/login')        })
        .catch((error) => {
          console.error("Logout failed:", error.response?.data || error.message);
        });
      };
      
  return (
      <> 
      <NavBar/>
      <section>
 <div className="container-fluid vh-100 hero-main d-flex justifiy-content-center align-items-center gap-5">
     <div className="hero-content d-flex align-items-center flex-column w-100 ">
        <div className="hero-text">
            <h1 className="animated-text customHead">استكشف العالم من حولك بسهوله 
             <br /> وابتكار </h1>
        </div>
        <div className="buttons">
  {!isLogedIn ? (
    <>
      <button
        className="button-one"
        onClick={() => {
          navigate("/signup");
        }}
      >
        تسجيل
      </button>
      <button
        className="button-two"
        onClick={() => {
        setLogedIn(true);
          navigate("/login");
        }}
      >
        تسجيل الدخول
      </button>
    </>
  ) : (
    <button className='logout_btn'
      onClick={() => {
        handleLogout()
        setLogedIn(false);
      }}
    >
      Logout
    </button>
  )}
</div>

    </div>
</div>
      </section>
      <section>
        <Places/>
      </section>
      <section>
        <CaffesAndRes/>
      </section>
      <BastRes/>
      <section>

      </section>

      </>
  )
}

export default Home
