import React, { useState } from 'react';
import '../SignUp/signup.scss';
import { useFirebase } from '../../firebaseContext/FirebaseContext';

const Signup = ({ loginClose, loginOrNot, signUp }) => {
  const [email, setEmail] = useState('');  // Used for both sign up and login
  const [pass, setPass] = useState('');

  const firebase = useFirebase();

  const signUpEmailPass = async () => {
    try {
      await firebase.signupEmailandPassword(email, pass);
      alert('Account Created');
    } catch (error) {
      alert('Error creating account: ' + error.message);
    }
  };

  const signinEmailPass = async () => {
    try {
      await firebase.signinemailPassword(email, pass);
      alert('Logged In')
    } catch (error) {
      alert('Incorrect Credentials: ' + error.message);
    }
  };

  const googleSignIn = async () => {
    try {
      await firebase.googleSignUp();
    } catch (error) {
      alert('Google Sign-In Error: ' + error.message);
    }
  };

  return (
    <div className='fixed centering inset-0 bg-black bg-opacity-50 z-30'>
      <div className='bg-white bg-opacity-15 backdrop-blur-xl relative w-11/12 md:w-1/3 h-[600px] m-auto flex flex-col items-center rounded-[50px]'>
        <span onClick={loginClose} className='absolute right-7 top-5 text-xl font-poppins font-semibold hover:cursor-pointer'>
          <img className='h-[25px]' src='/images/signup/close.png' alt="Close" />
        </span>

        <div className='centering w-1/2 h-1/3 flex-col'>
          <img className='h-1/2 text-xl text-white' src='/images/signup/dummy_profile.png' alt="Profile" />
          <div className='font-krona text-xl text-white'>{loginOrNot ? 'SIGN UP' : 'LOGIN'}</div>
        </div>

        <div className='w-9/12 centering mb-4'>
          <form action="" className='w-full gap-4 flex flex-col'>
            {loginOrNot && <input className="w-full py-1 bg-transparent border-b-[1.5px] border-white text-white placeholder-white placeholder:font-krona focus:outline-none" type="text" placeholder='Name' />}
            <input className="w-full py-1 bg-transparent border-b-[1.5px] border-white text-white placeholder-white placeholder:font-krona focus:outline-none" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <input className="w-full py-1 bg-transparent border-b-[1.5px] border-white text-white placeholder-white placeholder:font-krona focus:outline-none" type="password" placeholder='Password' onChange={(e) => setPass(e.target.value)} value={pass} />
          </form>
        </div>

        <button className='w-3/4 rounded-2xl bg-[#66A947] h-[12%] centering text-white font-krona my-3' onClick={loginOrNot ? signUpEmailPass : signinEmailPass}>
          {loginOrNot ? 'Sign Up' : 'Login'}
        </button>

        <div className='my-3 text-white font-krona'>----------- OR -----------</div>

        <button className='flex items-center justify-center w-3/5 md:w-2/5 h-[10%] m-3 bg-white rounded-lg' onClick={googleSignIn}>
          <div className='flex items-center h-full justify-between'>
            <img className='h-3/4' src='/images/signup/google.png' alt="Google"/>
            <div>Continue with Google</div>

          </div>
        </button>

        <div className='w-3/4 centering text-white font-krona text-xs'>
          {loginOrNot ? 'Already have an account?' : "Don't have an account?"} 
          <span className='text-[#88DC61] cursor-pointer' onClick={signUp}>{loginOrNot ? ' Sign In' : ' Sign Up'}</span>
        </div>

      </div>
    </div>
  );
};

export default Signup;
