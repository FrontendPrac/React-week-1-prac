import React, { useState } from "react";

const State = () => {
    const [name, setName] = useState("Kidongg");
    return (
        <div>
            <h1>{name}</h1>
            <Son name={name} setName={setName} />
        </div>
    );
};

const Son = ({ name, setName }) => {
    setName("Messi");
    return <div>{name}</div>;
};

export default State;
