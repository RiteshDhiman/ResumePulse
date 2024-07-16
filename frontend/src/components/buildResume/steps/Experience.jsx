import React, { useContext, useEffect, useState } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"

function Experience() {
    const { data, setData } = useContext(StepBarContext);
    const [expArray, setExpArray] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleClick = (e) => {
        let company = data.company;
        let position = data.position;
        let startDate = data.startDate;
        let endDate = data.endDate;


        if (company == undefined && position == undefined && startDate == undefined && endDate == undefined) {
            alert("Input fields are empty !")
        } else {
            setExpArray([
                ...expArray, {
                    company,
                    position,
                    startDate,
                    endDate
                }
            ])
        }

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
                <div className="degree w-2/5 relative my-4">
                    <input placeholder="Enter Company name"
                        onChange={handleChange}
                        value={data['company'] || ''}
                        name='company'
                        type="text"
                        className="peer bg-[length:35px] bg-no-repeat bg-right bg-[url('/images/form/experience/Company.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label htmlFor="company"
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                        Company
                    </label>
                </div>
                <div className="school_college w-2/5 relative my-4 ">
                    <input placeholder="Enter your position"
                        onChange={handleChange}
                        value={data['position'] || ''}
                        name='position'
                        type="text"
                        className="peer bg-[length:30px] bg-no-repeat bg-right bg-[url('/images/form/experience/Position.png')] pr-10 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label htmlFor="position"
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                        Position
                    </label>
                </div>
            </div>

            <div className='row px-6 w-full flex justify-between items-center'>
                <div className="percentage_cgpa w-2/5 relative my-4 ">
                    <input placeholder="Enter your start date"
                        onChange={handleChange}
                        value={data['start_date'] || ''}
                        name='start_date'
                        type="date"
                        className="peer pr-2 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label htmlFor="start_date"
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                        Start date
                    </label>
                </div>
                <div className="percentage_cgpa w-2/5 relative my-4 ">
                    <input placeholder="Enter your end date"
                        onChange={handleChange}
                        value={data['end_date'] || ''}
                        name='end_date'
                        type="date"
                        className="peer pr-2 w-full h-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 disabled:bg-white placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label htmlFor="end_date"
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                        End date
                    </label>
                </div>


            </div>

            <div className='row p-5 w-full flex justify-center items-center'>
                <button onClick={handleClick} className='bg-[#66A947] text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
            </div>


            {/* TABLE */}
            <div className='row px-6 w-full rounded-t-2xl border-b-[1.5px] border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
                <div className="my-4 text-white ">
                    Company
                </div>
                <div className="my-4 text-white ">
                    Position
                </div>
                <div className="my-4 text-white ">
                    Start date
                </div>
                <div className="my-4 text-white ">
                    End date
                </div>
            </div>

            {
                expArray.map((exp, index) => {
                    return (
                        <div key={index} className='row px-6 w-full border-white bg-slate-700 bg-opacity-45 flex justify-between items-center'>
                            <div className="my-4 text-white ">
                                {exp.company}
                            </div>
                            <div className="my-4 text-white ">
                                {exp.position}
                            </div>
                            <div className="my-4 text-white ">
                                {exp.start_date}
                            </div>
                            <div className="my-4 text-white ">
                                {exp.end_date}
                            </div>
                        </div>
                    );
                })
            }


        </motion.div>

    )
}

export default Experience
