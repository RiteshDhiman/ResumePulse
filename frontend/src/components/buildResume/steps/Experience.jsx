import React, { useContext, useEffect, useState } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { setExperience } from '../../../store/formSlice';

function Experience() {
    const { currentStep, handleStep } = useContext(StepBarContext);
    const dispatch = useDispatch();
    const expSliceData = useSelector((state)=>state.form.experience)

    const [expData, setExpData] = useState({
        experience: [...expSliceData.experience]
    })

    const [expObj, setExpObj] = useState({
        company_name: '',
        role: '',
        description: '',
        duration: null,
    })

    const handleExpAdd = () => {
        setExpData({ ...expData, experience: [...expData.experience, expObj] })
        setExpObj(
            {
                company_name: '',
                role: '',
                description: '',
                duration: null,
            }
        )
    }


    const handleExpChange = (e) => {
        setExpObj({ ...expObj, [e.target.name]: e.target.value })
    }

    const nextPage = () => {
        dispatch(setExperience(expData));
        handleStep('next')
    }


    return (

        <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='container bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10'>

            <div className="row w-full gap-20 mb-5 justify-start flex ">
                <div className='left p-6 pb-0 w-3/5 '>
                    <div className='heading text-white underline text-2xl '>Experience</div>
                </div>

            </div>
            <div className='row px-6 w-full flex justify-between items-center'>
                <div className="w-2/5 relative my-4">
                    <input placeholder="Enter Company name"
                        onChange={handleExpChange}
                        value={expObj.company_name}
                        name='company_name'
                        type="text"
                        className="peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/experience/Company.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label htmlFor="company_name"
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                        Company
                    </label>
                </div>
                <div className="school_college w-2/5 relative my-4 ">
                    <input placeholder="Enter your role"
                        onChange={handleExpChange}
                        value={expObj.role}
                        name='role'
                        type="text"
                        className="peer bg-[length:30px] bg-no-repeat bg-right bg-[url('/images/form/experience/Position.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label htmlFor="role"
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                        Role
                    </label>
                </div>
            </div>

            <div className='row px-6 w-full flex justify-between items-center'>
                <div className="w-2/5 relative my-4 ">
                    <input placeholder="Enter description"
                        onChange={handleExpChange}
                        value={expObj.description}
                        name='description'
                        type="text"
                        className="peer pr-2 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label htmlFor="description"
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                        Description
                    </label>
                </div>
                <div className="w-2/5 relative my-4 ">
                    <input placeholder="Enter duration"
                        onChange={handleExpChange}
                        value={expObj.duration}
                        name='duration'
                        type="date"
                        className="peer pr-2 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label htmlFor="duration"
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                        Duration
                    </label>
                </div>


            </div>

            <div className='row p-5 w-full flex justify-center items-center'>
                <button onClick={handleExpAdd} className='bg-[#66A947] text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
            </div>


            {/* TABLE */}
            <div className='row px-6 w-full rounded-t-2xl border-b-[1.5px] border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
                <div className="my-4 text-white ">
                    Company
                </div>
                <div className="my-4 text-white ">
                    Role
                </div>
                <div className="my-4 text-white ">
                    Description
                </div>
                <div className="my-4 text-white ">
                    Duration
                </div>
            </div>

            {
                expData.experience.map((exp, index) => {
                    return (
                        <div key={index} className='row px-6 w-full border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
                            <div className="my-4 text-white ">
                                {exp.company_name}
                            </div>
                            <div className="my-4 text-white ">
                                {exp.role}
                            </div>
                            <div className="my-4 text-white ">
                                {exp.description}
                            </div>
                            <div className="my-4 text-white ">
                                {exp.duration}
                            </div>
                        </div>
                    );
                })
            }


            <div className='w-full mb-2 px-10 flex justify-between items-center'>
                <button onClick={() => handleStep('')} className={`' bg-white text-black py-2 px-4 rounded-full font-semibold cursor-pointer ${currentStep == 1 ? ' bg-opacity-50 cursor-not-allowed' : 'hover:bg-[#ababab] transition duration-300 ease-in-out active:bg-[#454545] active:text-white'} `}>Back</button>
                <button onClick={nextPage} className='bg-[#66A947] text-white py-2 px-4 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Save and Continue</button>
            </div>


        </motion.div>

    )
}

export default Experience
