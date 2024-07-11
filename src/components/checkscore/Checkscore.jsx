/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function CheckScore() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleCheckScore = () => {
    console.log('Checking score for:', selectedFile, jobDescription);
  };

  const handleUpload = () => {
    console.log('Selected file:', selectedFile);
  };

  // eslint-disable-next-line no-unused-vars
  const wordCount = jobDescription.trim().split(/\s+/).length;

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="w-[35.3125rem] text-white text-center font-bold mt-6 text-3xl mx-auto font-Krona One break-words">
        Check Resume
      </h1>

      <div className="flex justify-center mt-8 w-full max-w-6xl">
        <div className="bg-gray-900 rounded-lg p-6 shadow-md w-[calc(50% - 1rem)] mx-4 mb-8 h-[34rem]">
          <div className="flex items-center mb-4">
            <img src="./images/uploadResume.png" alt="Upload Icon" className="h-11 w-12 text-green-500 mr-2" />
            <p className="text-[2.09rem] text-[#66A947] font-Inter font-medium break-words">
              <span>Upload Resume</span>
            </p>
          </div>
          <div className="w-[34.3125rem] text-[#A9ACB4] text-[1.784rem] font-Inter font-medium break-words">
            Select and upload the file of your choice
          </div>
          <div className="flex justify-between mt-6">
            <p className="text-gray-400 text-2xl mt-4  font-medium font-Inter">Don't have a resume?</p>
            <button
              className="relative w-72  h-14 bg-[#66A947] text-white font-bold rounded-xl border border-[#66A947] cursor-pointer"
              onClick={handleUpload}
            >
              <span className="w-full mt-2absolute left-0 top-2 text-2xl font-[Poppins] font-normal break-words">
                Build your resume
              </span>
            </button>
          </div>
          <p className="text-gray-400 mb-4">
            <br />
            _______________________________________________________________________________
          </p>
          <div className="bg-gray-900 rounded-lg p-4 border-dashed border-2 border-gray-500 h-[20rem]">
            <div className="flex items-center justify-center">
              <img src="./images/upload.png" alt="Danalitic Logo" className="h-11 w-12" />
            </div>
            <br></br>
            <p className="text-center text-[#66A947] text-[1.845rem] font-[Inter] font-medium break-words">
              Choose a file or drag & drop it here
            </p>
            <p className="text-center text-[#A9ACB4] text-[1.599rem] font-[Inter] font-medium break-words">
              PDF and DOC formats, up to 50MB
            </p>
            <input type="file" className="hidden" id="resumeUpload" onChange={handleFileChange} />
            <label
              htmlFor="resumeUpload"
              className="w-[14.2075rem] mt-6 mb-6 ml-36 h-[4.1825rem] px-[2.029375rem] py-[0.984375rem] bg-white rounded-2xl border-2 border-slate-300 flex justify-center items-center gap-[0.615rem] text-center text-[#54575C] text-[1.845rem] font-[Inter] font-medium break-words cursor-pointer"
            >
              Browse File
            </label>
          </div>
        </div>
        

    
        <div className="bg-gray-900 rounded-lg p-6 shadow-md w-[calc(50% - 1rem)] mx-4 mb-8 h-[34rem]">
          <div className="flex items-center mb-4 ">
            <img src="./images/uploadResume.png" alt="cloud Logo" className="w-12 h-11  mr-2" />
            <p className="text-[2.09rem] text-[#66A947] font-Inter font-medium break-words">
              <span>Enter Job Description</span>
            </p>
          </div>
          
          <div className="w-[34.3125rem] text-[#A9ACB4] text-[1.784rem] font-Inter font-medium break-words">
          Please enter job description details
          </div>
         
          <textarea
            className="w-full h-[20rem] mt-36 p-4 rounded-lg bg-gray-900 text-center text-white resize-none outline-none border-dashed border-2 border-gray-500"
            placeholder="Enter Text"
            value={jobDescription}
            onChange={handleChange}
          />
       
        </div>
      </div>
      

    
      <div className="mt-12 mb-8">
        <button
          className="relative w-[26.686875rem] h-[4rem] bg-[#66A947] rounded-[1.86625rem] border border-black text-white text-[2.409375rem] font-normal font-Poppins flex items-center justify-center"
          onClick={handleCheckScore}
        >
          Check Score
        </button>
      </div>
      </div>
 
   
  );
}

export default CheckScore;