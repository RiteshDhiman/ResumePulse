import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Signup from '../../components/SignUp/Signup'
import Herobanner from '../../components/Herobanner';
import Review from '../../components/reviews/Review'
import SignUpCopy from '../../components/SignUp/SignUpCopy';

const Home = () => {

  const reviews = [
    {
      title: "Got a job!",
      desc: "The resume builder created my resume, gave me pointers, variety of templates and was incredibly user friendly! I got the job I applied for!",
      name: "Shreya Mathur",
      stars: 5,
      image: '/images/reviews/shreya.png'
    },
    {
      title: "Dream job at Google !",
      desc: "I used Resume builder to get suggestions on my resume and it helped me land my dream job at Google! With its expert guidance, I was able to enhance my resume and showcase my skills in the best possible way",
      name: "Saransh Shukla",
      stars: 5,
      image: '/images/reviews/saransh.png'
    },
    {
      title: "Dream job at Microsoft !",
      desc: "I used Resume builder to get suggestions on my resume and it helped me land my dream job at Google! With its expert guidance, I was able to enhance my resume and showcase my skills in the best possible way",
      name: "Ritesh Dhiman",
      stars: 5,
      image: '/images/reviews/ritesh.png'
    }
  ]


  const reviews2 = [
    {
      title: "NOT Got a job!",
      desc: "BLAH BLAH",
      name: "Somebody",
      stars: 5,
      image: '/images/reviews/saransh.png'
    },
    {
      title: "Dream job at Google !",
      desc: "DIFFERENT TEXT",
      name: "Somebody else",
      stars: 5,
      image: '/images/reviews/ritesh.png'
    },
    {
      title: "Dream job at Microsoft !",
      desc: "SOME other text",
      name: "Someone completely different",
      stars: 5,
      image: '/images/reviews/shreya.png'
    }
  ]

  return (
    <div>
      <Herobanner />
      <div className='flex-col justify-center items-center '>
        <Review reviewsArray={reviews} direction={1} />
        <div className='h-5'></div>
        <Review reviewsArray={reviews2} direction={-1} />

      </div>

    </div>
  )
}

export default Home
