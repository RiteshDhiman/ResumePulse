import React from 'react'
import "./reviewStyle.scss"
import Card from './Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Review(props) {

  const reviews = props.reviewsArray;
  const direction = props.direction;
  

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
    dots: false,
    infinite: true,
    // fade: true,
    speed: 500,
    waitForAnimate: true,
    // autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: direction,
    autoplay: true,
    // cssEase: "ease-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


  return (
    <>
      <div className='w-4/6 h-70'>
        <Slider className='' {...settings}>
          {reviews.map((review) => <Card key={review.name} title={review.title} desc={review.desc} name={review.name} stars={review.stars} image={review.image} />)}
        </Slider>
      </div>
    </>
  )
}

export default Review
