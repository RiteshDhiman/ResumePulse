import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";

const AboutUs = () => {

  const people = [
    {
      id: 1,
      name: "Arjun",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Saransh Shukla",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Garima",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Shreya Mathur",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Ritesh Dhiman",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
  ];

  return (
    <div className="h-full bg-gray-900 text-white flex flex-col items-center">
      <div className="w-full flex justify-center items-center py-24 ml-32">
        <div className="w-3/5 flex">
          <div className="w-2/5 h-full flex justify-center items-center ">
            <img
              src="/images/danalitic.png"
              alt="Danalitic Logo"
              className="w-10/12"
            />
          </div>
          <div className="w-3/5 pl flex flex-col justify-center">
            <div className="mb-10 max-w-lg">
              <h1 className="text-5xl font-krona">
                About Us
                <br />
              </h1>
              <span className="text-2xl font-krona leading-tight">
                <br />
              </span>
              <p className="text-xl font-krub font-medium leading-relaxed">
                Danalitic is a software company that has earned its place as a
                Google Cloud and AWS partner by delivering innovative solutions
                in the fields of data analytics, financial data modelling,
                artificial intelligence, and machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-3/5  flex flex-col justify-center items-center">
        <div className="font-krona text-5xl my-10">Our Team</div>
        <div className="flex justify-center items-center gap-4">

          <div className="w-1/6 border-2 border-[#88DC61] rounded-full">
            <img src="/images/black_profile.png" alt="" />
          </div>
          <div className="w-1/6 border-2 border-[#88DC61] rounded-full">
            <img src="/images/black_profile.png" alt="" />
          </div>
          <div className="w-1/6 border-2 border-[#88DC61] rounded-full">
            <img src="/images/black_profile.png" alt="" />
          </div>
          <div className="w-1/6 border-2 border-[#88DC61] rounded-full">
            <img src="/images/black_profile.png" alt="" />
          </div>
          <div className="w-1/6 border-2 border-[#88DC61] rounded-full">
            <img src="/images/black_profile.png" alt="" />
          </div>
          
        </div>
      </div> */}

      <div className="flex flex-row items-center justify-center mb-10 w-full gap-10">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}

export default AboutUs;
