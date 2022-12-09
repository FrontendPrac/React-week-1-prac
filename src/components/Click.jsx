import React, { useState } from "react";

const Click = () => {
    const onClickHandler = () => {
        setName("브라질");
    };
    const [name, setName] = useState("월드컵");
    return (
        <div>
            <button onClick={onClickHandler}>{name}</button>
        </div>
    );
};

export default Click;
