import React from 'react'
import Frame from '/images/reviews/Frame.png'
import Stars from '/images/reviews/stars.png'

function Card(props) {

    const profile_icon = props.image;
    const stars = props.stars;


  return (
    <div className='bg-[#66A947] font-manrope w-full h-56 rounded-xl flex justify-between items-center overflow-hidden'>
                <div className='profile-icon relative w-1/3 h-full'>
                    <div className=' left-0 bottom-0 absolute h-full'><img src={Frame} /></div>
                    <div className=' left-3 bottom-3 absolute w-48'><img src={profile_icon} /></div>
                </div>

                <div className="text text-white p-10 w-2/3 h-full flex-col justify-between items-center">
                    <div className='flex gap-10 items-center mb-4'>
                        <div className='font-bold text-xl'>{props.title}</div>
                        <div className=' w-2/12'><img src={props.stars} /></div>
                    </div>
                    <div className=' leading-6 mb-5 text-lg'>{props.desc}</div>
                    <div className='font-semibold text-md'>{props.name}</div>

                </div>

            </div>
  )
}

export default Card
