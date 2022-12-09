import React from "react";
import Click from "./components/Click";
import GrandFather from "./components/Props";
import State from "./components/State";
import Input from "./components/Input";
import Counter from "./components/Counter";
import MapArray from "./components/MapArray";
import MapObj from "./components/MapObj";
import Btn from "./components/Btn";

const App = () => {
    return (
        <div>
            <GrandFather />
            <State />
            <Click />
            <Input />
            <Counter />
            <MapArray />
            <MapObj />
            <Btn />
        </div>
    );
};

export default App;
