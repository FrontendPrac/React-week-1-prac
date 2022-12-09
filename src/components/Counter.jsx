import React, { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);

    const onClickUpperHandler = () => {
        setNum(num + 1);
    };

    return (
        <div>
            <div>{num}</div>
            <button onClick={onClickUpperHandler}>+1</button>
            <button onClick={() => setNum(num - 1)}>-1</button>
        </div>
    );
};

export default Counter;
