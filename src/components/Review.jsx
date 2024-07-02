import React from 'react'
import { Slide } from 'react-slideshow-image';
// import "./review.css"
import Card from './Card'

import Slider from "react-slick";


function Review(props) {
  // const reviews = [
  //     [
  //         "Got a job!",
  //         "The resume builder created my resume, gave me pointers, variety of templates and was incredibly user friendly! I got the job I applied for!",
  //         "Shreya Mathur",
  //         5
  //     ],
  //     [
  //         "Dream job at Google !",
  //         "I used Resume builder to get suggestions on my resume and it helped me land my dream job at Google! With its expert guidance, I was able to enhance my resume and showcase my skills in the best possible way",
  //         "Saransh Shukla",
  //         5
  //     ],
  //     [
  //         "Dream job at Microsoft !",
  //         "I used Resume builder to get suggestions on my resume and it helped me land my dream job at Google! With its expert guidance, I was able to enhance my resume and showcase my skills in the best possible way",
  //         "Ritesh Dhiman",
  //         5
  //     ]
  // ]



  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}

        onClick={onClick}
      />
    );
  }


  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    waitForAnimate: true,
    // autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // cssEase: "ease-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


  return (
    <>
      <div className='w-4/6  h-70'>
        <Slider className='' {...settings}>
          <Card title="Got a job!" desc="The resume builder created my resume, gave me pointers, variety of templates and was incredibly user friendly! I got the job I applied for!" name="Shreya Mathur" stars={5}></Card>
          <Card title="Dream job at Microsoft !" desc="I was able to enhance my resume and showcase my skills in the best possible way" name="Ritesh Dhaman" stars={5}></Card>
          <Card title="Dream job at Google !" desc="I used Resume builder to get suggestions on my resume and it helped me land my dream job at Google! " name="Saransh Shukla" stars={5}></Card>
          {/* <Card title="Got a job!" desc="The resume builder created my resume, gave me pointers, variety of templates and was incredibly user friendly! I got the job I applied for!" name="Shreya Mathur" stars={5}></Card> */}
        </Slider>
      </div>
    </>
  )
}

export default Review
