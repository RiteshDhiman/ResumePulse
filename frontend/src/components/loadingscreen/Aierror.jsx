import React from 'react'

const Aierror = ({handleSubmit}) => {
  return (
    <div className='w-full h-screen bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-1/2 bg-black h-1/2 rounded-2xl flex flex-col gap-5 justify-center items-center'>
        <p className='text-2xl font-poppins font-bold text-white'>Something went wrong</p>
        <button 
            className='bg-[#66A947] text-white py-2 px-4 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14]'
            onClick={handleSubmit}
        >Retry
        </button>
        
      </div>
    </div>
  )
}

export default Aierror
