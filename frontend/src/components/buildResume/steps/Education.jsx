import React, { useContext, useEffect, useState } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux'
import { setEducation, setPersonal } from '../../../store/formSlice';

function Education() {
  const { currentStep, handleStep } = useContext(StepBarContext);
  const eduSliceData = useSelector((state) => state.form.academics)

  const [eduObj, setEduObj] = useState({
    degree: 'High School',
    percentage_cgpa: '',
    school_college: '',
    year: '',
  })

  const [skillObj, setSkillObj] = useState('')

  const dispatch = useDispatch();

  const [academicsData, setAcademicsData] = useState({
    education: [...eduSliceData.education],
    skills: [...eduSliceData.skills]
  })


  const handleEduAdd = () => {
    setAcademicsData({ ...academicsData, education: [...academicsData.education, eduObj] })
    setEduObj(
      {
        degree: eduObj.degree,
        percentage_cgpa: '',
        school_college: '',
        year: '',
      }
    )
  }
  const handleSkillsAdd = () => {
    setAcademicsData({ ...academicsData, skills: [...academicsData.skills, skillObj] })
    setSkillObj('')
  }

  const handleEduChange = (e) => {
    setEduObj({ ...eduObj, [e.target.name]: e.target.value })
  }
  const handleSkillChange = (e) => {
    setSkillObj(e.target.value)
  }

  const nextPage = () => {
    dispatch(setEducation(academicsData));
    handleStep('next')
  }

  const prevPage = () => {
    dispatch(setEducation(academicsData));
    handleStep('')
  }

  const deleteSkill = (value) => {
    setAcademicsData((prevState) => ({
      ...prevState,
      skills: prevState.skills.filter((item, index) => index !== value),
    }));
  };

  const deleteEducation = (value) => {
    setAcademicsData((prevState) => ({
      ...prevState,
      education: prevState.education.filter((item, index) => index !== value),
    }));
  };
  
  const handleSelectChange = (event) => {
    setEduObj({...eduObj, degree : event.target.value})
  };

  // useEffect(()=>{
  //   deleteSkill()
  // },[academicsData])

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
            <div className='heading text-white underline text-2xl '>Education</div>
          </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-x-24 px-6'>
          <div className="degree w-full relative my-4">

              <select name="degree" id="degree" className='w-full outline-none bg-transparent text-white' onChange={handleSelectChange}>
                <option className="text-black" value="High School">High School</option>
                <option className="text-black" value="Senior Secondary">Senior Secondary</option>
                <option className="text-black" value="Diploma">Diploma</option>
                <option className="text-black" value="Undergraduate">Undergraduate</option>
                <option className="text-black" value="Postgraduate">Postgraduate</option>
                <option className="text-black" value="Phd">Phd</option>
              </select>
            <label htmlFor="degree" className="after:content[''] pointer-events-none absolute left-0 -top-3.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Degree
            </label>
          </div>
          <div className="school_college w-full relative my-4 ">
            <input placeholder="Enter School/College"
              onChange={handleEduChange}
              value={eduObj.school_college}
              name='school_college'
              id='school_college'
              type="text"
              autoComplete="off"
              className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/School.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label htmlFor="school_college"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              School/College
            </label>
          </div>
          <div className="percentage_cgpa w-full relative my-4 ">
            <input placeholder="Enter your Percentage/CGPA"
              onChange={handleEduChange}
              value={eduObj.percentage_cgpa}
              name='percentage_cgpa'
              id='percentage_cgpa'
              type="text"
              autoComplete="off"
              className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/Percentage.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label htmlFor="percentage_cgpa"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Percentage/CGPA
            </label>
          </div>

          <div className="year w-full relative my-4 ">
            <input placeholder="Enter Year"
              onChange={handleEduChange}
              value={eduObj.year}
              name='year'
              id='year'
              type="text"
              autoComplete="off"
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

        <table className='text-white w-full bg-slate-950 rounded-xl'>
          <tr className='h-[50px] border-b-[1px] border-white'>
            <th className='w-1/6'>Degree</th>
            <th className='w-1/3'>School/College</th>
            <th className='w-1/6'>Percentage/CGPA</th>
            <th className='w-1/6'>Year</th>
            <th className='w-1/6'>Action</th>
          </tr>

          {
            academicsData.education.map((edu,index)=>{
              return(
                <tr key={index} className='text-center w-full text-sm'>
                  <td className='py-4 w-1/6'>{edu.degree}</td>
                  <td className='py-4 max-w-1/3'>{edu.school_college}</td>
                  <td className='py-4 w-1/6'>{edu.percentage_cgpa}</td>
                  <td className='py-4 w-1/6'>{edu.year}</td>
                  <td className='py-4 w-1/6'><button className='bg-red-600 p-2 rounded-lg text-sm' onClick={()=>deleteEducation(index)}>Delete</button></td>
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
            <div className='heading text-white underline text-2xl '>Skills</div>
          </div>

        </div>
        <div className='row px-6 w-full flex justify-between items-center'>
          <div className="degree w-full relative my-4">
            <input placeholder="Enter Skill"
              onChange={handleSkillChange}
              value={skillObj}
              name='skill'
              id='skill'
              type="text"
              autoComplete="off"
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
        <table className='text-white w-full bg-slate-950 rounded-xl'>
          <tr className='h-[50px] border-b-[1px] border-white'>
            <th className='w-1/2'>Skill</th>
            <th className='w-1/2'>Action</th>
          </tr>

          {
            academicsData.skills.map((skill,index)=>{
              return(
                <tr key={index} className='text-center w-full text-sm'>
                  <td className='py-4 w-1/6'>{skill}</td>
                  <td className='py-4 w-1/6'><button className='bg-red-600 p-2 rounded-lg text-sm' onClick={()=>deleteSkill(index)}>Delete</button></td>
                </tr>
              )
            })
          }
        </table>

      </motion.div>

    </>
  )
}

export default Education
