import React from 'react';
import '../style/caffe.css';
import { Link } from 'react-router-dom';

function CaffesAndRes() {
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-12 col-md-6 col-lg-5 mb-4">
          <Link to="/caffees" className="text-decoration-none">
            <div className="card caffe">
              <div className="text-filter d-flex justify-content-center align-items-center flex-column h-100 p-4">
                <h3 className="text-white">الكافيهات</h3>
                <p className="text-white text-center">
                  البحث عن الأماكن والوجهات الأكثر شعبية لدينا
                </p>
                <button className="view-filter">عرض جميع الكافيهات</button>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-12 col-md-6 col-lg-5 mb-4">
          <Link to="/restourants" className="text-decoration-none">
            <div className="card res">
              <div className="text-filter d-flex justify-content-center align-items-center flex-column h-100 p-4">
                <h3 className="text-white">المطاعم</h3>
                <p className="text-white text-center">
                  البحث عن الأماكن والوجهات الأكثر شعبية لدينا
                </p>
                <button className="view-filter">عرض جميع المطاعم</button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CaffesAndRes;
