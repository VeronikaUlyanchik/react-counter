import React, {ChangeEvent, useState} from 'react';
import s from './styles.module.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type InstallValuesProps ={
    setMinLocal: (num:number) => void
    setMaxLocal: (num:number) => void
    setMaxMin: (min:number, max:number)=> void
    min: number
    max: number
    error: boolean
    activateCounter: (value:boolean)=>void
    display?: boolean
    disable?: boolean
    setAble?:(value:boolean)=> void
}
export const InstallValues = ({ setMaxMin, setMinLocal, setMaxLocal,max, min, activateCounter,...props}:InstallValuesProps) => {


    const onChangeMax = (event:ChangeEvent<HTMLInputElement>)=>{
        props.setAble && props.setAble(false);
       let num = +event.currentTarget.value;
        setMaxLocal(num);
        activateCounter(true);
    };
    const onChangeMin = (event:ChangeEvent<HTMLInputElement>)=>{
        let num = +event.currentTarget.value;
        props.setAble && props.setAble(false);
        activateCounter(true);
        setMinLocal(num);
    };
    const setMaxMinHandler=()=>{
        setMaxMin(min,max);
        props.setAble && props.setAble(true);
        activateCounter(false)
    };
    const styleContainer= props.display ? s.displayNone : s.containerInstall

    return (
        <div className={styleContainer}>
            <div className={s.containerValues}>
                <div>Min Value: <Input  type={"number"} value={min} callback={onChangeMin} className={props.error ? `${s.error}` : ''}/></div>
                <div>Max Value: <Input  type={"number"} value={max} callback={onChangeMax} className={props.error ? `${s.error}` : ''}/></div>
            </div>
            <Button name={"Set"} callback={setMaxMinHandler} disabled={props.error || props.disable}/>
        </div>
    )
};
