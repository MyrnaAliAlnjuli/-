import React, { useEffect, useState } from 'react';
import '../style/login.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assests/logo.png'
import AOS from "aos";
import "aos/dist/aos.css";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
useEffect (()=>{
  AOS.init({
    duration: 1000, // مدة التأثير بالميلي ثانية
    once: true, // التأثير يحدث مرة واحدة فقط
  });
})
  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleInp = () => {
    const formData = {
      email: Email,
      password: Pass
    };

    if (Email === "" && Pass === "") {
      Swal.fire("ادخل البيانات");
    } else if (Email === "") {
      Swal.fire("ادخل الايميل");
    } else if (Pass === "") {
      Swal.fire("ادخل كلمه السر");
    } else {
      axios.post("https://dalil.mlmcosmo.com/api/login", formData).then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        console.log("Stored Token:", localStorage.getItem("token"));
        console.log(response.data)
        Swal.fire(response.data.message);
        setTimeout(()=>{
          navigate('/');
        },3000)
      }).catch((error) => {
        Swal.fire(error.response.data.message);
      });
    }
  };

  return (
    <>
      <div className="login py-5">
        <div className="container">
        <Link className="navbar-brand logo d-flex  justify-content-end text-white"  to="/ ">
        دليل المدينه <img src={logo} alt=''/>
        </Link>
          <div className="row align-items-center loginMain mt-4">
            <div className="col-lg-6 text-center mb-4 mb-lg-0 bg-dark" >
              <h1 className='newAccount ml-4' >تسجيل الدخول</h1>
            </div>
            <div className="col-lg-6 divLogin"  data-aos="fade-down">
              <form onSubmit={handleForm} className="p-4" dir='rtl'>
                <h1 className="mb-3 fs-md-5 custom text-white">تسجيل الدخول</h1>
                <p className="mb-4 text-muted text-white" >تسجيل الدخول للوصول إلى حسابك</p>
                <div className="mb-3">
                  <input
                    type="email"
                    className="w-100  p-3 inpform"
                    placeholder="ادخل البريد الالكتروني"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-100 p-3 inpform"
                    placeholder="ادخل كلمه المرور الخاصه بك"
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: "pointer", position: "absolute", top: "50%", left: "8%", transform: "translateY(-50%)" }}
                  >
                    <i className={showPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i>
                  </span>
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <div className='d-flex'>
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe" className="ms-2 text-white">تذكرني</label>
                  </div>
                  <Link to="/forgot" className="text-danger text-decoration-none ">هل نسيت كلمة المرور؟</Link>
                </div>
                <button
                  type="submit"
                  className="sub-login w-100"
                  onClick={handleInp}
                >
                  تسجيل الدخول
                </button>
                <p className="text-center mt-3">
                  ليس لديك حساب؟ <Link to="/signup" className="text-decoration-none signNow text-white" >سجل الآن</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
