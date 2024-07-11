import React, { useState } from 'react';

function CheckScore() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');


  const handleChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleCheckScore = () => {
    console.log('Checking score for:', selectedFile, jobDescription);
  };

  const handleUpload = () => {
    console.log('Selected file:', selectedFile);
    // console.log('Selected file:', value);
  };

  // const wordCount = jobDescription.trim().split(/\s+/).length;

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="w-[35.3125rem] text-white text-center font-bold mt-6 text-3xl mx-auto font-Krona One break-words mt-20">
        Check Resume
      </div>

      <div className="main w-full flex lg:flex-row flex-col gap-14 justify-between items-center">
        <div className="left w-1/2 flex flex-col justify-between items-center">
          <div className='top w-full px-10 pb-5 mb-5 border-b-[1.5px] border-white flex justify-between items-center '>
            <div className='w-1/6 flex justify-center'><img width={50} src="./images/uploadResume.png" alt="Upload Icon" /></div>
            <div className='w-5/6'>
              <div className='text-[#66A947] font-semibold text-lg'>Upload Resume</div>
              <div className='text-[#A9ACB4] text-sm'>Select and upload the file of your choice</div>
            </div>

          </div>
          <div className='middle mb-3 w-[26vw] flex justify-between items-center'>
            <div className='text-[#A9ACB4] text-sm'>Don't have a resume ?</div>
            <div><button className='text-white bg-[#66A947] rounded-xl px-3 py-2'>Build your resume</button></div>
          </div>
          <div className='bottom p-8 pt-2 w-full'>
            <div className="box  w-full h-60 p-12 rounded-3xl border-4 border-dashed border-white flex flex-col justify-start items-center">
              <div><img width={30} src="./images/upload.png" alt="upload" /></div>
              <div className='text-[#66A947]'>Choose a file or drag & drop it here</div>
              <div className='text-[#A9ACB4] text-sm mb-6'>PDF and DOC formats, up to 10MB</div>
              {/* <div className='bg-white rounded-xl text-black font-semibold px-5 py-2 '><button onClick={handleFile}>Browse File</button></div> */}
              <div className='file flex justify-center items-center'>
                <div><input onClick={handleUpload} className='text-white w-5/6 ' type="file" onChange={(e) => setSelectedFile(e.target.files[0])} /></div>

              </div>

            </div>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="right w-1/2 flex flex-col justify-between items-center">
          <div className='top w-full px-10 pb-5 mb-5 border-b-[1.5px] border-white flex justify-between items-center '>
            <div className='w-1/6 flex justify-center'><img width={50} src="./images/uploadResume.png" alt="Upload Icon" /></div>
            <div className='w-5/6'>
              <div className='text-[#66A947] font-semibold text-lg'>Job Description</div>
              <div className='text-[#A9ACB4] text-sm'>Enter job description details as text</div>
            </div>

          </div>

          <div className='middle mb-3 h-10 flex justify-between items-center'>
            <div className='text-transparent text-sm'>Don't have a resume ?</div>
            <div><button className='text-transparent bg-transparent rounded-xl px-3 py-2'>Build your resume</button></div>
          </div>
          <div className='bottom p-8 pt-2 w-full'>
            <div className="box  w-full h-60 rounded-3xl border-4 border-dashed border-white flex flex-col justify-start items-start p-10">
              {/* <div><img width={30} src="./images/upload.png" alt="upload" /></div> */}
              <div className='w-full'><textarea cols={50} className='flex text-white justify-center bg-transparent items-center placeholder:text-[#66A947]' placeholder='Enter text'></textarea></div>
              <div className='text-[#A9ACB4] text-sm mb-6 w-full flex justify-center items-center'>0/1000 words</div>
              {/* <div className='bg-white rounded-xl text-black font-semibold px-5 py-2 '><button>Browse File</button></div> */}

            </div>
          </div>
        </div>



      </div>
      <button className='px-6 py-2 text-white rounded-xl bg-[#66A947] cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14]  '>Check Score</button>
    </div>

  );
}

export default CheckScore;