import React, { useEffect, useState } from 'react';
import './checkscore.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CheckScore() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCheckScore = async () => {
    if (!selectedFile || !jobDescription) {
      alert('Please upload a file and enter job description.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('jd_text', jobDescription);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/check_score_route/0', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // console.log(response.data.request_id)
      // const finalResponse = await axios.get(`http://127.0.0.1:5000/api/check_score_route/${response.data.request_id}`)
      // console.log(finalResponse)
      // navigate('/result', { state: { finalData: finalResponse.data } });

      const requestId = response.data.request_id;
      navigate('/result', { state: { requestId } });
    } 
    catch (error) {
      console.error('Error uploading file:', error);
    }

    
    
    // navigate(`/${asdhffjh}`)
    // navigate('/result')
  };

  const handleBuild = () => {
    navigate('/build');
  };

  return (
    <div className=' h-full w-full flex-col flex justify-between gap-5 items-center bg-gradient-to-b from-[#000931] to-[#00020C] p-8'>
      <div className='text-white mt-5 font-krona text-center md:text-3xl md:w-1/2 text-xl w-full mb-3'>
        Check Resume
      </div>

      <div className=" md:px-10 w-full h-full flex lg:flex-row flex-col gap-14 justify-between items-center md:items-start">
        <div className="left w-full flex flex-col justify-between items-center h-4/5">
          <div className=' top gap-2 w-full px-2 md:px-10 md:py-2 pb-5 mb-5 border-b-[1.5px] border-white flex justify-start items-center '>
            <div className=' w-10 md:w-1/12 flex justify-center'><img className='w-full h-full' src="./images/uploadResume.png" alt="Upload Icon" /></div>
            <div className='w-5/6'>
              <div className='text-[#66A947] font-semibold text-lg'>Upload Resume</div>
              <div className='text-[#A9ACB4] text-sm'>Select and upload the file of your choice</div>
            </div>
          </div>
          <div className='middle mb-4 w-full flex justify-center gap-2 md:gap-5 items-center'>
            <div className='text-[#A9ACB4] text-sm'>Don't have a resume?</div>
            <div><button onClick={handleBuild} className='text-white text-sm bg-[#66A947] rounded-lg px-2 py-1'>Build your resume</button></div>
          </div>

          <div className='flex items-center justify-center w-full h-48 md:h-56 px-6 text-white'>
            <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-full h-full border-[4px] border-white border-dashed rounded-3xl cursor-pointer bg-transparent'>
              <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <svg className='w-8 h-8 mb-4 text-[#66A947]' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className='mb-2 text-sm text-[#66A947]'><span className='font-semibold'>PDF and DOC formats, up to 50MB</span></p>
              </div>
              <input id="dropzone-file" type="file" onChange={handleFileChange} />
            </label>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="right w-full h-4/5 flex flex-col justify-between items-center">
          <div className='top gap-2 w-full px-2 md:px-10 md:py-2 pb-5 mb-5 border-b-[1.5px] border-white flex justify-start items-center '>
            <div className='w-10 md:w-1/12 flex justify-center'><img className='w-full h-full' src="./images/uploadResume.png" alt="Upload Icon" /></div>
            <div className='w-5/6'>
              <div className='text-[#66A947] font-semibold text-lg'>Job Description</div>
              <div className='text-[#A9ACB4] text-sm'>Enter job description details as text</div>
            </div>
          </div>
          {/* This is the spacer to maintain symmetry */}
          <div className='middle mb-4 w-full flex justify-center gap-2 md:gap-5 items-center invisible'>
            <div className='text-[#A9ACB4] text-lg'>Spacer</div>
          </div>
          <div className='bottom w-full px-6 h-48 md:h-56'>
            <div className="box w-full h-full rounded-3xl border-4 border-dashed border-white flex flex-col justify-start items-start p-4">
              <div className='w-full h-full'><textarea onChange={handleChange} className='outline-none scroll flex w-full h-full text-white justify-center bg-transparent items-center resize-none placeholder:text-[#66A947] border-none' placeholder='Enter text'></textarea></div>
              {/* <div className='text-[#A9ACB4] text-sm mb-6 w-full flex justify-center items-center'>{wordCount}/1000 words</div> */}
            </div>
          </div>
        </div>
      </div>
      <button onClick={()=>handleCheckScore()} className='px-6 py-2 text-white rounded-xl bg-[#66A947] cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] mt-5'>Check Score</button>
    </div>
  );
}

export default CheckScore;
