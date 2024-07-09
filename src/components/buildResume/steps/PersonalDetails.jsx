import React, { useContext } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"

function PersonalDetails() {
  const { data, setData } = useContext(StepBarContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (

    <motion.div
    initial={{ x: 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }} className='container bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10'>
      <div className="row w-full gap-[8rem] mb-5 justify-start flex ">
        <div className='left p-6 w-3/5 flex flex-col justify-start items-start'>
          <div className='heading text-white underline text-2xl '>Personal Details</div>
          <div className="name w-full relative mt-12 ">
            <input placeholder="Enter name"
              onChange={handleChange}
              value={data['name'] || ''}
              name='name'
              type="text"
              className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Person.png')] w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 pr-10 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
            
            <label htmlFor="name"
              className=" after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
              Name
            </label>
          </div>
        </div>
        <div className='right w-1/6 rounded-full bg-green-400 flex justify-center items-center'>image</div>
      </div>

      
      <div className='row px-6 w-full flex justify-between items-center'>
        <div className="email w-2/5 relative my-4">
          <input placeholder="Enter email"
            onChange={handleChange}
            value={data['email'] || ''}
            name='email'
            type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/personalDetails/Mail.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="email"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Email
          </label>
        </div>
        <div className="phone w-2/5 relative my-4 ">
          <input placeholder="Enter phone number"
          onChange={handleChange}
          value={data['phone'] || ''}
          name='phone'
          type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Phone.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="phone"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Phone number
          </label>
        </div>
      </div>


      <div className='row px-6 w-full flex justify-between items-center'>
        <div className="github w-2/5 relative my-4 ">
          <input placeholder="Enter your Github profile link"
          onChange={handleChange}
          value={data['github'] || ''}
          name='github'
          type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/GitHub.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="github"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Github
          </label>
        </div>

        <div className="linkedin w-2/5 relative my-4 ">
          <input placeholder="Enter your Linkedin profile link"
          onChange={handleChange}
          value={data['linkedin'] || ''}
          name='linkedin'
          type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/LinkedIn.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="linkedin"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Linkedin
          </label>
        </div>
      </div>


      <div className='row px-6 w-full flex justify-between items-center'>
        <div className="portfolio w-2/5 relative my-4 ">
          <input placeholder="Enter your Portfolio link"
          onChange={handleChange}
          value={data['portfolio'] || ''}
          name='portfolio'
          type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/personalDetails/Portfolio.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="portfolio"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Portfolio (optional)
          </label>
        </div>

        <div className="address w-2/5 relative my-4 ">
          <input placeholder="Enter your address"
          onChange={handleChange}
          value={data['address'] || ''}
          name='address'
          type="text"
            className="peer bg-[length:35px] bg-no-repeat bg-right-top bg-[url('/images/form/personalDetails/Location.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
          <label htmlFor="address"
            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
            Address (optional)
          </label>
        </div>

      </div>
    </motion.div>

  )
}

export default PersonalDetails
