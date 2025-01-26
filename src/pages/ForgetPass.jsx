import React, {  useEffect, useState } from 'react';
import forget from '../assests/Forgot password-bro 1.png';
import arrow from '../assests/Vector.png';
import logo from '../assests/logo.png'
import '../style/forgot.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AOS from "aos";
import "aos/dist/aos.css";
function ForgetPass() {  
    const [email ,setEmail] =useState("");
    const navigate =useNavigate();
    const handleForm = (e)=>{
    e.preventDefault();
    }
    useEffect(()=>{
      AOS.init({
        duration: 1000, // مدة التأثير بالميلي ثانية
        once: true, // التأثير يحدث مرة واحدة فقط
      });
    })
    const handleInp = ()=>{
const emailUser = {
    identifier:email
}
axios.post("https://dalil.mlmcosmo.com/api/forgot-password",emailUser).then((response)=>{
    localStorage.setItem('email', JSON.stringify(emailUser));
    Swal.fire(response.data.message);
    navigate('/code')
}).catch((error)=>{Swal.fire(error.response.data.message)})
    }
  return (
<div className='forget p-5 vh-100 text-white'  >
<div className="container  w-100 mb-4 ">
<Link className="navbar-brand logo d-flex  justify-content-end mb-4"  to="/ ">
        دليل المدينه <img src={logo} alt=''/>
    </Link>
<div className='row'>

<div className='col-lg-6 text-center mb-4 mb-lg-0 ' data-aos="fade-up">
        {/* <img src={forget} alt='' className='img-fluid'/> */}
        <h1 className='newAccount'>استرجاع كلمه السر الخاصه بك</h1>
    </div>
    <div className='col d-flex justify-content-center flex-column forgetdiv mt-4' dir='rtl'  data-aos="fade-down">
    <div className='text-forgot d-flex flex-column justify-content-start align-items-start ' >
    <Link className='' to='/login' >
        <img src={arrow} alt='' className='p-1'/>
       <span className='back text-white'>الرجوع لتسجيل الدخول</span></Link>
    <h1 className='mb-4 custom text-center mb-4 p-2'>هل نسيت كلمه السر </h1>
    <p className='text-par'>ادخل بريدك الالكتروني او رقم هاتفك وسنرسل لك رمز التاكيد</p>
   </div>
<form action="" onSubmit={handleForm}>
<div className='d-flex flex-column'>
    <input type='email' className='inpforgot form-control'placeholder='ادخل بريدك الالكتروني ' onChange={(e)=>{ setEmail(e.target.value)}}/>
    <button className='text-white  btn-forgot w-100' onClick={()=>handleInp()}>التالي</button>
</div>
</form>
    </div>

</div>
    </div>
    </div>

    
  )
}

export default ForgetPass

