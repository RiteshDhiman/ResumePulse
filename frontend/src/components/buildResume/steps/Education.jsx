import React, { useContext, useEffect, useState } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { motion } from 'framer-motion';
import {useSelector, useDispatch} from 'react-redux'
import { setEducation, setPersonal } from '../../../store/formSlice';

function Education() {
  const {currentStep, handleStep } = useContext(StepBarContext);
  const [eduObj, setEduObj] = useState({
    degree : '',
    percentage_cgpa : '',
    school_college : '',
    year : '',
  })

  const [skillObj, setSkillObj] = useState('')

  const dispatch = useDispatch();

  const [academicsData, setAcademicsData] = useState({
    education:[],
    skills:[]
  })


  const handleEduAdd = () => {
    setAcademicsData({...academicsData, education : [...academicsData.education, eduObj]})
    setEduObj(
      {
        degree : '',
        percentage_cgpa : '',
        school_college : '',
        year : '',
      }
    )
  }
  const handleSkillsAdd = () => {
    setAcademicsData({...academicsData, skills : [...academicsData.skills, skillObj]})
    setSkillObj('')
  }

  const handleEduChange = (e) => {
    setEduObj({...eduObj, [e.target.name] : e.target.value})
  }
  const handleSkillChange = (e) => {
    setSkillObj(e.target.value)
  }

  const nextPage = () => {
    dispatch(setEducation(academicsData));
    handleStep('next')
  }

  return (
    <>

    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className='container bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10'>
      <div className="row w-full gap-20 mb-5 justify-start flex ">
        <div className='left p-6 pb-0 w-3/5 '>
          <div className='heading text-white underline text-2xl '>Education</div>
        </div>

      </div>
      <div className='row px-6 w-full flex justify-between items-center'>
        <div className="degree w-2/5 relative my-4">
          <input placeholder="Enter Degree"
            onChange={handleEduChange}
            value={eduObj.degree}
            // value={item.personal.name}
            name='degree'
            type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/education/Degree.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="degree"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Degree
          </label>
        </div>
        <div className="school_college w-2/5 relative my-4 ">
          <input placeholder="Enter School/College"
            onChange={handleEduChange}
            value={eduObj.school_college}
            name='school_college'
            type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/School.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="school_college"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            School/College
          </label>
        </div>
      </div>

      <div className='row px-6 w-full flex justify-between items-center'>
        <div className="percentage_cgpa w-2/5 relative my-4 ">
          <input placeholder="Enter your Percentage/CGPA"
            onChange={handleEduChange}
            value={eduObj.percentage_cgpa}
            name='percentage_cgpa'
            type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/Percentage.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="percentage_cgpa"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Percentage/CGPA
          </label>
        </div>

        <div className="year w-2/5 relative my-4 ">
          <input placeholder="Enter Year"
            onChange={handleEduChange}
            value={eduObj.year}
            name='year'
            type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/Year.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="year"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Year
          </label>
        </div>
      </div>

      <div className='row p-5 w-full flex justify-center items-center'>
        <button onClick={handleEduAdd} className='bg-[#66A947] text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
      </div>


      {/* TABLE */}
      <div className='row px-6 w-full rounded-t-2xl border-b-[1.5px] border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
        <div className="my-4 text-white ">
          Degree
        </div>
        <div className="my-4 text-white ">
          School/College
        </div>
        <div className="my-4 text-white ">
          Percentage/CGPA
        </div>
        <div className="my-4 text-white ">
          Year
        </div>
      </div>

      {
        academicsData.education.map((edu, index) => {
          return (
            <div key={index} className='row px-6 w-full border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
              <div className="my-4 text-white ">
                {edu.degree}
              </div>
              <div className="my-4 text-white ">
                {edu.school_college}
              </div>
              <div className="my-4 text-white ">
                {edu.percentage_cgpa}
              </div>
              <div className="my-4 text-white ">
                {edu.year}
              </div>
            </div>
          );
        })
      }

    </motion.div>
    <div className='w-full mb-2 px-10 flex justify-between items-center'>
          <button onClick={() => handleStep('')} className={`' bg-white text-black py-2 px-4 rounded-full font-semibold cursor-pointer ${currentStep == 1 ? ' bg-opacity-50 cursor-not-allowed' : 'hover:bg-[#ababab] transition duration-300 ease-in-out active:bg-[#454545] active:text-white'} `}>Back</button>
          <button onClick={nextPage} className='bg-[#66A947] text-white py-2 px-4 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Save and Continue</button>
        </div>
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className='container bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10 mt-10'>
      <div className="row w-full gap-20 mb-5 justify-start flex ">
        <div className='left p-6 pb-0 w-3/5 '>
          <div className='heading text-white underline text-2xl '>Skills</div>
        </div>

      </div>
      <div className='row px-6 w-full flex justify-between items-center'>
        <div className="degree w-2/5 relative my-4">
          <input placeholder="Enter Skill"
            onChange={handleSkillChange}
            value={skillObj}
            name='skill'
            type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/education/Degree.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="degree"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Skill
          </label>
        </div>
        
      </div>

      <div className='row p-5 w-full flex justify-center items-center'>
        <button onClick={handleSkillsAdd} className='bg-[#66A947] text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
      </div>

      


      {/* TABLE */}
      <div className='row px-6 w-full rounded-t-2xl border-b-[1.5px] border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
        <div className="my-4 text-white ">
          Skill
        </div>
      </div>

      {
        academicsData.skills.map((skill, index) => {
          return (
            <div key={index} className='row px-6 w-full border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
              <div className="my-4 text-white ">
                {skill}
              </div>
              
            </div>
          );
        })
      }

    </motion.div>

    </>


  )
}

export default Education
