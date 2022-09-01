import React, { FunctionComponent } from 'react'
import { FaLock, FaUserAlt } from 'react-icons/fa'
import {IoLogInOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Button from './Button'

const LoginForm:FunctionComponent = () => (
    <form action='/' method='post' className='text-left max-w-md mx-auto'>
        <p>Login to continue</p>


        <div>


            <div className="relative my-2 rounded-md shadow-sm">
                <label htmlFor="login" className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                    <span className="text-primary sm:text-sm"><FaUserAlt /></span>
                </label>
                <input
                    type="text"
                    name="login"
                    id="login"
                    className="block w-full h-[50px] text-dark rounded-lg bg-opacity-30 bg-slate-50  pl-10 pr-12 border-primary focus:ring-primary sm:text-sm"
                    placeholder="user@mecitech.com"
                    required
                />
            </div>

            <div className="relative my-2 rounded-md shadow-sm">
                <label htmlFor="password" className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                    <span className="text-primary sm:text-sm"><FaLock /></span>
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full h-[50px] text-dark rounded-lg bg-opacity-30 bg-slate-50  pl-10 pr-12 border-primary focus:ring-primary sm:text-sm"
                    placeholder="**********"
                    required
                />
            </div>

            <div className="flex justify-between my-5 ">
                <div className="relative flex space-x-2 items-center ">

                    <input
                        type="checkbox"
                        name="remember_me"
                        id="remember_me"
                        className="block rounded-sm checked:bg-primary  border-primary focus:ring-primary "

                    />
                    <label htmlFor="remember_me" className="pointer-events-none  items-center  align-middle place-items-center">
                        <div className="text-primary sm:text-sm w-full">Remember Me</div>
                    </label>
                </div>

                <span>
                    {/* TODO : update a to Link component */}
                    <a href="/" className='text-primary sm:text-sm hover:text-secondary' >
                        Forgot Password ?
                    </a>
                </span>

            </div>

            <div className="flex flex-col text-center space-y-3">
                <Button icon={<IoLogInOutline />} type={"submit"} text={'Sign in'} styleClass={"mx-auto my-2"} />

                <span>
                    {/* TODO : Update a to Link component */}
                    <a href="" className='text-dark hover:text-primary'>New User? Sign Up</a>
                </span>
            </div>

        </div>

    </form>
)


export default LoginForm