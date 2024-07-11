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

        <div className='text-white font-krona text-center md:text-4xl md:w-1/2 text-xl w-full mb-3'>
          Top Choices
        </div>
        <div className='w-full flex justify-center items-center '>
          <Templates />
        </div>
        <div className=' h-[0.5px] w-11/12 bg-white '></div>
        <div className="template-grid w-10/12 flex flex-col justify-evenly gap-[2vw] md:gap-10 items-center">
          <div className='row flex justify-between gap-[2vw] md:gap-10 items-center'>
            <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
            <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
            <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          </div>
          <div className='row flex justify-between gap-[2vw] md:gap-10 items-center'>
            <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
            <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
            <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          </div>
          <div className='row flex justify-between gap-[2vw] md:gap-10 items-center'>
            <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
            <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
            <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          </div>
        </div>


      </div>
    </>
  )
}

export default TemplatesPage
