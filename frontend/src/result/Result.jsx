import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Result = () => {

    const [finalResult, setFinalResult] = useState();

    const resultFetching = async() => {
        const result = await axios.get('');
        setFinalResult(result);
    }

    useEffect(()=>{
        resultFetching();
    })

  return (
    <div>
      {/* {finalResult.data} */}
    </div>
  )
}

export default Result
