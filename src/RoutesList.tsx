import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

export const PATH = {
    counter1: "/counter1",
    counter2: "/counter2"
}

export const RoutesList = () =>{
    return (
        <div>
          <Routes>
              <Route path={'/'} element={<Navigate  to={PATH.counter1}/>} />
              <Route path={PATH.counter1} element={ <Counter1/>}/>
              <Route path={PATH.counter2} element={ <Counter2 />}/>
          </Routes>
        </div>
    )

}