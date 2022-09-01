import React, { FunctionComponent } from 'react'
import { NavButtonProps } from '../types/NavButtonProps'

const NavButton:FunctionComponent<NavButtonProps> = ({ id, title, url, isActive }) => {
    return (
        <button 
            className={`py-1 px-3 rounded-md border-primary border ${isActive ? "bg-primary text-light" : ""}
            active:bg-primary  hover:bg-dark text-primary text-sm hover:text-light
            font-bold font-sans uppercase`}>
            {title}
        </button>
    )
}

export default NavButton