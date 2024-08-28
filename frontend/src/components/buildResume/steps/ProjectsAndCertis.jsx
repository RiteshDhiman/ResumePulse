import React, { useContext, useEffect, useState } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux'
import { setProjects } from '../../../store/formSlice';
import Certis from './Certis';
import { useFormik } from "formik";
import { projectSchema } from '../../../schemas';

function ProjectsAndCertis() {
  const { currentStep, handleStep } = useContext(StepBarContext);
  const dispatch = useDispatch();
  const projectSliceData = useSelector((state) => state.form.projects)

  const [projectsData, setProjectsData] = useState({
    projects: [...projectSliceData.projects],
    certifications: [...projectSliceData.certifications]
  })


  const onSubmit = async (values, actions) => {
    console.log(values);

    const projectObj = {
      name: values.name,
      link: values.link,
      description: values.description,
    }

    setProjectsData({ ...projectsData, projects: [...projectsData.projects, projectObj] })

    //TO CLEAR FORM AFTER SUBMITTING
    actions.resetForm();

  }

  //intial values
  const { values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      link: '',
      description: '',
    },
    validationSchema: projectSchema,
    onSubmit,
  })



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
        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-x-24 px-6'>
          <div className="degree w-full relative my-4">
            <input placeholder="Enter project name"
              onChange={handleChange}
              onBlur={handleBlur}
              // onChange={handleProjectChange}
              // value={projectObj.name}
              value={values.name}
              name='name'
              id='name'
              type="text"
              autoComplete='off'
              className={errors.name && touched.name ? "peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/education/Degree.png')] pr-10 w-full h-full border-b border-red-600 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/education/Degree.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"} />
            <label htmlFor="name"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Project name
            </label>
            {errors.name && touched.name && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.name}</div>}
          </div>
          <div className="school_college w-full relative my-4 ">
            <input placeholder="Enter project link"
              // onChange={handleProjectChange}
              onChange={handleChange}
              onBlur={handleBlur}
              // value={projectObj.link}
              value={values.link}
              name='link'
              id='link'
              type="text"
              className={errors.link && touched.link ? "peer pr-10 w-full h-full border-b border-red-600 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "peer pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" } />
            <label htmlFor="link"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Project link
            </label>
            {errors.link && touched.link && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.link}</div>}
          </div>
          <div className="percentage_cgpa w-full relative my-4 ">
            <input placeholder="Enter description"
              // onChange={handleProjectChange}
              onChange={handleChange}
              onBlur={handleBlur}
              // value={projectObj.description}
              value={values.description}
              name='description'
              id='description'
              type="text"
              className={errors.description && touched.description ? "peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/Percentage.png')] pr-10 w-full h-full border-b border-red-600 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/Percentage.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" }/>
            <label htmlFor="description"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Description
            </label>
            {errors.description && touched.description && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.description}</div>}
          </div>

          <button type='submit' className='bg-[#66A947] md:col-start-1 md:col-span-2 md:my-4 text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
        </form>

        {/* <div className='row p-5 w-full flex justify-center items-center'>
          <button onClick={handleProjectsAdd} className='bg-[#66A947] text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
        </div> */}


        {/* TABLE */}

        <table className='text-white w-full mt-5 bg-slate-950 rounded-xl'>
          <tr className='h-[50px] border-b-[1px] border-white'>
            <th className='w-1/4'>Project Name</th>
            <th className='w-1/3'>Description</th>
            <th className='w-1/4'>Project Link</th>
            <th className='w-1/6'>Action</th>
          </tr>

          {
            projectsData.projects.map((project, index) => {
              return (
                <tr key={index} className='text-center w-full text-sm'>
                  <td className='py-4 w-1/4'>{project.name}</td>
                  <td className='py-4 max-w-1/3'>{project.description}</td>
                  <td className='py-4 w-1/4'>{project.link}</td>
                  <td className='py-4 w-1/6'><button className='bg-red-600 p-2 rounded-lg text-sm' onClick={() => deleteProjects(index)}>Delete</button></td>
                </tr>
              )
            })
          }
        </table>

      </motion.div>

      <Certis projectsData={projectsData} setProjectsData={setProjectsData} />

    </>


  )
}

export default ProjectsAndCertis
