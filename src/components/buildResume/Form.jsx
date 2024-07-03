import React, { useEffect, useRef, useState } from 'react'
import ChooseTemplates from './steps/ChooseTemplates'
import PersonalDetails from './steps/PersonalDetails'
import Education from './steps/Education'
import ProjectsAndCertis from './steps/ProjectsAndCertis'
import Complete from './steps/Complete'
import StepBar from './StepBar'
import {StepBarContext} from './contexts/StepBarContext'


function Form() {
    const [currentStep, setCurrentStep] = useState(1);
    const [data,setData] = useState('');
    const [finalData, setFinalData] = useState('')
    const steps = [
        "Templates",
        "Personal Details",
        "Education",
        "Projects and Certification",
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
                return <Complete />
        }
    }

    const handleClick = (direction)=>{
        let newStep = currentStep;

        direction == 'next' ? newStep ++ : newStep --;

        //make sure steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

    }
    


    return (
        <div className=' bg-gradient-to-b from-[#000931] to-[#00020C] w-screen h-screen flex justify-center items-center'>
            <div className=' bg-transparent w-1/2 h-full flex flex-col justify-start items-center'>
                <div className='text-2xl text-white font-krona m-10'>Build your Resume</div>

                {/* Progress BAR */}
                <div className='p-5 mb-14 flex justify-between items-center'>
                    <StepBar steps={steps} currentStep={currentStep}/>
                </div>
                {/**/}

                {/* FORM */}
                <div>
                    <form className='' method='POST'></form>
                </div>
                {/**/}
                <div className='my-10 p-10'>
                    <StepBarContext.Provider value={{
                        data,
                        setData,
                        finalData,
                        setFinalData
                    }}>
                        {displayStep(currentStep)}
                    </StepBarContext.Provider>
                </div>


                {/* BUTTONS */}
                <div className='w-full  flex justify-between items-center'>
                    <button onClick={()=>handleClick('')} className={`' bg-white text-black py-2 px-4 rounded-xl font-semibold cursor-pointer ${currentStep == 1 ? ' bg-opacity-50 cursor-not-allowed':''} `}>Back</button>
                    <button onClick={()=>handleClick('next')} className='bg-green-500 text-white py-2 px-4 rounded-xl font-semibold cursor-pointer '>{currentStep == steps.length - 1 ? 'Submit':'Save and Continue'}</button>
                
                </div>


                {/* Check if data is available in this component */}
                {console.log(data.phoneNumber)}

                {/**/}

            </div>
        </div>
    )
}

export default Form
