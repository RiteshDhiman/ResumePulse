import React from 'react'
import Templates from '../../components/templates/Templates'
import Navbar from '../../components/navbar/Navbar'
import '../../components/herobanner/star.scss';

function TemplatesPage() {

  const templates = [
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
  ]
  return (

    <>
      <div className='h-full w-full flex-col flex justify-between gap-5 items-center bg-gradient-to-b from-[#000931] to-[#00020C] p-8'>

        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className='text-white font-krona text-center md:text-4xl md:w-1/2 text-2xl w-full mb-3'>
          Top Choices
        </div>
        <div className='w-full mt-5 flex justify-center items-center '>
          <Templates />
        </div>
        <div className=' h-[0.5px] w-11/12 bg-white '></div>
        {/* <div className="template-grid w-11/12 md:w-5/6 lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 lg:gap-10">
          
        </div> */}

        <div className='mt-5 text-white font-krona text-center md:text-left md:text-3xl text-xl w-9/12'>
          All Templates
        </div>
        <div class="grid grid-cols-1 px-[4vw] md:p-0 gap-6 md:gap-6 md:grid-cols-2 lg:grid-cols-3 w-9/12 ">
          {templates.map((template, index) => <div key={index}><img src={template} alt="template" /></div>)}
        </div>

        <div className="w-full flex justify-center mt-5">
          <button className='bg-[#66A947] text-white text-2xl py-5 px-11 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Show More</button>
        </div>
      </div>
    </>
  )
}

export default TemplatesPage
