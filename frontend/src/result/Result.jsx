import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { requestId } = location.state || {};
  const [finalData, setFinalData] = useState(null);

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
    }
  }, [requestId]);

  if (!finalData) {
    return <div className='text-white'>Loading...</div>;
  }

  return (
    <div className='text-white'>
      <div className='text-7xl'>IMPROVED</div>
      <ul>
        {finalData.improvementSuggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className='text-7xl'>BEST</div>
      <ul>
        {finalData.matchingAreas.bestMatched.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className='text-7xl'>PARTIALLY</div>
      <ul>
        {finalData.matchingAreas.partiallyMatched.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className='text-7xl'>POORLY</div>
      <ul>
        {finalData.matchingAreas.poorlyMatched.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className='text-7xl'>SIMILARITY</div>
      <p>{finalData.similarityScore}</p>
    </div>
  );
};

export default Result;
