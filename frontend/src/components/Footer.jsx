import React from 'react'

function Footer() {
    return (
        <div class="bg-blue-transparent rounded-lg shadow dark:bg-gray-900 text-white ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/images/signup/google.png" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ResumePulse</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/about" class="hover:underline me-4 md:me-6 text-white">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6 text-white">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6 text-white">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline text-white">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
                <span class="block text-base text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">ResumePulse™</a>. All Rights Reserved.</span>
                <span class="block text-base text-gray-500 sm:text-center dark:text-gray-400">Made with ❤️ in India</span>
            </div>
        </div>
    )
}

export default Footer
