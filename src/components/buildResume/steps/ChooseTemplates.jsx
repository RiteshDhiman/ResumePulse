import React, { useContext } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'


function ChooseTemplates() {
  const {data, setData} = useContext(StepBarContext);
  const handleChange=(e)=>{
    const {field, value} = e.target;
    setData({...data, [field]:value});
  };


  return (
    <div className='text-white h-full'>
      HEH templates
      
    </div>
  )
}

export default ChooseTemplates
