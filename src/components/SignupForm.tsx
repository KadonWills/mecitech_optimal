import { FunctionComponent, useEffect, useState } from 'react'
import { FaLock, FaUserAlt, FaUserPlus } from 'react-icons/fa'
import { IoLogInOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Button from './Button'


const isPasswordMatching = (originalPassword: string, confirmationPassword: string): boolean => {
    return (originalPassword === confirmationPassword)
}


type SignupFormProps = {
    signupHandler : Function
}

const SignupForm:FunctionComponent<SignupFormProps> = ({signupHandler}) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {

        return () => {

        }
    }, [])

    const clearForm = () => {
        setLogin('')
        setPassword('')
        setConfirmPassword('')
    }

    const handleSignup = (ev: MouseEvent) => {
        ev.preventDefault();
        
        /* Verify if password match */
        let hasMatched = isPasswordMatching(password, confirmPassword)
        
        signupHandler()
        
    }


    return (
        <form action='/' method='post' className='text-left max-w-md mx-auto'>
            <p>Signup to continue</p>


            <div>


                <div className="relative my-2 rounded-md shadow-sm">
                    <label htmlFor="login" className="cursor-pointer absolute inset-y-0 left-0 flex items-center px-3">
                        <span className="text-primary sm:text-sm"><FaUserAlt /></span>
                    </label>
                    <input
                        type="text"
                        name="login"
                        id="login"
                        className="block w-full h-[50px] text-dark rounded-lg form-input bg-transparent  pl-10 pr-12 border-primary focus:ring-primary sm:text-sm"
                        placeholder="user@mecitech.com"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                </div>

                <label htmlFor="password" className="cursor-pointer  items-center  align-middle place-items-center">
                    Enter Password
                </label>
                <div className="relative my-2 rounded-md shadow-sm">
                    <label htmlFor="password" className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                        <span className="text-primary sm:text-sm"><FaLock /></span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full h-[50px] text-dark rounded-lg form-input bg-opacity-30 bg-slate-50  pl-10 pr-12 border-primary focus:ring-primary sm:text-sm"
                        placeholder="**********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <label htmlFor="confirm_password" className="cursor-pointer  items-center  align-middle place-items-center">
                    Confirm Password
                </label>
                <div className="relative my-2 rounded-md shadow-sm">
                    <div>

                        <label htmlFor="confirm_password" className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                            <span className="text-primary sm:text-sm"><FaLock /></span>
                        </label>
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            className="block w-full h-[50px] text-dark rounded-lg form-input bg-opacity-30 bg-slate-50  pl-10 pr-12 border-primary focus:ring-primary sm:text-sm"
                            placeholder="**********"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-between my-5 ">
                    <div className="relative flex space-x-2 items-center ">

                        <input
                            type="checkbox"
                            name="remember_me"
                            id="remember_me"
                            className="block rounded-sm checked:bg-primary  border-primary focus:ring-primary "

                        />
                        <label htmlFor="remember_me" className="cursor-pointer  items-center  align-middle place-items-center">
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

                <div className="flex flex-col text-center space-y-2">
                    <Button handleOnClick={handleSignup} icon={<FaUserPlus />} type={"submit"} text={'Sign up'} styleClass={"mx-auto my-2"} />

                    <span>
                        {/* TODO : Update a to Link component */}
                        <a href="" className='text-dark hover:text-primary text-sm'>Already have an account ? Log in.</a>
                    </span>
                </div>

            </div>

        </form>
    )
}


export default SignupForm