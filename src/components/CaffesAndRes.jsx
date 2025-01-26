import React from 'react'
import '../style/caffe.css'
import {Link} from 'react-router-dom'
function CaffesAndRes() {
  return (
    <div className='container'>
      <div className="row mt-5">
      <div className="col">
<Link to ='/caffees'className='text-decoration-none'>       
        <div className="card caffe">
     <div className="text-filter d-flex justify-content-end align-items-center  flex-column h-100 pb-2 mb-5">
     <h3 className='text-white'>الكافيهات</h3>
            <p className='text-white'>
            البحث عن  والأماكن و الوجهات الأكثر شعبية
 لدينا</p>
            <button className='view-filter text-center '> عرض جميع  الكافيهات</button>
     </div>
            </div>
     
        </Link>
        </div>
        <div className="col">
<Link to={'/restourants'} className='text-decoration-none'>
<div className="card res">
       <div className="text-filter d-flex justify-content-end align-items-center  flex-column h-100 pb-2 mb-5" >
           <h3 className='text-white'>المطاعم</h3>
            <p className='text-white'>البحث عن  والأماكن و الوجهات الأكثر شعبية
            لدينا</p>
            <button className=' view-filter text-center'>عرض جميع المطاعم</button>
         </div>
            </div></Link>
        </div>
      </div>
    </div>
  )
}

export default CaffesAndRes
