import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import DonutChart from './DonutChart';

const Result = () => {
  const location = useLocation();
  const { requestId } = location.state || {};
  const [finalData, setFinalData] = useState(null);

  const [chartData, setChartData] = useState(null)
  const [scoreText, setScoreText] = useState(null);



  useEffect(() => {
    if (requestId) {
      const fetchResult = async () => {
        try {
          const finalResponse = await axios.get(`http://127.0.0.1:5000/api/check_score_route/${requestId}`);
          setFinalData(finalResponse.data);
        } catch (error) {
          console.error('Error fetching result:', error);
        }
      };
      fetchResult();


      setChartData({
        labels: ["Score", "not Score"],
        datasets: [{
          label: "Score",
          data: [70, 30],
          backgroundColor: ['#16a34a', '#ededed'],
          cutout: "70%",
          radius: 180
  
        }]
      })

     
    }
  }, [requestId]);


  if (!finalData) {
    return <div className='text-white'>Loading...</div>;
  }

  return (
    <div className='grid grid-cols-6 w-2/3 m-auto px-2 mt-10'>
      <div className=' col-start-1 col-span-4 grid grid-rows-[repeat(4,auto)] px-2 border-r-2 border-white'>
        <div className="header p-5 border-b-2 border-white row-span-1">
          <div className='text-white font-semibold text-3xl'>Resume Report</div>
          <div className='text-white text-xl'>We believe that the best resumes are simple & elegant</div>
        </div>

        <div className="best p-5 border-b-2 border-white bg-green-500/80">
          <div className='text-white font-medium text-xl'>Best Matched</div>
          <ul className='list-disc p-5'>
            {finalData.matchingAreas.bestMatched.map((item, index) => (
              <li className='text-white' key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="best p-5 border-b-2 border-white bg-yellow-500/80">
          <div className='text-white font-medium text-xl'>Partially Matched</div>
          <ul className='list-disc p-5 text-white'>
            {finalData.matchingAreas.partiallyMatched.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>


        <div className="best p-5 bg-red-500/80">
          <div className='text-white font-medium text-xl'>Poorly Matched</div>
          <ul className='list-disc p-5 text-white'>
            {finalData.matchingAreas.poorlyMatched.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* RIGHT */}
      <div className=' grid grid-rows-3 col-start-5 col-end-7 px-2'>
        {(chartData && scoreText) ? <div className=' bg-purple-400 relative w-full flex justify-start items-start'>
          <DonutChart chartData={chartData} />
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold'>70%</div>
        </div>
          : <div className=' w-full text-white flex justify-center items-center'>Loading Score...</div>}


        <div className="p-5 border-b-2 border-white">
          <div className='text-white font-medium text-xl'>Skills Required</div>
          <ul className='list-disc p-5 text-white'>
            {finalData.matchingAreas.poorlyMatched.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="p-5">
          <div className='text-white font-medium text-xl'>Libraries Suggested</div>
          <ul className='list-disc p-5'>
            {finalData.matchingAreas.poorlyMatched.map((item, index) => (
              <li className='text-white' key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className=' w-full p-5 mt-2 border-t-2 border-white col-start-1 col-end-7'>
        <div className='text-white font-medium text-xl'>Improvements/ Suggestions</div>
        <ul className='text-white list-disc p-5'>
          {finalData.improvementSuggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
      </div>
    </div>



    // <div className='text-white'>
    //   <div className='text-7xl'>IMPROVED</div>
    //   <ul>
    //     {finalData.improvementSuggestions.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ul>

    //   <div className='text-7xl'>BEST</div>
    //   <ul>
    //     {finalData.matchingAreas.bestMatched.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ul>

    //   <div className='text-7xl'>PARTIALLY</div>
    //   <ul>
    //     {finalData.matchingAreas.partiallyMatched.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ul>

    //   <div className='text-7xl'>POORLY</div>
    //   <ul>
    //     {finalData.matchingAreas.poorlyMatched.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ul>

    //   <div className='text-7xl'>SIMILARITY</div>
    //   <p>{finalData.similarityScore}</p>
    // </div>
  );
};

export default Result;
