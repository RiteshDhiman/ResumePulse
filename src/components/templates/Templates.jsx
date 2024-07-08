import React, { useEffect } from 'react'
import "./templateStyle.scss"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";


function Templates() {
  function roll(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.item');

    carousel.classList.add(`moving-${direction}`);

    for (var item of items) {
      const startPosition = item.dataset.position;
      let endPosition;

      if (direction === 'right') {
        endPosition = parseInt(startPosition) + 1;
      }
      if (direction === 'left') {
        endPosition = parseInt(startPosition) - 1;
      }
      if (endPosition > 3) {
        endPosition = 1;
        item.style.zIndex = '-1';
      } else if (endPosition < 1) {
        endPosition = 3;
        item.style.zIndex = '-1';
      } else {
        item.style.zIndex = '';
      }
      item.dataset.position = endPosition;
      item.addEventListener("transitioned", function () {
        carousel.classList.remove(`moving-${direction}`);
      }, false);
    }

    const activeItem = document.querySelector('[data-position="2"]');
    // console.log(activeItem);
  }


  const templatesArray = [
    '/images/templates/template1.png',
    '/images/templates/template2.png',
    '/images/templates/template3.png',

  ]

  return (
    <div className='box flex relative justify-between items-center h-[40vw] w-[45vw]'>
      <div><button className="button button--left" onClick={() => roll('left')}><IoIosArrowDropleft color='white' size={28} /></button></div>
      <div className='absolute left-[17vw] top-16'>
        <ul className="carousel">
          {templatesArray.map((template, index) => <li key={template} className='item' data-position={`${index + 1}`} ><img src={template} alt={template} /></li>)}
          {/* <li className="item item--1" data-position="1"></li>
        <li className="item item--2" data-position="2"></li>
        <li className="item item--3" data-position="3"></li>
        <li className="item item--4" data-position="4"></li>
        <li className="item item--5" data-position="5"></li> */}
        </ul>

      </div>

      <div><button className="button button--right" onClick={() => roll('right')}><IoIosArrowDropright color='white' size={28} /></button></div>


    </div>

  )













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
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   dots: true,
  //   // fade: true,
  //   speed: 500,
  //   waitForAnimate: true,
  //   // autoplaySpeed: 3000,
  //   slidesToScroll: 1,
  //   // autoplay: true,
  //   // variableWidth: true,
  //   adaptiveHeight: true,
  //   // cssEase: "ease-out",
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />
  // };


  // return (
  //   <>
  //     <div className='w-4/6'>
  //       <Slider className='' {...settings}>
  //         <div><img src="/images/template1.png" alt="" /></div>
  //         <div><img src="/images/template1.png" alt="" /></div>
  //         <div><img src="/images/template1.png" alt="" /></div>
  //         <div><img src="/images/template1.png" alt="" /></div>
  //         <div><img src="/images/template1.png" alt="" /></div>
  //         <div><img src="/images/template1.png" alt="" /></div>
  //         <div><img src="/images/template1.png" alt="" /></div>
  //         {/* <Card title="Got a job!" desc="The resume builder created my resume, gave me pointers, variety of templates and was incredibly user friendly! I got the job I applied for!" name="Shreya Mathur" stars={5} image="/images/shreya.png"></Card>
  //         <Card title="Dream job at Microsoft !" desc="I was able to enhance my resume and showcase my skills in the best possible way" name="Ritesh Dhiman" stars={5} image="/images/ritesh.png"></Card>
  //         <Card title="Dream job at Google !" desc="I used Resume builder to get suggestions on my resume and it helped me land my dream job at Google! " name="Saransh Shukla" stars={5} image="/images/saransh.png"></Card> */}
  //         {/* <Card title="Got a job!" desc="The resume builder created my resume, gave me pointers, variety of templates and was incredibly user friendly! I got the job I applied for!" name="Shreya Mathur" stars={5}></Card> */}
  //       </Slider>
  //     </div>
  //   </>
  // )
}

export default Templates
