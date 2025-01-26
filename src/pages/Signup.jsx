import React, { useEffect, useState } from 'react'
import logo from'../assests/logo.png';
import signup from'../assests/signup1.png';
import  '../style/signup.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
function Signup() {

  const navigate = useNavigate()
  const [fName,setfName] =useState("");
  const [lName,setlName] =useState("");
  const [email,setEmail] =useState("");
  const [pass,setPass] =useState("");
  const [phone,setPhone] =useState("");

      useEffect(()=>{
        AOS.init({
          duration: 1000, // مدة التأثير بالميلي ثانية
          once: true, // التأثير يحدث مرة واحدة فقط
        });
      })
const handleForm =(e) =>
{
  e.preventDefault();
}
  const handleInp = ()=>{
   
    const userInfo = {
      name:`${fName}${lName}`,
      email:email,
      phone:phone,
      password:pass
    }
    localStorage.setItem("userInfo",JSON.stringify(userInfo)); 
    //filter 
    if(fName==="" || lName==="" || email==="" ||phone==="" || pass===""){
   Swal.fire({
    title:"ادخل البيانات ",
    background:'white',
    color:'black'
   })
    }
else{
  axios.post("https://dalil.mlmcosmo.com/api/register",userInfo)
  .then((response)=>{
Swal.fire({
  title: response.data.message,
  icon: "success",
  draggable: true,
  background: "white"
})
setTimeout(()=>{navigate('/login')},2000)
  })
  .catch((error)=>{
   Swal.fire(error.response.data.message)
  })
}


  }
  return (
<>
<div className='signup'>
<div dir='rtl' className="container pt-4 w-100 mb-4">
<Link className="navbar-brand logo text-white" href="# ">
        دليل المدينه <img src={logo} alt=''/>
</Link>
</div>
<div className='container pt-5'>
<div className="row d-flex justify-content-center"> 
    <div className='col-lg-6 text-center mb-4 mb-lg-0 container  d-flex justify-content-center align-items-center' data-aos="fade-down">
    {/* <img src={signup} alt='' className='img-fluid'/> */}
    <h1 className='text-white newAccount' >انشاء حساب جديد</h1>
    </div>
    <div className="col-lg-6 divform mb-4"  data-aos="fade-down">
    <form className=' d-flex justify-content-between align-item-center signUpForm' onSubmit={handleForm}>
    <div className='inputs container mt-5'  dir='rtl'>
        <div className='mb-5 d-flex flex-column justify-content-center align-items-start'>
            <h1 className='custom text-white'>تسجيل جديد</h1>
            <p>دعنا نساعدك جميعًا حتى تتمكن من الوصول إلى حسابك الشخصي.</p>
        </div>
<div className="mb-3 d-flex justify-content-between align-items-center " style={{maxWidth:"545px"}}>
  <input type="text" className="inputFuser " style={{maxWidth:'250px'}} placeholder='أدخل الاسم الاول' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setfName(e.target.value)}}/>
  <input type="text" className=" inputLuser " style={{maxWidth:'250px'}} placeholder='أدخل الاسم العائله' id="exampleInputPassword1" onChange={(e)=>{setlName(e.target.value)}}/>
</div>
<div className="mb-3">
  <input type="email" className=" inp  w-100" placeholder='أدخل بريدك الإلكتروني' id="exampleInputPassword1"  onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
<div className="mb-3"> 
<input type="number" className=" inp w-100" placeholder='أدخل رقم الهاتف الخاص بك'id="exampleInputPassword1"  onChange={(e)=>{setPhone(e.target.value)}}/>
  </div>  <div className="mb-3">
    
    <input type="password" className=" inp px-2 w-100"  placeholder='أدخل كلمة المرور الخاصة بك' id="exampleInputPassword1"onChange={(e)=>{setPass(e.target.value)}} />
    <div className="form-check">
    <input type="radio" className='m-2' />
        <a href=' ' className='text-decoration-none anchor mt-2 text-white'>وافق علي <span>شروط الخدمه</span> وسياسه الخصوصيه <span>الخاصه بك</span></a>
       
      </div>
 <button className='mt-4 signup-sub w-100' type="submit" onClick={()=>{handleInp()}}>تسجيل جديد </button>
  </div>
    </div>

      <div>
    
      </div>
    </form>
    </div>
</div>
</div>
</div>

</>
  )
}

export default Signup

