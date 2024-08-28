import React from "react";
import "../loadingscreen/loading.scss";

const Loading = () => {

  return (
    <div className="w-full h-screen bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
      <div className="w-4/5 md:w-2/5 p-4 md:p-10 rounded-xl flex flex-col bg-black h-[40vh]">
          <div className="monitor relative w-full h-full flex justify-center items-center">
            <img src="/images/document.png" className="absolute mx-auto scale-50 opacity-65"/>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 500 200"
              style={{ enableBackground: "new 0 0 500 200" }}
              xmlSpace="preserve"
              className="absolute bg-opacity-50"
            >
              <g>
                <polyline
                  className="ekg stroke-[#4dd603] fill-none"
                  points="406.6,113.8 328.2,113.8 320.3,113.8 295,120.7 290,110.7 285,125.7 280,100.7 270,140.7 260,70.7 246.8,127.4 241.6,120.2 233.9,166.4 227,27.6 
                    213.2,118.3 211.8,112.3 205.1,126.1 198.2,108.5 194.1,124.4 184.5,92.9 174.1,113 60.3,113"
                />
              </g>
            </svg>
          </div>

        <div className="text-white font-krona text-sm md:text-2xl mx-auto">Loading ....</div>
      </div>
    </div>
  );
};

export default Loading;
