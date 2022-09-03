import React, { FunctionComponent } from 'react'
import LoginForm from './components/LoginForm'

type LoginProps = {
    loginHandler : Function,
    goToSignup: Function
}

const Login:FunctionComponent<LoginProps> = ({loginHandler, goToSignup}) => (
    <>
        <img src="" alt="solar panels image" className="fixed top-0 left-0 w-full h-[100vh] object-contain" />
        <div className="w-full h-[100vh] relative flex flex-col place-content-center text-center m-0 bg-opacity-70  bg-light dark:bg-dark text-primary dark:text-light ">
            <div className='mx-10'>
                <h1 className="text-[40px] tracking-[0.245em] leading-[1.8em] font-black mb-10">OPTIMAL</h1>

                <LoginForm goToSignup={goToSignup} loginHandler={loginHandler} />


            </div>

            {/* copyright section */}
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 text-sm text-center'>
                <p>
                    <a className='text-primary dark:text-secondary' href="/">Terms and Conditions </a>
                    | 
                    <a className='text-primary dark:text-secondary' href="/"> Privacy Policy</a>
                </p>
                <p>All Rights Reserved @2022</p>
            </div>

            <div className="absolute text-sm bottom-5 right-5">MECITECH</div>
        </div>

    </>
)

export default Login