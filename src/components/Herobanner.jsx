import React from "react";
import { useNavigate } from "react-router-dom";

function Herobanner() {
  const navigate = useNavigate();

  const navigateToCheckScore = () => {
    navigate("/check");
  };

  return (
    <div className="h-screen flex bg-gray-900 text-white">
      <div className="w-full flex justify-center items-center">
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-2/3 ">
            <div className="text-5xl font-bold mb-4">
              <span className="text-white font-normal font-krona">Resume</span>
              <span className="text-[#84CC16] font-normal font-krona">
                Pulse
              </span>
            </div>

            <div className="text-white text-xl font-krona my-14">
              Beat the competition with a resume that resonates
            </div>

            <div className="flex gap-3">
              <button
                onClick={navigateToCheckScore}
                className="w-[286px] h-[71px] bg-transparent border-4 border-[#66A947] rounded-2xl text-white text-2xl font-normal font-poppins flex justify-center items-center transition duration-300"
              >
                Check your score
              </button>
              <button className="w-[286px] h-[71px] bg-[#66A947] border-4 border-black rounded-2xl text-white text-2xl font-normal font-poppins flex justify-center items-center transition duration-300 hover:bg-green-600">
                Build your resume
              </button>
            </div>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <img
              src="/images/resume.png"
              alt="Resume"
              className="shadow-lg w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herobanner;
