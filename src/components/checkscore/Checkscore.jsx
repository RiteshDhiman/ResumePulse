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

  const wordCount = jobDescription.trim().split(/\s+/).length;

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="w-[35.3125rem] text-white text-center font-bold mt-6 text-3xl mx-auto font-[Krona_One] break-words mt-20">
        Check Resume
      </h1>

      <div className="bg-gray-900 rounded-lg p-6 shadow-md w-104 mt-8">
        <div className="flex items-center mb-4">
          <img src="/images/upload-icon.png" alt="Upload Icon" className="h-6 w-6 text-green-500 mr-2" />
          <p className="text-[2.09rem] text-[#66A947] font-[Inter] font-medium break-words">
            <span>Upload Resume</span>
          </p>
        </div>
        <div className="w-[34.3125rem] text-[#A9ACB4] text-[1.784rem] font-[Inter] font-medium break-words">
          Select and upload the file of your choice
        </div>
        <p className="text-gray-400 mb-4">
          <br></br>
          _______________________________________________
        </p>

        <div className="bg-gray-900 rounded-lg p-4 border-dashed border-2 border-gray-500">
          <div className="flex items-center justify-center">
            <img src="/images/danalitics.png" alt="Danalitic Logo" className="h-24" />
          </div>
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
        <div className="flex justify-between mt-6">
          <p className="text-gray-400 mt-4 text-[1.784rem] font-medium font-[Inter]">Don't have a resume?</p>
        
          <button
            className="relative w-[17.904375rem] h-[4.4375rem] bg-[#66A947] text-white font-bold rounded-2xl border border-[#66A947] cursor-pointer"
            onClick={handleUpload}
          >
            <button className="w-[14.52375rem] absolute left-[1.69rem] top-[1rem] text-[1.61375rem] font-[Poppins] font-normal break-words">
              Build your resume
            </button>
          </button>
        </div>
      </div>
    
      <div className="flex items-center">
        <img src="/images/cloud.png" alt="cloud Logo" className="h-24 mr-4 mt-20" />
        <h2 className="text-lime-600 text-[2.09125rem] font-medium font-[Inter]">Enter Job Description</h2>
      </div>

      <div className="bg-gray-900 rounded-lg p-4 border-dashed border-2 border-gray-500 mt-4">
        <div className="w-[33.75rem] h-80 relative">
          <div className="flex flex-col items-center justify-center h-full">
            <textarea
              className="w-full h-full p-0 bg-gray-800 text-center text-white resize-none outline-none"
              placeholder="Enter Text"
              value={jobDescription}
              onChange={handleChange}
            />
            <img src="/images/cloud.png" alt="cloud Logo" className="h-24 mt-2" />
            <p className="text-gray-400 mt-2">{wordCount} / 1000 words</p>
          </div>
        </div>
      </div>
      <br></br>
      <button
        className="relative w-[26.686875rem] h-[4rem] mt-auto mb-8 bg-lime-600 rounded-[1.86625rem] border border-black text-white text-[2.409375rem] font-normal font-[Poppins] flex items-center justify-center"
        onClick={handleCheckScore}
      >
        Check Score
      </button>

   </div>
      
     
  );
}

export default CheckScore;