import React from "react";

function AboutUs() {
  return (
    <div className="h-full bg-gray-900 text-white flex flex-col">
      <div className="w-full flex justify-center items-center py-24">
        <div className="w-full flex">
          <div className="w-2/5 h-full flex justify-center items-center">
            <img
              src="/images/danalitic.png"
              alt="Danalitic Logo"
              className="w-1/2"
            />
          </div>
          <div className="w-3/5 p-10 flex flex-col justify-center">
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

      <div className="w-full  flex flex-col justify-center items-center">
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
      </div>
    </div>
  );
}

export default AboutUs;
