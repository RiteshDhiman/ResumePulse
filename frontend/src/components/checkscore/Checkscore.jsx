import React, { useState } from 'react';
import './checkscore.scss'
import { useNavigate } from 'react-router-dom';

function CheckScore() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');


  const navigate = useNavigate();
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

  const handleBuild = () => {
    navigate('/build');
  }

  const wordCount = jobDescription.trim().split(/\s+/).length;

  return (
    <div className='h-full w-full flex-col flex justify-between gap-5 items-center bg-gradient-to-b from-[#000931] to-[#00020C] p-8'>
      <div className='text-white mt-5 font-krona text-center md:text-3xl md:w-1/2 text-xl w-full mb-3'>
        Check Resume
      </div>

      <div className="main w-full h-[60vh] flex lg:flex-row flex-col gap-14 justify-between items-center">
        <div className="left w-1/2 flex flex-col justify-between items-center h-4/5">
          <div className='top w-full px-10 pb-5 mb-5 border-b-[1.5px] border-white flex justify-between items-center '>
            <div className='w-1/6 flex justify-center'><img width={50} src="./images/uploadResume.png" alt="Upload Icon" /></div>
            <div className='w-5/6'>
              <div className='text-[#66A947] font-semibold text-lg'>Upload Resume</div>
              <div className='text-[#A9ACB4] text-sm'>Select and upload the file of your choice</div>
            </div>

          </div>
          <div className='middle mb-4 w-[26vw] flex justify-between items-center'>
            <div className='text-[#A9ACB4] text-sm'>Don't have a resume ?</div>
            <div><button onClick={handleBuild} className='text-white bg-[#66A947] rounded-xl px-3 py-2'>Build your resume</button></div>
          </div>
        


          {/* <div className='bottom p-8 pt-2 w-full'>
            <div className="box  w-full h-60 p-12 rounded-3xl border-4 border-dashed border-white flex flex-col justify-start items-center">
              <div><img width={30} src="./images/upload.png" alt="upload" /></div>
              <div className='text-[#66A947]'>Choose a file or drag & drop it here</div>
              <div className='text-[#A9ACB4] text-sm mb-6'>PDF and DOC formats, up to 10MB</div>
              <div className='flex justify-center items-center bg-red-200'>
                <div>
                  <input onClick={handleUpload} className='text-white w-full bg-red-500 ' type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                </div>

              </div>

            </div>
          </div> */}

          
            <div class="flex items-center justify-center w-full h-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-full border-[4px] border-white border-dashed rounded-3xl cursor-pointer bg-transparent">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-[#66A947] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="mb-2 text-sm text-[#66A947]"><span class="font-semibold">PDF and DOC formats, up to 50MB</span></p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div> 

        </div>

        {/* RIGHT BOX */}
        <div className="right w-1/2 h-4/5 flex flex-col justify-between items-center">
          <div className='top w-full px-10 pb-5 mb-5 border-b-[1.5px] border-white flex justify-between items-center '>
            <div className='w-1/6 flex justify-center'><img width={50} src="./images/uploadResume.png" alt="Upload Icon" /></div>
            <div className='w-5/6'>
              <div className='text-[#66A947] font-semibold text-lg'>Job Description</div>
              <div className='text-[#A9ACB4] text-sm'>Enter job description details as text</div>
            </div>

          </div>

          {/* <div className='middle mb-3 h-10 flex justify-between items-center'>
            <div className='text-transparent text-sm'>Don't have a resume ?</div>
            <div><button className='text-transparent bg-transparent rounded-xl px-3 py-2'>Build your resume</button></div>
          </div> */}
          <div className='bottom w-full h-2/3'>
            <div className="box w-full h-full rounded-3xl border-4 border-dashed border-white flex flex-col justify-start items-start p-4 ">
              {/* <div><img width={30} src="./images/upload.png" alt="upload" /></div> */}
              <div className='w-full h-full'><textarea className='scroll flex w-full h-full text-white justify-center bg-transparent items-center resize-none placeholder:text-[#66A947] border-none' placeholder='Enter text'></textarea></div>
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