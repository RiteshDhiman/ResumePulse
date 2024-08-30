import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import DonutChart from './DonutChart';

const Result = () => {
  const location = useLocation();
  const { requestId } = location.state || {};
  const [finalData, setFinalData] = useState(null);

  const [chartData, setChartData] = useState(null)
  // const [score, setScore] = useState(0)



  useEffect(() => {
    if (requestId) {
      const fetchResult = async () => {
        try {
          const finalResponse = await axios.get(`http://127.0.0.1:5000/api/check_score_route/${requestId}`);
          setFinalData(finalResponse.data);
          // setScore(finalResponse.data.similarityScore)
          console.log((finalResponse.data.similarityScore))
          console.log((finalResponse.data))

          setChartData({
            labels: ["Score", "Can be improved"],
            datasets: [{
              label: "Score",
              data: [finalResponse.data.similarityScore, 100 - finalResponse.data.similarityScore],
              backgroundColor: ['#16a34a', '#ededed'],
              cutout: `65%`,
              radius: 130

            }]
          })

        } catch (error) {
          console.error('Error fetching result:', error);
        }
      };
      fetchResult();

      // let secondScore = 100 - score


      // setChartData({
      //   labels: ["Score", "not Score"],
      //   datasets: [{
      //     label: "Score",
      //     data: [score, secondScore],
      //     backgroundColor: ['#16a34a', '#ededed'],
      //     cutout: `${score}%`,
      //     radius: 180

      //   }]
      // })


    }
  }, [requestId]);


  if (!finalData) {
    return <div className='text-white'>Loading...</div>;
  }

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='grid md:grid-cols-6 md:w-full lg:w-5/6 w-screen px-2 mt-10'>
        <div className=' col-start-1 md:col-span-4 col-span-6 mb-10 md:mb-0 flex justify-start items-center flex-col px-5 md:border-r-2 border-white'>
          <div className="header p-5 mb-10 border-b-2 border-white row-span-1">
            <div className='text-white font-semibold text-3xl mb-5'>Resume Report</div>
            {/* <div className='text-white text-xl'>We believe that the best resumes are simple & elegant</div> */}
            <div className='text-white text-xl'>{finalData.thought}</div>
          </div>

          {chartData ? <div className=' mb-5 flex sm:hidden relative w-5/6 md:w-full justify-start items-start'>
            <DonutChart chartData={chartData} />
            <div className='sm:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold'>{chartData.datasets[0].data[0]}%</div>
          </div>
            : <div className='sm:hidden flex w-full text-white justify-center items-center'>Loading Score...</div>}


          <div className="best p-5 mb-10 bg-green-500/80 w-full rounded-xl overflow-hidden">
            <div className='text-white font-medium text-xl'>Best Matched</div>
            <ul className='list-disc p-5'>
              {finalData.matchingAreas.bestMatched.map((item, index) => (
                <li className='text-white' key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="best p-5 mb-10 bg-yellow-500/80 w-full rounded-xl overflow-hidden">
            <div className='text-white font-medium text-xl'>Partially Matched</div>
            <ul className='list-disc p-5 text-white'>
              {finalData.matchingAreas.partiallyMatched.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>


          <div className="best p-5 mb-10 bg-red-500/80 w-full rounded-xl overflow-hidden">
            <div className='text-white font-medium text-xl'>Poorly Matched</div>
            <ul className='list-disc p-5 text-white'>
              {finalData.matchingAreas.poorlyMatched.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* RIGHT */}
        <div className=' grid-rows-3 h-fit md:col-start-5 md:col-end-7 col-span-6 px-2 flex justify-start items-center flex-col'>
          {chartData ? <div className=' hidden sm:flex relative w-full h-96 justify-center items-center'>
            <DonutChart chartData={chartData} />
            <div className='hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold'>{chartData.datasets[0].data[0]}%</div>
          </div>
            : <div className='hidden sm:flex w-full text-white justify-center items-center'>Loading Score...</div>}


          <div className="p-5 border-b-2 border-white w-full mb-10">
            <div className='text-white font-medium text-xl'>Skills Required</div>
            <ul className='list-disc p-5 text-white'>
              {finalData.skillsRequired.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-5 w-full">
            <div className='text-white font-medium text-xl'>Books to Read</div>
            <ul className='list-disc p-5'>
              {finalData.booksToRead.map((item, index) => (
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
