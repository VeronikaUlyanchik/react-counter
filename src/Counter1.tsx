import React, {useEffect, useState} from 'react';
import './App.css';
import s from './counter1.module.css'
import {Counter} from "./Counter";
import {InstallValues} from "./InstallValues";


function App() {

    const LSNumber = (key:string) => {
        let localStorageN = localStorage.getItem(key);
        if (localStorageN) {
            return JSON.parse(localStorageN)
        }
    };

    let [count, setCount] = useState(LSNumber('count') || 0);
    let [min, setMinLocal] = useState(LSNumber('min') || 0);
    let [max, setMaxLocal] = useState(LSNumber('max') || 0);
    let [inactiveCounter, setInactiveCounter] = useState(false);
    let [disable, setAble] = useState(true);

    useEffect(()=> {
        setToLocalStorage(count, "count");
    },[count]);

    const incCount = () => {
        if(count<max) {
            setCount(count + 1);
        }
    };
    const resetCount = () => {
        setCount(min);
    };
    const setMinMax =  (min:number, max:number)=> {
        setToLocalStorage(min, "min");
        setToLocalStorage(max, "max");
        setCount(min);
        setMaxLocal(max);
    };
    const setToLocalStorage = (item:number, key:string) => {
        localStorage.setItem(key, JSON.stringify(item));
    }
    const activateCounter =(value:boolean) => {
        setInactiveCounter(value)
    }
     const error = ((max<0 || min<0) || max===min || max<min ) && true;

    return (
        <div className={s.counter1}>
            <InstallValues error={error}  activateCounter= {activateCounter} setMinLocal={setMinLocal} setMaxLocal={setMaxLocal} min={min} max={max} setMaxMin={setMinMax} disable={disable} setAble={setAble}/>
            <Counter error={error} count={count} disabled={inactiveCounter} maxValue={max} incCount={incCount} resetCount={resetCount} startValue={min}/>
        </div>
    );
}

export default App;
