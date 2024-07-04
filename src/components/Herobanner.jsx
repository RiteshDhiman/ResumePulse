import React from 'react';
import { useNavigate } from 'react-router-dom';

function Herobanner() {
  const navigate = useNavigate();

  const navigateToCheckScore = () => {
    navigate('/checkscore');
  };

  return (
    <div className="h-screen flex bg-gray-900 text-white">
      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-white text-3xl font-normal font-krona">
              Best 
            </span>
            <span className="text-[#84CC16] text-3xl font-normal font-krona">
              Resume
            </span>
          </h1>
          <span className="text-white text-3xl font-normal font-krona">
            Everything<br />
          </span>
          <span className="text-white text-xl font-normal font-krona">
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <br />
          <br />
          <div className="inline-flex gap-2.5">
            <button 
              onClick={navigateToCheckScore}
              className="w-[286px] h-[71px] bg-transparent border-4 border-[#66A947] rounded-2xl text-white text-2xl font-normal font-poppins flex justify-center items-center transition duration-300"
            >
              Check your score
            </button>
            <button 
              className="w-[286px] h-[71px] bg-[#66A947] border-4 border-black rounded-2xl text-white text-2xl font-normal font-poppins flex justify-center items-center transition duration-300 hover:bg-green-600"
            >
              Build your resume
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src="/images/resume.png" alt="Resume" className="shadow-lg w-1/2" style={{ boxShadow: '0 4px 6px rgba(102, 169, 71, 0.5)' }} />
      </div>
    </div>
  );
}

export default Herobanner;