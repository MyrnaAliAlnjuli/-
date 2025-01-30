import React, { useState } from 'react';
import code from '../assests/code.png';
import arrow from '../assests/Vector.png';
import '../style/forgot.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assests/logo.png'

function Code() {
  const [codeOne, setOne] = useState("");
  const [codeTwo, setTwo] = useState("");
  const [codeThree, setThree] = useState("");
  const [codeFour, setFour] = useState("");
  const navigate =useNavigate()
  const Email= JSON.parse(localStorage.getItem("email"))

  const handleForm = (e) => {
    e.preventDefault();
  }
    const handleCode = () => {
        if (!codeOne || !codeTwo || !codeThree || !codeFour) {
            Swal.fire("يرجى إدخال جميع أرقام الكود."); 
            console.log(Email.identifier);
            return;
          }
      
          const codes = {
            identifier: Email.identifier,
            code: `${codeOne}${codeTwo}${codeThree}${codeFour}`,
          };
          console.log(codes)
      
          axios
            .post("https://dalil.mlmcosmo.com/api/verify-code", codes)
            .then((res) => {
              Swal.fire(res.data.message); 
              const userCode = {
                code:codes.code
              }
              localStorage.setItem("Code" ,JSON.stringify(userCode));
              setTimeout(()=>{navigate('/reseat')},2000) 
            })
            .catch((error) => {
              const errorMessage = error.response.data.message ;
              Swal.fire(errorMessage);
            });
        };
      
   const repeatCode =()=>{
    const emailUser = {
        identifier:Email.identifier
    }
    axios.post("https://dalil.mlmcosmo.com/api/forgot-password",emailUser).then((res)=>{console.log(res.data)})
    .catch((error)=>{
   console.log(error)
    })
   } 

  return (
<div className="code vh-100 text-white">
<div className="container pt-4 "> 
       <div className="row  d-flex justify-content-center align-items-center">
       <Link className="navbar-brand logo d-flex  justify-content-end"  to="/ ">
        دليل المدينه <img src={logo} alt=''/>
    </Link>
          <div className="col-lg-6 text-center mb-4 mb-lg-0 pt-5">
              <h1 className='custom newAccount text-white' >ادخل رمز التحقق</h1>
            </div>
            <div className=" d-flex justify-content-center flex-column align-items-center  col-lg-6 pt-5 codeform">
              <div className="text-forgot" dir='rtl'>
                <Link className="mb-5 d-block text-white" to="/">
                  <img src={arrow} alt="back" className="p-2 text-white" />
                  الرجوع لتسجيل الدخول
                </Link>
                <p className="text-par text-white">
                  دخل الرمز الذي أرسلناه إلى رقمك 7698234***
                </p>
              </div>
              <form onSubmit={handleForm} className=''>
                <div className="d-flex flex-column justify-content-center flex-column align-items-end">
                <div className="row g-3 justify-content-center">
  <div className="col-3 col-md-2 col-lg-3">
    <input
      type="number"
      className="form-control fs-3 fw-bold text-center inpCode"

      onChange={(e) => setOne(e.target.value)}
    />
  </div>
  <div className="col-3 col-md-2 col-lg-3">
    <input
      type="number"
      className="form-control fs-3 fw-bold text-center inpCode"

      onChange={(e) => setTwo(e.target.value)}
    />
  </div>
  <div className="col-3 col-md-2 col-lg-3">
    <input
      type="number"
      className="form-control fs-3 fw-bold text-center inpCode"
  
      onChange={(e) => setThree(e.target.value)}
    />
  </div>
  <div className="col-3 col-md-2 col-lg-3">
    <input
      type="number"
      className="form-control fs-3 fw-bold text-center inpCode"
     
      onChange={(e) => setFour(e.target.value)}
    />
  </div>
</div>

<button className="text-white btn-forgot w-100" type="submit" onClick={()=>{handleCode()}} >
                    التالي
                  </button>

               <span style={{cursor:'pointer',margin:'auto',padding:'2px'}}><p onClick={()=>{repeatCode()}} style={{color:'white'}}>اعد ارسال الكود </p></span>
                </div>
              </form>
            </div>

          </div>
       </div>
</div>

 
  
  );
}

export default Code;
