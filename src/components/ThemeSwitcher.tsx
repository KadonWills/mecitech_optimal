import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {

    const [theme, setTheme] = useState<string>('')

    useEffect(() => {
        if(localStorage.getItem("theme") == "dark") {
            document.body.classList.add("dark")
            setTheme("dark")
        }
    }, [])


    const handleSwitch = () => {
        if (theme == "") {
            setTheme("dark")
            document.body.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.body.classList.remove("dark")
            localStorage.setItem("theme", "")
            setTheme('')
        }
    }

    return (
        <div className='absolute top-10 z-[100] bg-dark dark:bg-light right-3 w-[40px] h-[25px] ease-in-out duration-1000 cursor-pointer  rounded-full' onClick={handleSwitch} >
            <span className='dark:float-right float-left  ease-in-out duration-500'>{!theme ? '🌞' : '🌑'}</span>
        </div>
    )
}

export default ThemeSwitcher