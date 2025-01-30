import React, { useEffect, useState } from "react";
import "../style/bset.css";
import axios from "axios";
import star from "../assests/star.png";
import { Link } from "react-router-dom";

function BastRes() {
  const [topRated, setTopRated] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    axios
      .get("https://dalil.mlmcosmo.com/api/top-rated-places", { headers })
      .then((res) => setTopRated(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [token]);

  return (
    <div className="container pt-5 pb-5" dir="rtl">
      <div className="row pt-5">
        <div className="best_text">
          <h3 className="best">افضل المطاعم</h3>
          <p className="text-white">استكشف افضل الاماكن القريبه منك</p>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {topRated.map((top, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center">
              <Link to={`single/${top.id}`} className="text-decoration-none">
                <div className="card cardBeastRes">
                  <img
                    src={top.cover_image}
                    alt={top.name || "مطعم"}
                    className="card-img-top coverBest"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{top.name}</h5>
                    <div className="rating d-flex align-items-center">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={star} alt="" className="starImg mx-1" />
                      ))}
                      <p className="mb-0">{top.rating}</p>
                    </div>
                    <div className="state d-flex">
                      <p className="card-text">الحالة: {top.status}</p>
                      <span className="px-2">|</span>
                      <p>يغلق الساعة {top.close_at}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BastRes;
