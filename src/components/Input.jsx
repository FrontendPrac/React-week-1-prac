import React, { useState } from "react";

const Input = () => {
    const [value, setValue] = useState("");

    const onChangeHandler = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
    };
    console.log(value);
    return <input type="text" onChange={onChangeHandler} value={value} />;
};

export default Input;
