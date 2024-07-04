import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
// import '@unicons/iconscout/dist/css/line.css';

const SignUpCopy = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 text-yellow-200 flex justify-center items-center">
      <div className="text-center">
        <div className="mb-6">
          <h6 className="text-xl font-bold"><span className={`cursor-pointer ${isLogin ? 'border-b-2 border-yellow-200' : ''}`} onClick={() => setIsLogin(true)}>Log In </span><span className={`cursor-pointer ${!isLogin ? 'border-b-2 border-yellow-200' : ''}`} onClick={() => setIsLogin(false)}>Sign Up</span></h6>
        </div>
        <div className="relative w-96 h-96">
          <div className={`absolute w-full h-full transition-transform duration-500 transform ${!isLogin && 'rotate-y-180'}`}>
            <div className="absolute w-full h-full bg-gray-800 bg-opacity-75 rounded-md backface-hidden p-10">
              <h4 className="mb-6 text-2xl font-semibold">Log In</h4>
              <div className="mb-4">
                <input type="email" className="form-input mt-1 block w-full px-10 py-3 rounded bg-gray-800 text-yellow-200" placeholder="Email" />
                <i className="uil uil-at absolute left-4 top-10 text-yellow-200"></i>
              </div>
              <div className="mb-6">
                <input type="password" className="form-input mt-1 block w-full px-10 py-3 rounded bg-gray-800 text-yellow-200" placeholder="Password" />
                <i className="uil uil-lock-alt absolute left-4 top-28 text-yellow-200"></i>
              </div>
              <a href="https://www.web-leb.com/code" className="inline-block px-6 py-2 bg-yellow-200 text-gray-900 rounded font-semibold uppercase tracking-wider">Login</a>
              <p className="mt-4"><a href="https://www.web-leb.com/code" className="text-yellow-200 hover:text-gray-400">Forgot your password?</a></p>
            </div>
            <div className="absolute w-full h-full bg-gray-800 bg-opacity-75 rounded-md backface-hidden p-10 transform rotate-y-180">
              <h4 className="mb-6 text-2xl font-semibold">Sign Up</h4>
              <div className="mb-4">
                <input type="text" className="form-input mt-1 block w-full px-10 py-3 rounded bg-gray-800 text-yellow-200" placeholder="Full Name" />
                <i className="uil uil-user absolute left-4 top-10 text-yellow-200"></i>
              </div>
              <div className="mb-4">
                <input type="tel" className="form-input mt-1 block w-full px-10 py-3 rounded bg-gray-800 text-yellow-200" placeholder="Phone Number" />
                <i className="uil uil-phone absolute left-4 top-28 text-yellow-200"></i>
              </div>
              <div className="mb-4">
                <input type="email" className="form-input mt-1 block w-full px-10 py-3 rounded bg-gray-800 text-yellow-200" placeholder="Email" />
                <i className="uil uil-at absolute left-4 top-46 text-yellow-200"></i>
              </div>
              <div className="mb-6">
                <input type="password" className="form-input mt-1 block w-full px-10 py-3 rounded bg-gray-800 text-yellow-200" placeholder="Password" />
                <i className="uil uil-lock-alt absolute left-4 top-64 text-yellow-200"></i>
              </div>
              <a href="https://www.web-leb.com/code" className="inline-block px-6 py-2 bg-yellow-200 text-gray-900 rounded font-semibold uppercase tracking-wider">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpCopy;
