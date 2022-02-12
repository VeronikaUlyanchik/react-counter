import React, {useState} from 'react';
import './App.css';
import s from './counter1.module.css'
import {Counter} from "./Counter";
import {InstallValues} from "./InstallValues";


function App() {
    let localStorageMin = localStorage.getItem('min');
    let localStorageMax = localStorage.getItem('max');

    let LSMinNumber = localStorageMin && JSON.parse(localStorageMin);
    let LSMaxNumber = localStorageMax && JSON.parse(localStorageMax);

    let [count, setCount] = useState(LSMinNumber || 0);
    let [min, setMinLocal] = useState(LSMinNumber || 0);
    let [max, setMaxLocal] = useState(LSMaxNumber || 0);
    let [inactiveCounter, setInactiveCounter] = useState(false);

    const incCount = () => {
        if(count<max) {
            setCount(count + 1);
        }
    };
    const resetCount = () => {
        setCount(min);
    };
    const setMinMax =  (min:number, max:number)=> {
        localStorage.setItem('max', JSON.stringify(max));
        localStorage.setItem('min', JSON.stringify(min));
        setCount(min);
        setMaxLocal(max);
    };
    const activateCounter =(value:boolean) => {
        setInactiveCounter(value)
    }
     const error = ((max<0 || min<0) || max===min || max<min ) && true;

    return (
        <div className={s.counter1}>
            <InstallValues error={error}  activateCounter= {activateCounter} setMinLocal={setMinLocal} setMaxLocal={setMaxLocal} min={min} max={max} setMaxMin={setMinMax}/>
            <Counter error={error} count={count} disabled={inactiveCounter} maxValue={max} incCount={incCount} resetCount={resetCount} startValue={min}/>
        </div>
    );
}

export default App;
