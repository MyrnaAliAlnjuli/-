import React, { useEffect, useState } from "react";
import profile_hero from "../assests/profile-hero.png";
import profile from "../assests/profile.png";
import "../style/profile.css";
import { Toaster, toast } from 'react-hot-toast';
import axios from "axios";

function Profile() {
  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    Authorization: `Bearer ${token}`,
  };
const [profile,setProfile] =useState({});
  const [isEditable, setIsEditable] = useState(false);
  useEffect(()=>{
axios.get("https:\\dalil.mlmcosmo.com/api/profile",{headers}).then((res)=>{setProfile(res.data)
  console.log(res.data)
}).catch((error)=>{console.log(error)})
  },[])

  const handleSave = () => {

  };

  return (
    <div className="container mt-5" dir="rtl">
      <div className="position-relative">
        <img src={profile_hero} alt="profile" className="container" />
        <img src={profile} className="profile" alt="" />
      </div>
      <h1 className="mt-4">الصفحه الشخصيه</h1>
      <div className="userInfo container py-4">
        <form>
          <div className="row">
            <div className="col d-flex flex-column">
              <label className="text-center">الاسم بالكام </label>
              <input
                type="text"
                className="inp-name text-center"
                name="name"
value={profile.name}
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-flex flex-column">
              <label> رقم الهاتق</label>
              <input
                type="number"
                className="inp-phone text-center"
                name="phone"
value={profile.phone}
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-flex flex-column">
              <label>الايميل  </label>
              <input
                type="email"
                className="inp-email text-center"
                name="email"
value={profile.email}
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4 ">
            {!isEditable ? (
              <button
                type="button"
                className="btn btn-primary mx-2 d-flex justify-content-center save-edit text-center"
                onClick={() => setIsEditable(true)}
              >
                تعديل
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success mx-2 save-edit text-center"
                onClick={handleSave}
              >
                حفظ التعديلات
              </button>
            )}
          </div>
          <Toaster position="top-center"  reverseOrder={false}></Toaster>
        </form>
      </div>
    </div>
  );
}

export default Profile;
