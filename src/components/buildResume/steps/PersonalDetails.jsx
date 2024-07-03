import React, { useContext } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'


function PersonalDetails() {
  const { data, setData } = useContext(StepBarContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  return (

    <div className='text-white flex flex-col justify-between items-start'>
      <div className='text-white text-xl'>Personal Details Sample</div>
      <div className="relative">
        <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
          <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
          </svg>
        </span>
        <input
          onChange={handleChange}
          value={data['phoneNumber'] || ''}
          name='phoneNumber'
          placeholder='phone number'
          type="text"
          id="floating-phone-number"
          className="block py-2.5 ps-6 w-full text-sm  bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
        <label htmlFor="floating-phone-number" className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Phone number</label>
      </div>


    </div>


  )
}

export default PersonalDetails
