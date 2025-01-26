import React from 'react';
import logo from'../assests/logo.png';
import '../style/NavBarStyle.css'
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="# "><i class="fa-solid fa-magnifying-glass"></i></a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active  text-white" aria-current="page" to="/favorites"><i class="fa-regular fa-heart"></i></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white" href="# "><i class="fa-regular fa-bell"></i></a>
        </li>
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
        <li className="nav-item">
          <Link className="nav-link active focus  text-white" aria-current="page" to="# ">اتصل بنا </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link focus text-white " to="/restourants">استكشف</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link focus text-white" to="/">الرئسيه</Link>
        </li>
      </ul>
    
    </div>
    <a className="navbar-brand logo text-white" href="# ">
        دليل المدينه <img src={logo} alt=''/>
    </a>
  </div>
 
</nav>
    </div>
  )
}

export default NavBar
