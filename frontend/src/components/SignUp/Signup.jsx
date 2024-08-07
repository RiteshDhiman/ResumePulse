import React from 'react'
import '../SignUp/signup.scss'

const Signup = ({loginClose, loginOrNot, signUp}) => {
  return (
    <div className='fixed centering inset-0 bg-black bg-opacity-50 z-30'>
      <div className='bgImg relative w-1/3 h-[600px] m-auto flex flex-col items-center rounded-[50px]'>
        <span onClick={loginClose} className='absolute right-7 top-5 text-xl font-poppins font-semibold hover:cursor-pointer'><img className='h-[25px]' src='/images/signup/close.png' alt="" /></span>

        <div className='centering w-1/2 h-1/3 flex-col'>
          <img className = 'h-1/2 text-xl text-white' src='/images/signup/dummy_profile.png' alt="" />
          <div className='font-krona text-xl text-white'>{loginOrNot? 'SIGN UP' : 'LOGIN'}</div>
        </div>

        {loginOrNot 
        ? 

        <div className='w-9/12 centering mb-4'>
          <form action="" className='w-full gap-4 flex flex-col'>
            <input className="w-full py-1 bg-transparent border-b-[1.5px] border-white text-white placeholder-white placeholder:font-krona focus:outline-none" type="text" placeholder='Name'/>
            <input className="w-full py-1 bg-transparent border-b-[1.5px] border-white text-white placeholder-white placeholder:font-krona focus:outline-none" type="email" placeholder='Email'/>
            <input className="w-full py-1 bg-transparent border-b-[1.5px] border-white text-white placeholder-white placeholder:font-krona focus:outline-none" type="password" placeholder='Password'/>
          </form>
        </div> 
        
        : 

        <div className='w-9/12 centering'>
          <form action="" className='w-full gap-4 flex flex-col'>
            <input className="w-full py-1 bg-transparent border-b-[1.5px] border-white text-white placeholder-white placeholder:font-krona focus:outline-none" type="email" placeholder='Email'/>
            <input className="w-full py-1 bg-transparent border-b-[1.5px] border-white text-white placeholder-white placeholder:font-krona focus:outline-none" type="password" placeholder='Password'/>
            <input type="checkbox" id='check' className=''/>
          </form>
        </div> 
        }

        <div className='w-3/4 rounded-2xl bg-[#66A947] h-[12%] centering text-white font-krona my-3'>
          {loginOrNot? 'Sign Up' : 'Login'}
        </div>

        <div className='my-3 text-white font-krona'>----------- OR -----------</div>

        <div className='centering w-11/12 h-[10%] m-3'>
          <div className='centering w-1/2 h-full justify-between'>
            <img className='h-3/4' src='/images/signup/google.png' alt="" />
            <img className='h-3/4' src='/images/signup/github-logo.png' alt="" />
            <img className='h-3/4' src='/images/signup/fb.png' alt="" />
          </div>
        </div>

        <div className='w-3/4 centering text-white font-krona text-xs'>Already have an account ? <span className='text-[#88DC61] cursor-pointer'onClick={signUp}> Signin</span></div>
        
      </div>
    </div>
  )
}

export default Signup
