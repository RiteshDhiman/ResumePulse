import React from 'react';

function AboutUs() {
  return (
    <div className="h-screen bg-gray-900 text-white flex">
      <div className="w-1/2 flex justify-center items-center">
        <img src="/images/danalitics.png" alt="Danalitic Logo" className="w-full max-w-lg" />
      </div>
      <div className="w-1/2 p-10 flex flex-col justify-center">
        <div className="mb-10">
          <div className="w-full max-w-lg">
            <span style={{ color: 'white', fontSize: '50.88px', fontFamily: 'Krona One', fontWeight: '400', wordWrap: 'break-word' }}>
              About Us<br />
            </span>
            <span style={{ color: 'white', fontSize: '25.44px', fontFamily: 'Krona One', fontWeight: '400', wordWrap: 'break-word' }}>
              <br />
            </span>
            <span style={{ color: 'white', fontSize: '25.44px', fontFamily: 'Krub', fontWeight: '500', wordWrap: 'break-word' }}>
              Danalitic is a software company that has earned its
              place as a Google Cloud and AWS partner by delivering
              innovative solutions in the fields of data analytics,
              financial data modelling, artificial intelligence, and
              machine learning.
            </span>
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <div className="flex justify-start gap-8">
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
  );
}

export default AboutUs;