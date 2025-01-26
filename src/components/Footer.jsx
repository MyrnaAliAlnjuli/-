import React from 'react'
import '../style/footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
<div className='footer py-4'> 
   <div className='container d-flex' dir='rtl'>
<div className="row  d-flex  justify-content-center">
        <div className="col-lg-3 col-md-6 d-flex text-cenetr flex-column ">
        <h4 className='my-4'>دليل المدينه </h4>
  <p className='paragraph'>
"هذا نص وهمي يُستخدم لأغراض التصميم
والعرض. الغرض منه هو ملء المساحات
النصية لإظهار الشكل النهائي للتصميم قبل إضافة المحتوى الفعلي</p>
         
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h4 className='my-4 text-white'>القائمه</h4>
<div className='d-flex flex-column'>
<a href=" " className="text-decoration-none text-white">الرئسيه</a>
          <Link to="/profile"  className="text-decoration-none text-white ">الصفحه الشخصيه</Link>
          <a href=" "  className="text-decoration-none text-white">المفضله</a>
</div>

        </div>
        <div className="col-lg-3 col-md-6 ">
        <h4 className='my-4'>معلومات</h4>
         <div className='links d-flex flex-column'>
         <a href=" "  className="text-decoration-none text-white">الاماكن </a>
          <a href=" "  className="text-decoration-none text-white">الدعم</a>
          <a href=" "  className="text-decoration-none text-white">البنود</a>
          <a href=" "  className="text-decoration-none text-white">الخصوصيه</a>

         </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h1 className='my-4 text-white' >اخر اخبارنا </h1>
          <form action="" className='d-flex'>
            <input type="email" className='email-inp text-center fw-bold' value='ادخل بريدك الالكتروني ' />
            <button className='foot-btn text-white'>اشتراك</button>
          </form>
        </div>
      </div>
</div></div>
  )
}

export default Footer
