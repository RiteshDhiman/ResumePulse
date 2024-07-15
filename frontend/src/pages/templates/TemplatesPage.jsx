import React from 'react'
import Templates from '../../components/templates/Templates'
import Navbar from '../../components/navbar/Navbar'
import '../../components/herobanner/star.scss';

function TemplatesPage() {
  return (

    <>
      <div className='h-full w-full flex-col flex justify-between gap-5 items-center bg-gradient-to-b from-[#000931] to-[#00020C] p-8'>

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

        <div className='text-white font-krona text-center md:text-4xl md:w-1/2 text-2xl w-full mb-3'>
          Top Choices
        </div>
        <div className='w-full flex justify-center items-center '>
          <Templates />
        </div>
        <div className=' h-[0.5px] w-11/12 bg-white '></div>
        <div className="template-grid w-11/12 md:w-5/6 lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 lg:gap-10">
          <img src="/images/templates/template1.png" alt="" srcset="" />
          <img src="/images/templates/template1.png" alt="" srcset="" />
          <img src="/images/templates/template1.png" alt="" srcset="" />
          <img src="/images/templates/template1.png" alt="" srcset="" />
          <img src="/images/templates/template1.png" alt="" srcset="" />
          <img src="/images/templates/template1.png" alt="" srcset="" />
          <img src="/images/templates/template1.png" alt="" srcset="" />
          <img src="/images/templates/template1.png" alt="" srcset="" />
          <img src="/images/templates/template1.png" alt="" srcset="" />
        </div>


      </div>
    </>
  )
}

export default TemplatesPage
