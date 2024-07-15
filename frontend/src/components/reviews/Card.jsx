import React from 'react'
import Frame from '/images/reviews/Frame.png'
import Stars from '/images/reviews/stars.png'

function Card(props) {

    const profile_icon = props.image;
    const stars = props.stars;


  return (
    <div className='bg-[#66A947] font-manrope overflow-hidden w-[270px] h-16 md:w-[580px] md:h-44 lg:w-[750px] lg:h-56 rounded-xl flex justify-between items-center '>
                <div className='profile-icon relative w-1/4 md:w-1/3 h-full'>
                    <div className='absolute left-0 bottom-0 md:h-full md:w-full'><img src={Frame} /></div>
                    <div className=' absolute w-14 left-1 bottom-1 md:w-36 md:left-6 md:bottom-2 lg:w-48 lg:left-3 lg:bottom-3'><img src={profile_icon} /></div>
                </div>

                <div className="text text-white px-3 py-4 md:p-8 lg:p-10 w-3/4 md:w-2/3 h-full flex-col justify-between items-center">
                    <div className=' flex justify-between md:gap-10 items-center md:mb-1 lg:mb-4'>
                        <div className='font-bold lg:text-xl md:text-lg text-[11px]'>{props.title}</div>
                        <div className=' w-[35px] md:w-2/12'><img src={props.stars} /></div>
                    </div>
                    <div className=' leading-6 mb-0 md:mb-3 lg:mb-2 lg:text-lg md:text-sm text-xs hidden md:block'>{props.desc}</div>
                    <div className='font-normal md:font-semibold lg:text-base md:text-sm text-[10px]'>{props.name}</div>

                </div>

            </div>
  )
}

export default Card
