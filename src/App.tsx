import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {InstallValues} from "./InstallValues";

function App() {

    let [count, setCount] = useState(0);
    let [min, setMinLocal] = useState(0);
    let [max, setMaxLocal] = useState(0);
    let [inactiveCounter, setInactiveCounter] = useState(false)

    const incCount = () => {
        if(count<max) {
            setCount(count + 1);
        }
    };
    const resetCount = () => {
        setCount(min);
    };
    const setMinMax =  (min:number, max:number)=> {
        setCount(min);
        setMaxLocal(max);
    };
    const activateCounter =(value:boolean) => {
        setInactiveCounter(value)
    }
     const error = ((max<0 || min<0) || max===min || max<min ) && true;

    return (
        <div className="App">
            <InstallValues error={error}  activateCounter= {activateCounter} setMinLocal={setMinLocal} setMaxLocal={setMaxLocal} min={min} max={max} setMaxMin={setMinMax}/>
            <Counter error={error} count={count} disabled={inactiveCounter} maxValue={max} incCount={incCount} resetCount={resetCount} startValue={min}/>
        </div>
    );
}

export default App;
