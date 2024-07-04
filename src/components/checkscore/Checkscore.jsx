import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckScore() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit resume and job description to API for scoring
    console.log('Resume:', resumeFile);
    console.log('Job Description:', jobDescription);
  };

  const handleBuildResumeClick = () => {
    navigate('/build-resume');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto">
        <div style={{ width: '565px', color: 'white', fontSize: '52.62px', fontFamily: 'Krona One', fontWeight: '400', wordWrap: 'break-word', margin: '0 auto 2rem auto', maxWidth: '100%' }}>
          Check Resume
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="resume-file" className="block text-green-500 text-sm font-bold mb-2">
              Upload Resume
            </label>
            <input
              type="file"
              id="resume-file"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleFileChange}
            />
            <p className="text-gray-600 text-sm italic mt-1">
              PDF and DOC formats, up to 50MB
            </p>
          </div>

          <div className="mb-6">
            <label htmlFor="job-description" className="block text-green-500 text-sm font-bold mb-2">
              Enter Job Description
            </label>
            <textarea
              id="job-description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={jobDescription}
              onChange={handleJobDescriptionChange}
            />
            <p className="text-gray-600 text-sm italic mt-1">
              0/1000 words
            </p>
          </div>

          <div className="text-center mt-4 text-gray-400">
            <div>First check your score.</div>
            <div>Don't have a resume? <span className="text-green-500 cursor-pointer" onClick={handleBuildResumeClick}>Build your resume</span></div>
          </div>

          <div className="flex justify-between mb-4">
            <button
              type="submit"
              className="relative flex-1"
              style={{
                height: '80px', // Adjusted height
                position: 'relative',
                maxWidth: 'calc(50% - 0.75rem)', // Half width with margin between buttons
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  background: '#66A947',
                  borderRadius: '20px',
                  border: '1.49px black solid',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: 'white', fontSize: '28px', fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>
                  <b>Check Score</b>
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={handleBuildResumeClick}
              className="relative flex-1 ml-2"
              style={{
                height: '80px', // Adjusted height
                position: 'relative',
                maxWidth: 'calc(50% - 0.75rem)', // Half width with margin between buttons
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  background: '#66A947',
                  borderRadius: '20px',
                  border: '1.49px black solid',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: 'white', fontSize: '28px', fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>
                  <b>Build your resume</b>
                </span>
              </div>
            </button>
          </div>

          
        </form>
      </div>
    </div>
  );
}

export default CheckScore;