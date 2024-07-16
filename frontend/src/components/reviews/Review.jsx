import React from 'react'
import "./reviewStyle.scss"
import Card from './Card'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function Review(props) {

  const reviews = props.reviewsArray;
  // const direction = props.direction;


  // function PrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function NextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block" }}

  //       onClick={onClick}
  //     />
  //   );
  // }


  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   // fade: true,
  //   speed: 500,
  //   waitForAnimate: true,
  //   // autoplaySpeed: 3000,
  //   slidesToShow: 1,
  //   slidesToScroll: direction,
  //   autoplay: true,
  //   // cssEase: "ease-out",
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />
  // };


  return (
    <>
      <div className='slider overflow-hidden relative w-full h-70 px-5 grid place-items-center m-auto'>
        <div className="slide-track flex w-[280vw] lg:w-[380vw]">
          {reviews.map((review, index) => <div key={index} className="slide w-1/2 h-full flex items-start p-5"><Card key={review.name} title={review.title} desc={review.desc} name={review.name} stars={review.stars} image={review.image} /></div>)}
        </div>
      </div>
    </>
  )
}

export default Review
