import React from 'react';

type ButtonPropsType={
    name:string
    callback: ()=>void
    disabled: boolean | undefined
}

export const Button = (props:ButtonPropsType) => {
    const onClickHandle = () => {
      props.callback()
    }
    return (
        <span>
           <button onClick={onClickHandle} disabled={props.disabled} >{props.name}</button>
        </span>
    );
};

