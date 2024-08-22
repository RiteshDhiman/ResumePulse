import React, { useEffect } from 'react'
import { easeInOut, motion } from "framer-motion"
import { StepBarContext } from '../contexts/StepBarContext'
import { useContext } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';


function Complete() {
  const { currentStep, handleStep } = useContext(StepBarContext);
  const sliceData = useSelector((state) => state.form)
  const personalData = sliceData.personal;
  const academicsData = sliceData.academics;
  const expData = sliceData.experience;
  const projectsData = sliceData.projects;
  // const apiUrl = process.env.REACT_APP_API_URL;

  // const handleSubmit = async () => {

  //   console.log(sliceData);

  //   try {
  //     const response = await axios.post('http://127.0.0.1:5000/api/build_resume_route', sliceData, {
  //       headers: {
  //         'Content-Type': "application/json",
  //       },
  //     });
  //     console.log('Response:', response.data);

  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //   }

  // };

  const handleSubmit = async () => {
    console.log(sliceData);

    try {
      const response = await axios.post('https://resume-pulse-back.vercel.app/api/build_resume_route', sliceData, {
        responseType: 'blob', // Set response type to blob to handle binary data
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response)
      let filename = `${sliceData.personal.name}_Resume.docx`; // Default filename if not found

      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
      // Create a link element
      const link = document.createElement('a');
      // Set the href to the blob URL
      link.href = url;
      // Set the download attribute to the filename received from the backend
      link.setAttribute('download', filename);
      // Append link to the body
      document.body.appendChild(link);
      // Trigger a click on the link
      link.click();
      // Clean up and remove the link
      link.parentNode.removeChild(link);
      // Revoke the object URL to free up memory
      window.URL.revokeObjectURL(url);


    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <>
      <div className='w-full mb-6 px-10 flex justify-between items-center'>
        <button onClick={() => handleStep('')} className={`' bg-white text-black py-2 px-4 rounded-full font-semibold cursor-pointer ${currentStep == 1 ? ' bg-opacity-50 cursor-not-allowed' : 'hover:bg-[#ababab] transition duration-300 ease-in-out active:bg-[#454545] active:text-white'} `}>Back</button>
        <button onClick={() => handleSubmit()} className='bg-[#66A947] text-white py-2 px-4 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Submit</button>
      </div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='container mb-10 bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10'>

        <div className=" w-full gap-20 mb-5 justify-start flex flex-col items-center ">

          <div className='text-white underline text-2xl'>Preview</div>
        </div>


        <div className='container gap-16 flex flex-col'>
          <div className="personal w-full flex flex-col justify-start">
            <div className='text-white underline text-xl md:text-2xl mb-4'>Personal Details</div>


            <div className='grid grid-cols-4 w-full mb-4'>

              <div className='text-white text-md md:text-xl mr-5'>Name:</div>
              <div className='text-white text-md md:text-xl'>{personalData.name}</div>

              <div className='text-white text-md md:text-xl mr-5'>Email:</div>
              <div className='text-white text-md md:text-xl'>{personalData.email}</div>

            </div>


            <div className='grid grid-cols-4 w-full mb-4'>
              <div className='text-white text-md md:text-xl mr-5'>Phone number:</div>
              <div className='text-white text-md md:text-xl'>{personalData.phone}</div>

              <div className='text-white text-md md:text-xl mr-5'>Location:</div>
              <div className='text-white text-md md:text-xl'>{personalData.location}</div>
            </div>


            <div className='grid grid-cols-4 w-full mb-4'>

              <div className='text-white text-md md:text-xl mr-5'>Github:</div>
              <div className='text-white text-md md:text-xl'>{personalData.github}</div>

              <div className='text-white text-md md:text-xl mr-5'>Linkedin:</div>
              <div className='text-white text-md md:text-xl'>{personalData.linkedin}</div>

            </div>


            <div className='grid grid-cols-2 w-1/2 mb-4'>
              <div className='text-white text-md md:text-xl mr-5'>Portfolio:</div>
              <div className='text-white text-md md:text-xl'>{personalData.portfolio}</div>
            </div>
          </div>




          <div className="academics w-full flex flex-col justify-start">
            <div className='text-white underline text-2xl mb-4'>Academics</div>

            <table className='text-white w-full bg-slate-950 rounded-xl'>
              <tr className='h-[50px] border-b-[1px] border-white'>
                <th className='w-1/4'>Degree</th>
                <th className='w-1/4'>School/College</th>
                <th className='w-1/4'>Percentage/Cgpa</th>
                <th className='w-1/4'>Year</th>
              </tr>

              {
                academicsData.education.map((edu, index) => {
                  return (
                    <tr key={index} className='text-center w-full text-sm'>
                      <td className='py-4 w-1/6'>{edu.degree}</td>
                      <td className='py-4 max-w-1/3'>{edu.school_college}</td>
                      <td className='py-4 w-1/6'>{edu.percentage_cgpa}</td>
                      <td className='py-4 w-1/6'>{edu.year}</td>
                      {/* <td className='py-4 w-1/6'><button className='bg-red-600 p-2 rounded-lg text-sm' onClick={() => deleteSkill(index)}>Delete</button></td> */}
                    </tr>
                  )
                })
              }
            </table>
          </div>


          <div className="academics w-full flex flex-col justify-start">
            <div className='text-white underline text-2xl mb-4'>Skills</div>

            <table className='text-white w-1/4 bg-slate-950 rounded-xl'>
              <tr className='h-[50px] border-b-[1px] border-white'>
                <th className='w-1/2'>Skill</th>
              </tr>

              {
                academicsData.skills.map((skill, index) => {
                  return (
                    <tr key={index} className='text-center w-full text-sm'>
                      <td className='py-4 w-1/6'>{skill}</td>
                      {/* <td className='py-4 w-1/6'><button className='bg-red-600 p-2 rounded-lg text-sm' onClick={() => deleteSkill(index)}>Delete</button></td> */}
                    </tr>
                  )
                })
              }
            </table>
          </div>


          <div className="academics w-full flex flex-col justify-start">
            <div className='text-white underline text-2xl mb-4'>Projects</div>

            <table className='text-white w-full bg-slate-950 rounded-xl'>
              <tr className='h-[50px] border-b-[1px] border-white'>
                <th className='w-1/4'>Project Name</th>
                <th className='w-1/3'>Description</th>
                <th className='w-1/4'>Project Link</th>
              </tr>

              {
                projectsData.projects.map((project, index) => {
                  return (
                    <tr key={index} className='text-center w-full text-sm'>
                      <td className='py-4 w-1/4'>{project.name}</td>
                      <td className='py-4 max-w-1/3'>{project.description}</td>
                      <td className='py-4 w-1/4'>{project.link}</td>
                    </tr>
                  )
                })
              }
            </table>
          </div>


          <div className="academics w-full flex flex-col justify-start">
            <div className='text-white underline text-2xl mb-4'>Certifications</div>
            <table className='text-white w-full bg-slate-950 rounded-xl'>
              <tr className='h-[50px] border-b-[1px] border-white'>
                <th className='w-1/4'>Name</th>
                <th className='w-1/3'>Organization</th>
                <th className='w-1/6'>Date</th>
              </tr>

              {
                projectsData.certifications.map((certi, index) => {
                  return (
                    <tr key={index} className='text-center w-full text-sm'>
                      <td className='py-4 w-1/4'>{certi.cert_name}</td>
                      <td className='py-4 w-1/3'>{certi.cert_organization}</td>
                      <td className='py-4 w-1/6'>{certi.cert_date}</td>
                    </tr>
                  )
                })
              }
            </table>

          </div>


          <div className="academics w-full flex flex-col justify-start">
            <div className='text-white underline text-2xl mb-4'>Experience</div>

            <table className='text-white w-full bg-slate-950 rounded-xl'>
              <tr className='h-[50px] border-b-[1px] border-white'>
                <th className='w-1/3'>Name</th>
                <th className='w-1/3'>Role</th>
                <th className='w-1/3'>Date</th>
              </tr>

              {
                expData.experience.map((exp, index) => {
                  return (
                    <tr key={index} className='text-center w-full text-sm'>
                      <td className='py-4 w-1/4'>{exp.company_name}</td>
                      <td className='py-4 w-1/4'>{exp.role}</td>
                      {/* <td className='py-4 w-1/4'>{exp.description}</td> */}
                      <td className='py-4 w-1/4'>{exp.duration}</td>
                    </tr>
                  )
                })
              }
            </table>
          </div>




        </div>
      </motion.div>
    </>

  )
}

export default Complete
