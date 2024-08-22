import React, { useContext, useEffect, useState } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux'
import { setPersonal } from '../../../store/formSlice'
import { useFormik } from "formik";
import { personalDetailsSchema } from '../../../schemas'

const PersonalDetails = () => {

  const { currentStep, handleStep } = useContext(StepBarContext);

  const personalItem = useSelector((state) => state.form.personal)
  const dispatch = useDispatch();


  const onSubmit = (values, actions) => {
    console.log(values);
    dispatch(setPersonal(values));
    handleStep('next');
  }

  //intial values handled
  const { values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting, resetForm } = useFormik({
    initialValues: {
      name: personalItem.name,
      email: personalItem.email,
      phone: personalItem.phone,
      github: personalItem.github,
      linkedin: personalItem.linkedin,
      portfolio: personalItem.portfolio,
      location: personalItem.location,
      role: personalItem.role

    },
    validationSchema: personalDetailsSchema,
    onSubmit,

  })





  // console.log(errors)

  // const [personalData, setPersonalData] = useState({
  //   name: personalItem.name,
  //   email: personalItem.email,
  //   phone: personalItem.phone,
  //   github: personalItem.github,
  //   linkedin: personalItem.linkedin,
  //   portfolio: personalItem.portfolio,
  //   location: personalItem.location
  // })

  // const handlePersonalData = (e) => {
  //   setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  // }

  // const handleNext = () => {
  //   dispatch(setPersonal(personalData))
  //   handleStep('next');
  // }




  return (

    <>
      <div className='w-full mb-6 px-3 flex justify-between items-center'>
        <button onClick={() => handleStep('')} className={`' bg-white text-black py-2 px-4 rounded-full font-semibold cursor-pointer ${currentStep == 1 ? ' bg-opacity-50 cursor-not-allowed' : 'hover:bg-[#ababab] transition duration-300 ease-in-out active:bg-[#454545] active:text-white'} `}>Back</button>
        {/* <button type='submit' className='bg-[#66A947] text-white py-2 px-4 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Save and Continue</button> */}
      </div>


      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} className='container bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-5 md:p-10'>
        <div className="row py-5 px-6 w-full mb-5 gap-10 justify-between items-center flex ">
          {/* <div className='left bg-blue-500 p-6 md:w-3/5 flex flex-col justify-start items-start'> */}
          <div className='heading text-white underline text-2xl '>Personal Details</div>

        </div>

        <form onSubmit={handleSubmit} className="  grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-x-24 px-6 ">
          {/* <div className='grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-x-24 px-6'> */}

          <div className="name w-full relative my-4">
            <input placeholder="Enter name"
              onChange={handleChange}
              // onChange={handlePersonalData}
              value={values.name}
              // value={personalData.name}
              onBlur={handleBlur}
              name='name'
              id='name'
              type="text"
              autoComplete="off"

              className={errors.name && touched.name ? "peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Person.png')] w-full h-full border-b border-red-600 bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Person.png')] w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"} />
            <label htmlFor="name"
              className=" after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Name
            </label>
            {errors.name && touched.name && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.name}</div>}


          </div>



          <div className="email w-full relative my-4">
            <input placeholder="Enter email"
              onChange={handleChange}
              // onChange={handlePersonalData}
              value={values.email}
              // value={personalData.email}
              onBlur={handleBlur}
              name='email'
              id='email'
              autoComplete="off"
              type="email"
              className={errors.email && touched.email ? "w-full relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Mail.png')] h-full border-b border-red-500 bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Mail.png')] w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"} />
            <label htmlFor="email"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Email
            </label>
            {errors.email && touched.email && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.email}</div>}
          </div>

          <div className="phone w-full relative my-4 ">
            <input placeholder="Enter phone number"
              onChange={handleChange}
              // onChange={handlePersonalData}
              value={values.phone}
              // value={personalData.phone}
              onBlur={handleBlur}
              name='phone'
              id='phone'
              type="text"
              autoComplete="off"
              className={errors.phone && touched.phone ? "w-full relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Phone.png')] h-full border-b border-red-500 bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Phone.png')] w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"} />
            <label htmlFor="phone"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Phone number
            </label>
            {errors.phone && touched.phone && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.phone}</div>}
          </div>

          <div className="github w-full relative my-4 ">
            <input placeholder="Enter your Github profile link"
              onChange={handleChange}
              // onChange={handlePersonalData}
              value={values.github}
              // value={personalData.github}
              onBlur={handleBlur}
              name='github'
              id='github'
              type="text"
              autoComplete="off"
              className={errors.github && touched.github ? "w-full relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/GitHub.png')] h-full border-b border-red-500 bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/GitHub.png')] w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"} />
            <label htmlFor="github"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Github
            </label>
            {errors.github && touched.github && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.github}</div>}
          </div>

          <div className="linkedin w-full relative my-4 ">
            <input placeholder="Enter your Linkedin profile link"
              onChange={handleChange}
              // onChange={handlePersonalData}
              value={values.linkedin}
              // value={personalData.linkedin}
              onBlur={handleBlur}
              name='linkedin'
              id='linkedin'
              type="text"
              autoComplete="off"
              className={errors.linkedin && touched.linkedin ? "w-full relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/LinkedIn.png')] h-full border-b border-red-500 bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/LinkedIn.png')] w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"} />
            <label htmlFor="linkedin"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Linkedin
            </label>
            {errors.linkedin && touched.linkedin && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.linkedin}</div>}
          </div>

          <div className="portfolio w-full relative my-4 ">
            <input placeholder="Enter your Portfolio link"
              onChange={handleChange}
              // onChange={handlePersonalData}
              value={values.portfolio}
              // value={personalData.portfolio}
              onBlur={handleBlur}
              name='portfolio'
              id='portfolio'
              type="text"
              autoComplete="off"
              className={errors.portfolio && touched.portfolio ? "w-full relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Portfolio.png')] h-full border-b border-red-500 bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Portfolio.png')] w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"} />
            <label htmlFor="portfolio"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Portfolio (optional)
            </label>
            {errors.portfolio && touched.portfolio && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.portfolio}</div>}
          </div>

          <div className="w-full relative my-4 ">
            <input placeholder="Enter your location"
              onChange={handleChange}
              // onChange={handlePersonalData}
              value={values.location}
              // value={personalData.location}
              onBlur={handleBlur}
              name='location'
              id='location'
              type="text"
              autoComplete="off"
              className={errors.location && touched.location ? "w-full relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Location.png')] h-full border-b border-red-500 bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Location.png')] w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"} />
            <label htmlFor="location"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Location (optional)
            </label>
            {errors.location && touched.location && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.location}</div>}
          </div>


          <div className="w-full relative my-4 ">
            <input placeholder="Enter the role you are applying for"
              onChange={handleChange}
              // onChange={handlePersonalData}
              value={values.role}
              // value={personalData.location}
              onBlur={handleBlur}
              name='role'
              id='role'
              type="text"
              autoComplete="off"
              className={errors.role && touched.role ? "w-full relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Person.png')] h-full border-b border-red-500 bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" : "relative peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Person.png')] w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100"} />
            <label htmlFor="role"
              className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Role
            </label>
            {errors.role && touched.role && <div className='error absolute left-0 -bottom-5 text-red-500 text-xs font-light'>{errors.role}</div>}
          </div>

          {/* </div> */}

          <div className='row p-5 w-full flex justify-center items-center'>
            <button onClick={() => resetForm({
              values: {
                name: '',
                email: '',
                phone: '',
                github: '',
                linkedin: '',
                portfolio: '',
                location: '',
                role: ''
              }
            })} type='reset' className='bg-red-600 text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-red-800 transition duration-200 ease-in-out active:bg-[#264d14] '>Reset</button>
          </div>
          
          <button type='submit' disabled={isSubmitting} className='bg-[#66A947] text-white my-10 py-2 px-4 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] disabled:cursor-not-allowed '>Save and Continue</button>
        </form>


        {/* </div> */}

      </motion.div>
    </>

  )
}

export default PersonalDetails
