import React, { useContext, useEffect, useState } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux'
import { setProjects } from '../../../store/formSlice';
import { useFormik } from "formik";
import { certiSchema } from '../../../schemas';


function Certis(props) {
  const projectsData = props.projectsData;
  const setProjectsData = props.setProjectsData;


  const onSubmit = async (values, actions) => {
    console.log(values);

    const certiObj = {
      cert_name: values.cert_name,
      cert_organization: values.cert_organization,
      cert_date: values.cert_date,
    }

    setProjectsData({ ...projectsData, certifications: [...projectsData.certifications, certiObj] })

    //TO CLEAR FORM AFTER SUBMITTING
    actions.resetForm();
  
  }

  //intial values
  const { values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting } = useFormik({
    initialValues: {
      cert_name: '',
      cert_organization: '',
      cert_date: '',
    },
    validationSchema: certiSchema,
    onSubmit,
  })


  const deleteCerti = (value) => {
    setProjectsData((prevState) => ({
      ...prevState,
      certifications: prevState.certifications.filter((item, index) => index !== value),
    }));
  };


  return (
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


      <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-x-24 px-6'>
        <div className="degree w-full relative my-4">
          <input placeholder="Enter certification name"
            // onChange={handleCertiChange}
            onChange={handleChange}
            onBlur={handleBlur}
            // value={certiObj.cert_name}
            value={values.cert_name}
            name='cert_name'
            id='cert_name'
            type="text"
            autoComplete='off'
            className={errors.cert_name && touched.cert_name ? "peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/education/Degree.png')] pr-10 w-full h-full border-b border-red-600 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/education/Degree.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" } />
          <label htmlFor="cert_name"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Certification name
          </label>
          {errors.cert_name && touched.cert_name && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.cert_name}</div>}
        </div>
        <div className="school_college w-full relative my-4 ">
          <input placeholder="Enter organization name"
            // onChange={handleCertiChange}
            onChange={handleChange}
            onBlur={handleBlur}
            // value={certiObj.cert_organization}
            value={values.cert_organization}
            name='cert_organization'
            id='cert_organization'
            type="text"
            autoComplete='off'
            className={errors.cert_organization && touched.cert_organization ? "peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/School.png')] pr-10 w-full h-full border-b border-red-600 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/education/School.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" } />
          <label htmlFor="cert_organization"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Organization name
          </label>
          {errors.cert_organization && touched.cert_organization && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.cert_organization}</div>}
        </div>
        <div className="percentage_cgpa w-full relative my-4 ">
          <input placeholder="Enter certification date"
            // onChange={handleCertiChange}
            onChange={handleChange}
            onBlur={handleBlur}
            // value={certiObj.cert_date}
            value={values.cert_date}
            name='cert_date'
            id='cert_date'
            type="date"
            autoComplete='off'
            className={errors.cert_date && touched.cert_date ? "peer  pr-10 w-full h-full border-b border-red-600 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "peer  pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"} />
          <label htmlFor="cert_date"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Certification date
          </label>
          {errors.cert_date && touched.cert_date && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.cert_date}</div>}
        </div>

        {/* <div className='row p-5 w-full flex justify-center items-center'> */}
          <button type='submit' className='bg-[#66A947] md:col-start-1 md:col-span-2 md:my-4 text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
        {/* </div> */}
      </form>



      {/* TABLE */}

      <table className='text-white w-full mt-5 bg-slate-950 rounded-xl'>
        <thead>
          <tr className='h-[50px] border-b-[1px] border-white'>
            <th className='w-1/4'>Name</th>
            <th className='w-1/3'>Organization</th>
            <th className='w-1/6'>Date</th>
            <th className='w-1/6'>Action</th>
          </tr>
        </thead>

        <tbody>
          {projectsData.certifications.length > 0 ?
            projectsData.certifications.map((certi, index) => {
              return (
                <tr key={index} className='text-center w-full text-sm'>
                  <td className='py-4 w-1/4'>{certi.cert_name}</td>
                  <td className='py-4 w-1/3'>{certi.cert_organization}</td>
                  <td className='py-4 w-1/6'>{certi.cert_date}</td>
                  <td className='py-4 w-1/6'><button className='bg-red-600 p-2 rounded-lg text-sm' onClick={() => deleteCerti(index)}>Delete</button></td>
                </tr>
              )
            })
            :
            <tr className='text-center h-[50px]'>
              <td colSpan={5}>No certification data available.</td>
            </tr>
          }
        </tbody>
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
  )
}

export default Certis
