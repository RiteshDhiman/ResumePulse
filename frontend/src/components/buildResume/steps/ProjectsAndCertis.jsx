import React, { useContext, useEffect, useState } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"

function ProjectsAndCertis() {
  const { data, setData, currentStep, handleStep } = useContext(StepBarContext);
  const [projectArray, setProjectArray] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    let title = data.title;
    let subtitle = data.subtitle;
    let desc = data.desc;
    let year = data.year;


    if (title == undefined && subtitle == undefined && desc == undefined && year == undefined) {
      alert("Input fields are empty !")
    } else {
      setProjectArray([
        ...projectArray, {
          title,
          subtitle,
          desc,
          year
        }
      ])
    }

  }

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className='container bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10'
    >

      <div className="row w-full gap-20 mb-5 justify-start flex ">
        <div className='left p-6 pb-0 w-3/5 '>
          <div className='heading text-white underline text-2xl '>Projects and Certifications</div>
        </div>

      </div>
      <div className='row px-6 w-full flex justify-between items-center'>
        <div className="degree w-2/5 relative my-4">
          <input placeholder="Enter Project Title"
            onChange={handleChange}
            value={data['title'] || ''}
            name='title'
            type="text"
            className="peer pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="title"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Project Title
          </label>
        </div>
        <div className="school_college w-2/5 relative my-4 ">
          <input placeholder="Enter Subtitle"
            onChange={handleChange}
            value={data['subtitle'] || ''}
            name='subtitle'
            type="text"
            className="peer pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="subtitle"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Subtitle
          </label>
        </div>
      </div>

      <div className='row px-6 w-full flex justify-between items-center'>
        <div className="percentage_cgpa w-2/5 relative my-4 ">
          <input placeholder="Enter description"
            onChange={handleChange}
            value={data['desc'] || ''}
            name='desc'
            type="text"
            className="peer pr-2 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="desc"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Description
          </label>
        </div>
        <div className="percentage_cgpa w-2/5 relative my-4 ">
          <input placeholder="Enter year"
            onChange={handleChange}
            value={data['year'] || ''}
            name='year'
            type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/Year.png')] pr-2 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="year"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Year
          </label>
        </div>


      </div>

      <div className='row p-5 w-full flex justify-center items-center'>
        <button onClick={handleClick} className='bg-[#66A947] text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
      </div>


      {/* TABLE */}
      <div className='row px-6 w-full rounded-t-2xl border-b-[1.5px] border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
        <div className="my-4 text-white ">
          Project Title
        </div>
        <div className="my-4 text-white ">
          Subtitle
        </div>
        <div className="my-4 text-white ">
          Description
        </div>
        <div className="my-4 text-white ">
          Year
        </div>
      </div>

      {
        projectArray.map((project, index) => {
          return (
            <div key={index} className='row px-6 w-full border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
              <div className="my-4 text-white ">
                {project.title}
              </div>
              <div className="my-4 text-white ">
                {project.subtitle}
              </div>
              <div className="my-4 text-white ">
                {project.desc}
              </div>
              <div className="my-4 text-white ">
                {project.year}
              </div>
            </div>
          );
        })
      }






    </motion.div>
  )
}

export default ProjectsAndCertis
