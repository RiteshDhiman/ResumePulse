import React, { useEffect, useRef, useState } from 'react'
import ChooseTemplates from './steps/ChooseTemplates'
import PersonalDetails from './steps/PersonalDetails'
import Education from './steps/Education'
import ProjectsAndCertis from './steps/ProjectsAndCertis'
import Complete from './steps/Complete'
import Experience from './steps/Experience'
import StepBar from './StepBar'
import { StepBarContext } from './contexts/StepBarContext'
import '../../components/herobanner/star.scss';


function Form() {
    const [currentStep, setCurrentStep] = useState(1);
    const [data, setData] = useState('');
    const [finalData, setFinalData] = useState('')
    const steps = [
        "Templates",
        "Personal Details",
        "Academics",
        "Projects and Certifications",
        "Experience",
        "Complete"
    ];


    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <ChooseTemplates />
            case 2:
                return <PersonalDetails />
            case 3:
                return <Education />
            case 4:
                return <ProjectsAndCertis />
            case 5:
                return <Experience />
            case 6:
                return <Complete />
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction == 'next' ? newStep++ : newStep--;

        //make sure steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

        // GET DATA ON CLICKING SAVE BUTTON
        console.log("Data = " + JSON.stringify(data));

        //API
    }



    return (
        <div className=' bg-gradient-to-b from-[#000931] to-[#00020C] w-full h-full flex justify-center items-center'>

ww

            <div className=' bg-transparent w-3/5 h-full flex flex-col justify-start items-center'>
                <div className='text-2xl text-white font-krona m-10'>Build your Resume</div>


                {/* Progress BAR */}
                <div className='p-14 pt-0 border-b-[1px] border-white mb-4 flex justify-between items-center'>
                    <StepBar steps={steps} currentStep={currentStep} />
                </div>
                {/**/}
                

                {/* BUTTONS */}
                {currentStep != steps.length &&
                    <div className='w-full mb-2 px-10 flex justify-between items-center'>
                        <button onClick={() => handleClick('')} className={`' bg-white text-black py-2 px-4 rounded-full font-semibold cursor-pointer ${currentStep == 1 ? ' bg-opacity-50 cursor-not-allowed' : 'hover:bg-[#ababab] transition duration-300 ease-in-out active:bg-[#454545] active:text-white'} `}>Back</button>
                        <button onClick={() => handleClick('next')} className='bg-[#66A947] text-white py-2 px-4 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>{currentStep == steps.length - 1 ? 'Submit' : 'Save and Continue'}</button>
                    </div>
                }

                {/* FORM */}
                <div className='p-5 w-full'>
                    <StepBarContext.Provider value={{
                        data,
                        setData,
                        finalData,
                        setFinalData
                    }}>
                        {displayStep(currentStep)}
                    </StepBarContext.Provider>
                </div>
                {/*  */}


                {/* Check if data is available in this component */}
                {/* {console.log(data.phoneNumber)} */}

                {/**/}

            </div>
        </div>
    )
}

export default Form
