import React, {ChangeEvent} from "react";

type InputProps = {
    type: string
    callback: (event: ChangeEvent<HTMLInputElement>) => void
    value: number
    className: string
}
export const Input = ({type, callback, value, className, ...props}: InputProps) => {
    return (<input type={type} onChange={callback} value={value} className={className}/>)
}