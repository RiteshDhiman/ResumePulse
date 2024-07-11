import React from "react";
import { useNavigate } from "react-router-dom";
import Review from './reviews/Review'

function Herobanner() {
  const navigate = useNavigate();

  const navigateToCheckScore = () => {
    navigate("/check");
  };

  const navigateToBuildResume = () => {
    navigate("/build");
  };

  const reviews = [
    {
      title: "Got a job!",
      desc: "ResumePulse created my resume, gave me pointers, variety of templates and was incredibly user friendly! I got the job I applied for!",
      name: "Shreya Mathur",
      stars: '/images/reviews/4stars.png',
      image: '/images/reviews/r5.png'
    },
    {
      title: "Dream job at Google !",
      desc: "I used ResumePulse to get suggestions on my resume and it helped me land my dream job at Google! ",
      name: "Saransh Shukla",
      stars: '/images/reviews/stars.png',
      image: '/images/reviews/r1.png'
    },
    {
      title: "Hired at Microsoft !",
      desc: "The builder helped me craft a professional and eye-catching resume that actually showcased my skills and experience",
      name: "Ritesh Dhiman",
      stars: '/images/reviews/stars.png',
      image: '/images/reviews/r4.png'
    },
    {
      title: "Lifesaver for Job Seekers!!",
      desc: "This website offered a great selection of modern templates and an easy-to-use builder.",
      name: "Arjun",
      stars: '/images/reviews/stars.png',
      image: '/images/reviews/r3.png'
    },
    {
      title: "Great for a Quick Resume Refresh",
      desc: "ResumePulse is user-friendly and the score report identified some typos and formatting issues.",
      name: "Garima",
      stars: '/images/reviews/4stars.png',
      image: '/images/reviews/r2.png'
    },
    {
      title: "Solid Resume Check",
      desc: "The resume score and feedback were insightful. It helped me catch typos and grammatical errors I hadn't noticed before.",
      name: "Lorem",
      stars: '/images/reviews/4stars.png',
      image: '/images/reviews/r6.png'
    },
    {
      title: "Got a job!",
      desc: "ResumePulse created my resume, gave me pointers, variety of templates and was incredibly user friendly! I got the job I applied for!",
      name: "Shreya Mathur",
      stars: '/images/reviews/4stars.png',
      image: '/images/reviews/r5.png'
    },
    {
      title: "Dream job at Google !",
      desc: "I used ResumePulse to get suggestions on my resume and it helped me land my dream job at Google! ",
      name: "Saransh Shukla",
      stars: '/images/reviews/stars.png',
      image: '/images/reviews/r1.png'
    },
    {
      title: "Hired at Microsoft !",
      desc: "The builder helped me craft a professional and eye-catching resume that actually showcased my skills and experience",
      name: "Ritesh Dhiman",
      stars: '/images/reviews/stars.png',
      image: '/images/reviews/r4.png'
    },
  ]

  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-b from-[#000931] to-[#00020C] text-white">
      <div className="w-full mt-32 flex justify-center items-center">
        <div className="w-11/12 md:w-4/5 flex justify-between items-center">
          <div className="w-2/3 md:w-1/2 flex flex-col gap-6 md:gap-10">

            <div className="flex text-xl md:text-3xl lg:text-5xl font-white font-krona">
              <span>Resume</span>
              <span className="text-[#84CC16]">Pulse</span>
            </div>

            <div className="text-white text-sm md:text-lg lg:text-xl font-krona">
              Beat the competition with a resume that resonates
            </div>

            <div className="flex h-12 md:h-14 lg:h-20 w-full gap-1 md:gap-4 text-sm sm:text-md md:text-xl lg:text-2xl">
              <button
                onClick={navigateToCheckScore}
                className="w-1/2 h-full border-2 md:border-4 border-[#66A947] rounded-2xl text-white font-poppins flex justify-center items-center"
              >
                Check your score
              </button>
              <button 
                onClick={navigateToBuildResume} 
                className="w-1/2 h-full bg-[#66A947] border-2 md:border-4 border-[#66A947] rounded-2xl text-white font-poppins flex justify-center items-center transition duration-300 hover:bg-green-600">
                Build your resume
              </button>
            </div>
          </div>
          <div className="w-1/3 md:w-1/2 flex justify-center items-center">
            <img
              src="/images/resume.png"
              alt="Resume"
              className="shadow-lg md:scale-125 lg:scale-150"
            />
          </div>
        </div>
      </div>

      <div className='flex-col flex justify-center items-center my-36'>
        <Review reviewsArray={reviews} direction={1} />
        {/* <div className='h-10'></div> */}
        {/* <Review reviewsArray={reviews2} direction={-1} /> */}
      </div>
    </div>
  );
}

export default Herobanner;
