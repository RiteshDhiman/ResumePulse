import React from 'react';

function About() {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center ">
      <div className="container mx-auto p-10 flex flex-row justify-center items-center">
        <div className="flex justify-center items-center mr-10 mb-60">
          <img src="/images/danalitics.png" alt="Danalitic Logo" style={{ width: '400px' }} />
        </div>
        <div className="max-w-md pl-10"> 
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-medium">
              Danalitic is a software company that has earned its
              place as a Google Cloud and AWS partner by delivering
              innovative solutions in the fields of data analytics,
              financial data modelling, artificial intelligence, and
              machine learning.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <div className="flex justify-center gap-8">
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
                <img src="/images/team-member1.png" alt="Team Member 1" className="w-12 h-12 rounded-full" />
              </div>
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
                <img src="/images/team-member2.png" alt="Team Member 2" className="w-12 h-12 rounded-full" />
              </div>
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
                <img src="/images/team-member3.png" alt="Team Member 3" className="w-12 h-12 rounded-full" />
              </div>
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
                <img src="/images/team-member4.png" alt="Team Member 4" className="w-12 h-12 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;