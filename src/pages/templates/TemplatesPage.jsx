import React from 'react'
import Templates from '../../components/templates/Templates'
import Navbar from '../../components/navbar/Navbar'

function TemplatesPage() {
  return (
    
    <>
      <Navbar/>
      <div className='h-full w-full flex-col flex justify-between gap-10 items-center bg-[#000726] p-10'>
      <div className='text-white font-krona text-4xl w-1/4'>
        Top Choices
      </div>
      <div className='w-1/3'>
        <Templates />
      </div>
      <div className=' h-[0.5px] w-11/12 bg-white mb-5'></div>
      <div className="template-grid w-10/12 flex flex-col justify-evenly gap-10 items-center">
        <div className='row flex justify-between gap-10 items-center'>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
        </div>
        <div className='row flex justify-between gap-10 items-center'>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
        </div>
        <div className='row flex justify-between gap-10 items-center'>
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
