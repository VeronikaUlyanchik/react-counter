import React, {useState} from 'react';
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
}
export const Counter = ({count, incCount, resetCount , startValue, maxValue,disabled,...props}:CounterProps) => {
    return (
        <div className={s.container}>
            <Display count={count} maxValue={maxValue} error={props.error} inactive={disabled}/>
            <div>
                <Button name={'inc'} callback={incCount} disabled={count === maxValue || disabled}/>
                <Button name={'reset'} callback={resetCount} disabled={count === startValue || disabled}/>
            </div>

        </div>
    )
}