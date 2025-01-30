import React, { useState } from 'react'
import logo from '../assests/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import arrow from '../assests/Vector.png';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../style/reaset.css'
function ReseatPass() {
    const Email =JSON.parse(localStorage.getItem("email"));
    const Code =JSON.parse(localStorage.getItem("Code"));
    console.log(Email.identifier,Code.code);
    const navigate =useNavigate();
    const [showPassword,setShowPassword]=useState([]);
    const [newPass,setNewPass ] =useState("");
    const [repPass ,setRepPass] =useState("");

    const handleForm =(e)=>{
        e.preventDefault();
    } 
const handleInp =()=>{
        if(newPass === repPass && newPass !== "" && repPass !== ""){
          const reseatPass = {identifier:Email.identifier,code:Code.code,password:newPass};
          axios.post("https://dalil.mlmcosmo.com/api/reset-password",reseatPass).then((res)=>{
            Swal.fire(res.data.message);
            navigate('/');
          }).catch((error)=>{Swal.fire(error.res.data.message)})
    }
else{
  Swal.fire("اعد كتابه كلمه السر ")  
}
}
  return (
    <div dir='rtl'>
    <div className='head container pt-4 w-100 mb-4'>
        <a className="navbar-brand logo" href="# ">
        دليل المدينه <img src={logo} alt=''/>
       </a>
</div>
      <div className='content container'>
      <div className='row d-flex'>
      <div className='col d-flex justify-content-center flex-column '>
      <div className='d-flex justify-content-center flex-column  align-items-start'>
    <Link className='mb-4 text-decoration-none text-white' to='/login' >
        <img src={arrow} alt='' className='p-2'/>
        الرجوع لتسجيل الدخول</Link>
    <h1 className='custom'>ادخل كلمه سر  جديده</h1>
    <p className='text-par'>دخل الرمز الذي أرسلناه إلى رقمك ***</p>
</div>
<form action="" onSubmit={handleForm} >
<div className='d-flex flex-column'>
    <div className="inp-group  mb-3 position-relative">
    <input  type={showPassword ? "text" : "password"} className=' mt-4 p-2 form-control postion-relative inpforgot'placeholder='ادخل كلمه المرور الجديده  '
    onChange={(e)=>{setNewPass(e.target.value)}}/>
    <span className='ml-4'  onClick={() => setShowPassword(!showPassword)}
       >
         <i className={showPassword ? "fa-regular fa-eye": "fa-regular fa-eye-slash"}></i>
    </span>
    </div>
    <input type='password' className='inpforgot mt-4 p-2 form-control'placeholder=' اعاده ادخال كلمه المرور 'onChange={(e)=>{setRepPass(e.target.value)}}/>
    <button className='text-white btn-forgot w-100 mb-4' onClick={()=>{handleInp()}} >تغير كلمه المرور </button>
</div>
</form>
      </div>
      <div className='col-lg-6 text-center mb-4 mb-lg-0'>

      </div>

      </div>
     
      </div>

    </div>
  )

}

export default ReseatPass ;
