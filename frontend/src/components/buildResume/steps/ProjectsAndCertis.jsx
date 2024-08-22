import React, { useContext, useEffect, useState } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux'
import { setProjects } from '../../../store/formSlice';

function ProjectsAndCertis() {
  const { currentStep, handleStep } = useContext(StepBarContext);
  const dispatch = useDispatch();
  const projectSliceData = useSelector((state) => state.form.projects)

  const [projectsData, setProjectsData] = useState({
    projects: [...projectSliceData.projects],
    certifications: [...projectSliceData.certifications]
  })

  const [projectObj, setProjectObj] = useState({
    name: '',
    link: '',
    description: '',
  })

  const [certiObj, setCertiObj] = useState({
    cert_name: '',
    cert_organization: '',
    cert_date: '',
  })


  const handleProjectsAdd = () => {
    setProjectsData({ ...projectsData, projects: [...projectsData.projects, projectObj] })
    setProjectObj(
      {
        name: '',
        link: '',
        description: '',
      }
    )
  }

  const handleCertisAdd = () => {
    setProjectsData({ ...projectsData, certifications: [...projectsData.certifications, certiObj] })
    setCertiObj(
      {
        cert_name: '',
        cert_organization: '',
        cert_date: '',
      }
    )
  }


  const handleProjectChange = (e) => {
    setProjectObj({ ...projectObj, [e.target.name]: e.target.value })
  }
  const handleCertiChange = (e) => {
    setCertiObj({ ...certiObj, [e.target.name]: e.target.value })
  }

  const nextPage = () => {
    dispatch(setProjects(projectsData));
    handleStep('next')
  }
  const prevPage = () => {
    dispatch(setProjects(projectsData));
    handleStep('')
  }

  const deleteProjects = (value) => {
    setProjectsData((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((item, index) => index !== value),
    }));
  };

  const deleteCerti = (value) => {
    setProjectsData((prevState) => ({
      ...prevState,
      certifications: prevState.certifications.filter((item, index) => index !== value),
    }));
  };




  return (
    <>
      <div className='w-full mb-6 px-10 flex justify-between items-center'>
        <button onClick={prevPage} className={`' bg-white text-black py-2 px-4 rounded-full font-semibold cursor-pointer ${currentStep == 1 ? ' bg-opacity-50 cursor-not-allowed' : 'hover:bg-[#ababab] transition duration-300 ease-in-out active:bg-[#454545] active:text-white'} `}>Back</button>
        <button onClick={nextPage} className='bg-[#66A947] text-white py-2 px-4 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Save and Continue</button>
      </div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='container bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10'>
        <div className="row w-full gap-20 mb-5 justify-start flex ">
          <div className='left p-6 pb-0 w-3/5 '>
            <div className='heading text-white underline text-2xl '>Projects</div>
          </div>

        </div>
        <form className='grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-x-24 px-6'>
          <div className="degree w-full relative my-4">
            <input placeholder="Enter project name"
              onChange={handleProjectChange}
              value={projectObj.name}
              name='name'
              id='name'
              type="text"
              autoComplete='off'
              className="peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/education/Degree.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label htmlFor="name"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Project name
            </label>
          </div>
          <div className="school_college w-full relative my-4 ">
            <input placeholder="Enter project link"
              onChange={handleProjectChange}
              value={projectObj.link}
              name='link'
              id='link'
              type="text"
              className="peer pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label htmlFor="link"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Project link
            </label>
          </div>
          <div className="percentage_cgpa w-full relative my-4 ">
            <input placeholder="Enter description"
              onChange={handleProjectChange}
              value={projectObj.description}
              name='description'
              id='description'
              type="text"
              className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/Percentage.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label htmlFor="description"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Description
            </label>
          </div>
        </form>

        <div className='row p-5 w-full flex justify-center items-center'>
          <button onClick={handleProjectsAdd} className='bg-[#66A947] text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
        </div>


        {/* TABLE */}

        <table className='text-white w-full bg-slate-950 rounded-xl'>
          <tr className='h-[50px] border-b-[1px] border-white'>
            <th className='w-1/4'>Project Name</th>
            <th className='w-1/3'>Description</th>
            <th className='w-1/4'>Project Link</th>
            <th className='w-1/6'>Action</th>
          </tr>

          {
            projectsData.projects.map((project,index)=>{
              return(
                <tr key={index} className='text-center w-full text-sm'>
                  <td className='py-4 w-1/4'>{project.name}</td>
                  <td className='py-4 max-w-1/3'>{project.description}</td>
                  <td className='py-4 w-1/4'>{project.link}</td>
                  <td className='py-4 w-1/6'><button className='bg-red-600 p-2 rounded-lg text-sm' onClick={()=>deleteProjects(index)}>Delete</button></td>
                </tr>
              )
            })
          }
        </table>

      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='container bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10 mt-10'>
        <div className="row w-full gap-20 mb-5 justify-start flex ">
          <div className='left p-6 pb-0 w-3/5 '>
            <div className='heading text-white underline text-2xl '>Certifications</div>
          </div>

        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-x-24 px-6'>
          <div className="degree w-full relative my-4">
            <input placeholder="Enter certification name"
              onChange={handleCertiChange}
              value={certiObj.cert_name}
              name='cert_name'
              id='cert_name'
              type="text"
              autoComplete='off'
              className="peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/education/Degree.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label htmlFor="cert_name"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Certification name
            </label>
          </div>
          <div className="school_college w-full relative my-4 ">
            <input placeholder="Enter organization name"
              onChange={handleCertiChange}
              value={certiObj.cert_organization}
              name='cert_organization'
              id='cert_organization'
              type="text"
              autoComplete='off'
              className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/School.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label htmlFor="cert_organization"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Organization name
            </label>
          </div>
          <div className="percentage_cgpa w-full relative my-4 ">
            <input placeholder="Enter certification date"
              onChange={handleCertiChange}
              value={certiObj.cert_date}
              name='cert_date'
              id='cert_date'
              type="date"
              autoComplete='off'
              className="peer  pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label htmlFor="cert_date"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Certification date
            </label>
          </div>
        </div>

        <div className='row p-5 w-full flex justify-center items-center'>
          <button onClick={handleCertisAdd} className='bg-[#66A947] text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
        </div>




        {/* TABLE */}

        <table className='text-white w-full bg-slate-950 rounded-xl'>
          <tr className='h-[50px] border-b-[1px] border-white'>
            <th className='w-1/4'>Name</th>
            <th className='w-1/3'>Organization</th>
            <th className='w-1/6'>Date</th>
            <th className='w-1/6'>Action</th>
          </tr>

          {
            projectsData.certifications.map((certi,index)=>{
              return(
                <tr key={index} className='text-center w-full text-sm'>
                  <td className='py-4 w-1/4'>{certi.cert_name}</td>
                  <td className='py-4 w-1/3'>{certi.cert_organization}</td>
                  <td className='py-4 w-1/6'>{certi.cert_date}</td>
                  <td className='py-4 w-1/6'><button className='bg-red-600 p-2 rounded-lg text-sm' onClick={()=>deleteCerti(index)}>Delete</button></td>
                </tr>
              )
            })
          }
        </table>

        {/* <div className='row px-6 w-full rounded-t-2xl border-b-[1.5px] border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
          <div className="my-4 text-white ">
            Name
          </div>
          <div className="my-4 text-white ">
            Organization
          </div>
          <div className="my-4 text-white ">
            Date
          </div>

        </div>

        {
          projectsData.certifications.map((certi, index) => {
            return (

                <div key={index} className='row px-6 w-full border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
                  <div className="my-4 text-white ">
                    {certi.cert_name}
                  </div>
                  <div className="my-4 text-white ">
                    {certi.cert_organization}
                  </div>
                  <div className="my-4 text-white ">
                    {certi.cert_date}
                  </div>
                <button className='text-red-600' onClick={()=>deleteCerti(index)}>Delete</button>
                </div>

            );
          })
        } */}

        
      </motion.div>

    </>


  )
}

export default ProjectsAndCertis
