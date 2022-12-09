import React from "react";
import User from "./User";
import "./MapArray";

const MapObj = () => {
    const style = {
        padding: "20px",
        display: "flex",
        gap: "12px",
        border: "black solid 1px",
        marginTop: "10px",
    };

    const users = [
        { id: 1, age: 30, name: "송중기" },
        { id: 2, age: 24, name: "송강" },
        { id: 3, age: 21, name: "김유정" },
        { id: 4, age: 29, name: "구교환" },
    ];
    return (
        <div style={style}>
            {users.map((user) => {
                if (user.age > 25) {
                    return <User user={user} key={user.id}></User>;
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default MapObj;
