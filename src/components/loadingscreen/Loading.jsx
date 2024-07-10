import React, { useEffect, useState } from "react";
import "../loadingscreen/loading.scss";
import fetchQuotes from "./fetchQuotes";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

const Loading = () => {

  const [randomquote, setQuote] = useState('');

  useEffect(()=>{

    const fetchQuotesInMain = async() =>{
      const fetching = await fetchQuotes();
      setQuote(fetching.quote);
    }
    fetchQuotesInMain();
  },[]
)

  return (
    <div className="w-full h-screen bg-opacity-30 flex items-center justify-center">
      <div className="w-4/5 md:w-2/5 p-4 md:p-10 rounded-xl flex flex-col bg-black h-[40vh]">
      {/* <BackgroundGradientAnimation > */}
          <div className="monitor relative w-full h-full flex justify-center items-center">
            <img src="/images/document.png" alt="" className="absolute mx-auto scale-50 grayscale"/>
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
              className="absolute"
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
        {/* <div className="text-white font-poppins text-xs md:text-lg text-center mx-auto">{randomquote}</div> */}

      {/* </BackgroundGradientAnimation> */}
      </div>
    </div>
  );

  // return (
  //   <BackgroundGradientAnimation>
  //     <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
  //       <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
  //         Gradients X Animations
  //       </p>
  //     </div>
  //   </BackgroundGradientAnimation>
  // );
};

export default Loading;
