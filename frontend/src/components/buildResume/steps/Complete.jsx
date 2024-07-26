import React, { useEffect } from 'react'
import { easeInOut, motion } from "framer-motion"
import { StepBarContext } from '../contexts/StepBarContext'
import { useContext } from 'react';
import { useSelector } from 'react-redux';


function Complete() {
  const { currentStep, handleStep } = useContext(StepBarContext);
  const sliceData = useSelector((state) => state.form)
  const personalData = sliceData.personal;
  const academicsData = sliceData.academics;


  return (
    <>
      <div className='w-full mb-6 px-10 flex justify-between items-center'>
        <button onClick={() => handleStep('')} className={`' bg-white text-black py-2 px-4 rounded-full font-semibold cursor-pointer ${currentStep == 1 ? ' bg-opacity-50 cursor-not-allowed' : 'hover:bg-[#ababab] transition duration-300 ease-in-out active:bg-[#454545] active:text-white'} `}>Back</button>
        <button className='bg-[#66A947] text-white py-2 px-4 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Submit</button>
      </div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='container mb-10 bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10'>

        <div className=" w-full bg-red-500 gap-20 mb-5 justify-start flex flex-col items-center ">

          <div className='text-white underline text-2xl'>Preview</div>
          </div>


          <div className='container bg-blue-300 gap-16 flex flex-col'>
            <div className="personal w-full flex flex-col justify-start">
              <div className='text-white underline text-2xl mb-4'>Personal Details</div>


              <div className='grid grid-cols-4 w-full mb-4'>

                <div className='text-white text-xl mr-5'>Name:</div>
                <div className='text-white text-xl'>{personalData.name}</div>

                <div className='text-white text-xl mr-5'>Email:</div>
                <div className='text-white text-xl'>{personalData.email}</div>

              </div>


              <div className='grid grid-cols-4 w-full mb-4'>
                <div className='text-white text-xl mr-5'>Phone number:</div>
                <div className='text-white text-xl'>{personalData.phone}</div>

                <div className='text-white text-xl mr-5'>Location:</div>
                <div className='text-white text-xl'>{personalData.location}</div>
              </div>


              <div className='grid grid-cols-4 w-full mb-4'>

                <div className='text-white text-xl mr-5'>Github:</div>
                <div className='text-white text-xl'>{personalData.github}</div>

                <div className='text-white text-xl mr-5'>Linkedin:</div>
                <div className='text-white text-xl'>{personalData.linkedin}</div>

              </div>


              <div className='grid grid-cols-2 w-1/2 mb-4'>
                <div className='text-white text-xl mr-5'>Portfolio:</div>
                <div className='text-white text-xl'>{personalData.portfolio}</div>
              </div>
            </div>




            <div className="academics w-full flex flex-col justify-start">
              <div className='text-white underline text-2xl mb-4'>Academics</div>

              <div className='grid grid-cols-4 w-full mb-4'>
                <div className='text-white text-xl mr-5 underline'>Degree</div>
                <div className='text-white text-xl mr-5 underline'>School/College</div>
                <div className='text-white text-xl mr-5 underline'>Percentage/CGPA</div>
                <div className='text-white text-xl mr-5 underline'>Year</div>
              </div>

              <div className='grid grid-cols-4 w-full mb-4'>
                {/* {academicsData.education.map((edu, index) =>
                  <div key={index}>
                    <div>{edu.degree}</div>
                    <div>{edu.degree}</div>
                    <div>{edu.degree}</div>
                  </div>
                )} */}

              </div>
            </div>


            <div className="skills flex justify-center items-center">
              <div className='text-white underline text-2xl mb-4 w-1/12 '>Skills: </div>
              <div className='text-white flex justify-start gap-5 items-center text-xl mb-4 w-11/12  '>
                  {academicsData.skills.map((skill, index) => index!= (academicsData.skills.length - 1) ? <div key={index}>{skill},</div> : <div key={index}>{skill}</div>)}
                  
              </div>
            </div>


            <div className="academics w-full flex flex-col justify-start">
              <div className='text-white underline text-2xl mb-4'>Projects</div>

              <div className='grid grid-cols-4 w-full mb-4'>
                <div className='text-white text-xl mr-5 underline'>Project name</div>
                <div className='text-white text-xl mr-5 underline'>Project link</div>
                <div className='text-white text-xl mr-5 underline'>Description</div>
              </div>

              <div className='grid grid-cols-4 w-full mb-4'>
                {/* {academicsData.education.map((edu, index) =>
                  <div key={index}>
                    <div>{edu.degree}</div>
                    <div>{edu.degree}</div>
                    <div>{edu.degree}</div>
                  </div>
                )} */}

              </div>
            </div>


            <div className="academics w-full flex flex-col justify-start">
              <div className='text-white underline text-2xl mb-4'>Certifications</div>

              <div className='grid grid-cols-4 w-full mb-4'>
                <div className='text-white text-xl mr-5 underline'>Certification name</div>
                <div className='text-white text-xl mr-5 underline'>Organization name</div>
                <div className='text-white text-xl mr-5 underline'>Certification Date</div>
              </div>

              <div className='grid grid-cols-4 w-full mb-4'>
                {/* {academicsData.education.map((edu, index) =>
                  <div key={index}>
                    <div>{edu.degree}</div>
                    <div>{edu.degree}</div>
                    <div>{edu.degree}</div>
                  </div>
                )} */}

              </div>
            </div>


            <div className="academics w-full flex flex-col justify-start">
              <div className='text-white underline text-2xl mb-4'>Experience</div>

              <div className='grid grid-cols-4 w-full mb-4'>
                <div className='text-white text-xl mr-5 underline'>Company</div>
                <div className='text-white text-xl mr-5 underline'>Role</div>
                <div className='text-white text-xl mr-5 underline'>Description</div>
                <div className='text-white text-xl mr-5 underline'>Duration</div>
              </div>

              <div className='grid grid-cols-4 w-full mb-4'>
                {/* {academicsData.education.map((edu, index) =>
                  <div key={index}>
                    <div>{edu.degree}</div>
                    <div>{edu.degree}</div>
                    <div>{edu.degree}</div>
                  </div>
                )} */}

              </div>
            </div>




          </div>
      </motion.div>
    </>

  )
}

export default Complete
