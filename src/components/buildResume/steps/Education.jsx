import React, { useContext, useEffect, useState } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'

function Education() {
  const { data, setData } = useContext(StepBarContext);
  const [eduArray, setEduArray] = useState([]);

  useEffect(()=>{
    
    console.log(eduArray);

  }, [eduArray])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    // console.log("Degree = " + JSON.stringify(data.degree));
    // console.log("School/College = " + JSON.stringify(data.school_college));
    // console.log("Percentage/CGPA = " + JSON.stringify(data.percentage_cgpa));
    // console.log("Year = " + JSON.stringify(data.year));

    let degree = data.degree;
    let school_college = data.school_college;
    let percentage_cgpa = data.percentage_cgpa;
    let year = data.year;


    if (degree==undefined && school_college==undefined && percentage_cgpa==undefined && year==undefined) {
      alert("Input fields are empty !")
    } else {
      setEduArray([
        ...eduArray, {
          degree,
          school_college,
          percentage_cgpa,
          year
        }
      ])
    }
    

  }

  return (

    <div className='container bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10'>
      <div className="row w-full gap-20 mb-5 justify-start flex ">
        <div className='left p-6 pb-0 w-3/5 '>
          <div className='heading text-white underline text-2xl '>Education</div>
        </div>

      </div>
      <div className='row px-6 w-full flex justify-between items-center'>
        <div className="degree w-2/5 relative my-4">
          <input placeholder="Enter Degree"
            onChange={handleChange}
            value={data['degree'] || ''}
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
            onChange={handleChange}
            value={data['school_college'] || ''}
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
            onChange={handleChange}
            value={data['percentage_cgpa'] || ''}
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
            onChange={handleChange}
            value={data['year'] || ''}
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
        <button onClick={handleClick} className='bg-[#66A947] text-white py-2 px-8 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Add</button>
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
      eduArray.map((edu, index) => {
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


    </div>

  )
}

export default Education
