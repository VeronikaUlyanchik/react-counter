import React from "react";
import s from '.././styles.module.css';

type DisplayPropsType = {
    count:number
    maxValue: number
    error: boolean
    inactive: boolean
}

export const Display = (props:DisplayPropsType) => {
    const styleCount = `${props.count===props.maxValue ? s.textStop : ''} ${s.text}`;

    let message:string='';
    let classNameMessage = '';

    if (props.inactive){
        message="Enter value and press 'Set'";
        classNameMessage = s.inactiveText
    } if (props.error) {
        message = "Incorrect Value";
        classNameMessage = s.errorText
    }
    return (
        <div className={styleCount}>
             <p className={classNameMessage}>{message ? message : props.count }</p>
        </div>
    )
}