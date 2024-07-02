import React from 'react';
import resume from '../../public/images/resume.png'
// import resume from '/p'

function Herobanner() {
  return (
   <div className="h-screen flex bg-gray-900 text-white">
      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            <span style={{ color: 'white', fontSize: '3rem', fontWeight: 'normal', fontFamily: "'Krona One'" }}>
              Best 
            </span>
            <span style={{ color: '#84CC16', fontSize: '3rem', fontWeight: 'normal', fontFamily: "'Krona One'" }}>
              Resume
            </span>
          </h1>
          <span style={{ color: 'white', fontSize: '3rem', fontWeight: 'normal', fontFamily: "'Krona One'" }}>
            Everything<br />
          </span>
          <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'normal', fontFamily: "'Krona One'" }}>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <br />
          <br />
          <div style={{ display: 'inline-flex', gap: '10px' }}>
            <div style={{ width: '286px', height: '71px', padding: '15px', background: 'rgba(66, 133, 244, 0)', borderRadius: '20px', border: '5px solid #66A947', justifyContent: 'center', alignItems: 'center', display: 'flex', transition: 'background-color 0.3s' }}>
              <div style={{ color: 'white', fontSize: '25.82px', fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>
                Check your score
              </div>
            </div>
            <div style={{ width: '286px', height: '71px', padding: '15px', background: '#66A947', borderRadius: '20px', border: '1px solid black', position: 'relative' }}>
              <div style={{ left: '27px', top: '16px', position: 'absolute', color: 'white', fontSize: '25.82px', fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>
                Build your resume
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src="/images/resume.png" alt="Resume" style={{ boxShadow: '0 4px 6px rgba(102, 169, 71, 0.5)' }} className="rounded-lg overflow-hidden" />
      </div>
    </div>
  );
}

export default Herobanner;
