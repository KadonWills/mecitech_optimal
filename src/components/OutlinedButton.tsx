import { FunctionComponent } from "react"
import { ButtonProps } from "../types/ButtonProps"


const  Button:FunctionComponent<ButtonProps> = ({type, text, icon, styleClass, handleOnClick, leadingIcon=true, disabled=false}) => {
  return (
    <button 
    type={type} 
    onClick={ (e) => handleOnClick ? handleOnClick(e) : console.log("Button clicked") }
    className={`max-w-max py-1 px-3 border-2 border-primary dark:border-secondary hover:bg-primary dark:hover:bg-secondary ${ !disabled && ' bg-opacity-50'} disabled:opacity-30
        hover:shadow-lg shadow-dark text-primary dark:text-light hover:text-light rounded-md text-center 
        ease-in-out duration-200 items-center
        flex flex-row space-x-2  ${styleClass}`} 
    disabled={disabled}>
        
        { leadingIcon && icon  }
        
        <span className="capitalize">
            {text}
        </span>

        { !leadingIcon && icon  }


    </button>
  )
}

export default Button
