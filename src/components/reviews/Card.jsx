import React from 'react'
import Frame from '/images/reviews/Frame.png'
import Stars from '/images/reviews/stars.png'

function Card(props) {

    const profile_icon = props.image;


  return (
    <div className='bg-[#66A947] font-manrope w-full h-60 rounded-xl flex justify-between items-center overflow-hidden'>
                <div className='profile-icon relative w-1/4 h-full'>
                    <div className=' left-0 bottom-0 absolute w-full'><img src={Frame} /></div>
                    <div className=' left-3 bottom-1 absolute w-44'><img src={profile_icon} /></div>
                </div>

                <div className="text text-white p-10 w-3/4 h-full flex-col justify-between items-center">
                    <div className='flex gap-10 items-center mb-4'>
                        <div className='font-bold text-xl'>{props.title}</div>
                        <div className=' w-2/12'><img src={Stars} /></div>
                    </div>
                    <div className=' leading-6 mb-5 text-lg'>{props.desc}</div>
                    <div className='font-semibold text-md'>{props.name}</div>

                </div>

            </div>
  )
}

export default Card
