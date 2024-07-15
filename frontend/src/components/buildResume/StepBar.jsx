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


    const displaySteps = newStep.map((step, index) => {
        return (
            <div key={index} className='w-full flex items-center' >
                <div className='relative flex flex-col items-center justify-between text-white'>
                    <div className={`number rounded-full transition duration-500 ease-in-out border-2 border-green-500 h-8 w-8 flex items-center justify-center py-3 ${step.selected ? "bg-green-500 border-green-600" : ""}`}>
                        {step.completed ? (
                            <span className='text-white font-bold text-lg'>&#10003;</span>
                        ):(index+1)}
                    </div>
                    <div className={`desc absolute top-0 text-center mt-10 w-32 text-xs font-medium uppercase ${step.highlighted ? "text-green-500": ""}`}>{step.description}</div>
                </div>
                <div className={ `line flex transition duration-500 ease-in-out ${(step.completed && index != newStep.length - 1) ? ' h-[5px] mx-2 w-20 rounded-full bg-green-500 ' : 'bg-white'} ${(index != newStep.length - 1) ? ' h-[5px] mx-2 w-20 rounded-full bg-green ' : ''}  `} ></div>
            </div>

        )
    });


    return (
        <>
            {displaySteps}
        </>


    )
}

export default StepBar
