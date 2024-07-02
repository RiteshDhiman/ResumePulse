import React from 'react';

function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">
          <span className="text-white">Best</span> 
          <span className="text-green-500" style={{ color: 'rgba(102, 169, 71, 1)' }}>Resume</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-8">Everything</h2>
        <p className="text-lg mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex justify-center gap-4">
          <button className="border border-green-500 hover:bg-green-700 text-white-500 hover:text-white font-bold py-2 px-4 rounded">
            Check your score
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Build your resume
          </button>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img src="/images/resume.png" alt="Resume" />
      </div>
    </div>
  );
}

export default Home;
