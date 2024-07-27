import React from 'react'

const Snackbar = ({message, onClose}) => {
  return (
    <div className={`fixed bottom-2 left-1/2 -translate-x-1/2 bg-red-300 text-white rounded-sm px-2 py-5 duration-300 ${message ? 'block' : ''} ${message ? 'opacity-1' : 'opacity-0'}`}>
      {message}
      <button onClick={onClose} className='ml-4 bg-none border-none text-white cursor-pointer'>X</button>
    </div>
  )
}

export default Snackbar
