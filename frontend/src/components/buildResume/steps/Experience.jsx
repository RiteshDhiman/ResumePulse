import React, { useContext, useEffect, useState } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { setExperience } from '../../../store/formSlice';

function Experience() {
    const { currentStep, handleStep } = useContext(StepBarContext);
    const dispatch = useDispatch();
    const expSliceData = useSelector((state) => state.form.experience)

    const [expData, setExpData] = useState({
        experience: [...expSliceData.experience]
    })

    const [expObj, setExpObj] = useState({
        company_name: '',
        role: '',
        description: '',
        start_date: '',
        end_date: '',
        duration : ''
    })

    const handleExpAdd = () => {
        const { start_date, end_date, ...expObjWithoutDates } = expObj;
        setExpData({ ...expData, experience: [...expData.experience, { ...expObjWithoutDates, duration: `${start_date} to ${end_date}` }] });
        setExpObj({
            company_name: '',
            role: '',
            description: '',
            start_date: '',
            end_date: '',
            duration : ''
        });
    }


    const handleExpChange = (e) => {
        setExpObj({ ...expObj, [e.target.name]: e.target.value })
    }

    const nextPage = () => {
        dispatch(setExperience(expData));
        handleStep('next')
    }

    const prevPage = () => {
        dispatch(setExperience(expData));
        handleStep('')
    }

    const deleteExperience = (value) => {
        setExpData((prevState) => ({
          ...prevState,
          experience: prevState.experience.filter((item, index) => index !== value),
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
                        <div className='heading text-white underline text-2xl '>Experience</div>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-x-24 px-6'>
                    <div className="w-full relative my-4">
                        <input placeholder="Enter Company name"
                            onChange={handleExpChange}
                            value={expObj.company_name}
                            name='company_name'
                            id='company_name'
                            type="text"
                            autoComplete='off'
                            className="peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/experience/Company.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label htmlFor="company_name"
                            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                            Company
                        </label>
                    </div>
                    <div className="school_college w-full relative my-4 ">
                        <input placeholder="Enter your role"
                            onChange={handleExpChange}
                            value={expObj.role}
                            id='role'
                            name='role'
                            type="text"
                            autoComplete='off'
                            className="peer bg-[length:30px] bg-no-repeat bg-right bg-[url('/images/form/experience/Position.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label htmlFor="role"
                            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                            Role
                        </label>
                    </div>
                    <div className="w-full relative my-4 ">
                        <input placeholder="Enter description"
                            onChange={handleExpChange}
                            value={expObj.description}
                            name='description'
                            id='description'
                            type="text"
                            autoComplete='off'
                            className="peer pr-2 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label htmlFor="description"
                            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                            Description
                        </label>
                    </div>
                    <div className="w-full relative my-4 ">
                        <input placeholder="Enter start date"
                            onChange={handleExpChange}
                            value={expObj.start_date}
                            id='start_date'
                            name='start_date'
                            type='month'
                            className="peer pr-2 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label htmlFor="start_date"
                            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                            Start date
                        </label>
                    </div>
                    <div className="w-full relative my-4 ">
                        <input placeholder="Enter end date"
                            onChange={handleExpChange}
                            value={expObj.end_date}
                            id='end_date'
                            name='end_date'
                            type="month"
                            className="peer pr-2 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label htmlFor="end_date"
                            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                            End date
                        </label>
                    </div>
                </div>

                <div className='row p-5 w-full flex justify-center items-center'>
                    <button onClick={handleExpAdd} className='bg-[#66A947] text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
                </div>


                {/* TABLE */}

                <table className='text-white w-full bg-slate-950 rounded-xl'>
                    <tr className='h-[50px] border-b-[1px] border-white'>
                        <th className='w-1/4'>Name</th>
                        <th className='w-1/4'>Organization</th>
                        <th className='w-1/4'>Date</th>
                        <th className='w-1/6'>Action</th>
                    </tr>

                    {
                        expData.experience.map((exp,index)=>{
                        return(
                            <tr key={index} className='text-center w-full text-sm'>
                            <td className='py-4 w-1/4'>{exp.company_name}</td>
                            <td className='py-4 w-1/4'>{exp.role}</td>
                            <td className='py-4 w-1/4'>{exp.duration}</td>
                            <td className='py-4 w-1/6'><button className='bg-red-600 p-2 rounded-lg text-sm' onClick={()=>deleteExperience(index)}>Delete</button></td>
                            </tr>
                        )
                        })
                    }
                </table>





            </motion.div>
        </>

    )
}

export default Experience
