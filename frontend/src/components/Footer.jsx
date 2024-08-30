import React from 'react'

function Footer() {
    return (
        <div className="bg-blue-transparent rounded-lg shadow dark:bg-gray-900 text-white ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/images/resume__logo.png" className="h-12 " />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ResumePulse</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/about" className="hover:underline me-4 md:me-6 text-white">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 text-white">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 text-white">Licensing</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline text-white">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
                <span className="block text-base text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">ResumePulse™</a>. All Rights Reserved.</span>
                <span className="block text-base text-gray-500 sm:text-center dark:text-gray-400">Made with ❤️ in India</span>
            </div>
        </div>
    )
}

export default Footer
