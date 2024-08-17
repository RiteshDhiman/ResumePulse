import React, { useEffect, useRef, useState } from 'react'

function StepBar({ steps, currentStep }) {
    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps]
        let count = 0;

        while (count < newSteps.length) {
            //current step
            if (count == stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true,
                },
                    count++;

            }
            //step completed
            else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true
                },
                    count++;

            }

            //step pending
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false
                },
                    count++;
            }
        }
        return newSteps;
    }

    useEffect(() => {
        const stepsState = steps.map((step, index) =>
            Object.assign(
                {},
                {
                    description: step,
                    completed: false,
                    highlighted: index == 0 ? true : false,
                    selected: index == 0 ? true : false
                }
            )

        );

        stepRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepRef.current);
        setNewStep(current);

    }, [steps, currentStep]); //runs when steps or currentStep is changed


    //     const displaySteps = newStep.map((step, index) => {
    //         return (
    // //             // <div key={index} className='bg-red-500 flex items-center justify-evenly  ' >
    // //             {/* <div className='relative flex flex-col items-center justify-between text-white'>
    // //                     <div className={`number rounded-full transition duration-500 ease-in-out border-2 border-green-500 h-2 w-7 md:h-8 md:w-8 flex items-center justify-center py-3 ${step.selected ? "bg-green-500 border-green-600" : ""}`}>
    // //                         {step.completed ? (
    // //                             <span className='text-white font-bold text-lg'>&#10003;</span>
    // //                         ) : (index + 1)}
    // //                     </div>
    // //                     <div className={`desc absolute top-0 text-center mt-10 w-18 sm:w-32 text-[7.5px] md:text-xs font-medium uppercase ${step.highlighted ? "text-green-500" : ""}`}>{step.description}</div>
    // //                 </div>
    // //                 <div className={`line flex transition duration-500 ease-in-out h-[3px] sm:h-[5px] mx-2 w-[10rem] rounded-full ${(step.completed && index != newStep.length - 1) ? '  bg-green-500 ' : 'bg-white'} `} ></div>

    // //  */}

    //         // {/* </div> */ }


    //         )
    //     });


    return (
        <>
            {/* {displaySteps} */}

                <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                    
                    <li className="flex md:w-full items-center text-green-600 dark:text-green-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                        </span>
                    </li>
                    <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <span className="me-2">2</span>
                            Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                        </span>
                    </li>
                    <li className="flex items-center">
                        <span className="me-2">3</span>
                        Confirmation
                    </li>

                </ol>


        </>


    )
}

export default StepBar
