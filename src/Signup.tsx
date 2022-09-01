import React from 'react'
import SignupForm from './components/SignupForm'

const Signup = () => (
    <>
        <img src="" alt="solar panels image" className="fixed top-0 left-0 w-full h-[100vh] object-contain" />
        <div className="w-full h-[100vh] p-5 md:p-0 relative flex flex-col place-content-center text-center m-0 bg-opacity-70  bg-light dark:bg-dark text-primary dark:text-light ">
            <div className=''>
                <h1 className="text-[40px] tracking-[0.245em] leading-[1.5em] font-black mb-5">OPTIMAL</h1>

                <SignupForm />


            </div>

            {/* copyright section */}
            <div className='relative mx-auto text-sm text-center mt-3'>
                <p>
                    <a className='text-primary' href="/">Terms and Conditions </a>
                    | 
                    <a className='text-primary' href="/"> Privacy Policy</a>
                </p>
                <p>All Rights Reserved @2022</p>
            </div>

            <div className="absolute text-sm bottom-5 right-5">MECITECH</div>
        </div>

    </>
)

export default Signup