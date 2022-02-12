import React from 'react';
import s from './styles.module.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";

type CounterProps ={
    error: boolean
    count:number
    maxValue:number
    startValue:number
    incCount: ()=>void
    resetCount: ()=>void
    disabled:boolean
    settings?:boolean
    display?: boolean
    onClickSettings?: () => void
}
export const Counter = ({count, incCount, resetCount , startValue, maxValue,disabled,...props}:CounterProps) => {
    const containerStyle = props.settings ? s.displayNone : s.container;
    const displayNoneStyle = props.display ? s.container : containerStyle;
    return (
        <div className={displayNoneStyle}>
            <Display count={count} maxValue={maxValue} error={props.error} inactive={disabled}/>
            <div>
                <Button name={'inc'} callback={incCount} disabled={count === maxValue || disabled}/>
                <Button name={'reset'} callback={resetCount} disabled={count === startValue || disabled}/>
                {props.settings && props.onClickSettings && <Button name={'settings'} callback={props.onClickSettings} disabled={false}/>}
            </div>

        </div>
    )
}