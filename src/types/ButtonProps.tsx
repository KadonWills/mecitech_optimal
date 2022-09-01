

export type ButtonProps = {
    type : "button" | "submit" | "reset" | undefined,
    text : string,
    icon? : JSX.Element,
    styleClass? : string,
    handleOnClick? : Function | (({}) => {}),
    leadingIcon? : boolean,
    disabled?: boolean
    
} 
