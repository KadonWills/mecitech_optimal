import React, { FunctionComponent } from 'react'
import { NavButtonProps } from '../types/NavButtonProps'

const NavButton:FunctionComponent<NavButtonProps> = ({ id, title, url, isActive }) => {
    return (
        <button 
            className={`py-1 px-3 rounded-md border-primary dark:border-light border ${isActive ? "bg-primary dark:bg-secondary text-light" : ""}
            active:bg-primary  hover:bg-dark text-primary dark:text-light text-sm hover:text-light dark:hover:text-secondary
            font-bold font-sans uppercase`}>
            {title}
        </button>
    )
}

export default NavButton