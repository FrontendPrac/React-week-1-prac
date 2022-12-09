import React, { useState } from "react";
import User from "./User";
import "./MapArray";

const Btn = () => {
    const style = {
        padding: "20px",
        display: "flex",
        gap: "12px",
        border: "black solid 1px",
        marginTop: "10px",
    };

    const [users, setUsers] = useState([
        { id: 1, age: 30, name: "송중기" },
        { id: 2, age: 24, name: "송강" },
        { id: 3, age: 21, name: "김유정" },
        { id: 4, age: 29, name: "구교환" },
    ]);

    const [name, setName] = useState();
    const [age, setAge] = useState();

    const addUserHandler = () => {
        const newUser = {
            id: users.length + 1,
            age: age,
            name: name,
        };
        setUsers([...users, newUser]);
    };

    const deleteUserHandler = (id) => {
        const newUserList = users.filter((user) => user.id !== id);
        setUsers(newUserList);
    };

    return (
        <div>
            <div style={style}>
                {users.map((user) => {
                    return <User user={user} key={user.id} deleteUserHandler={deleteUserHandler}></User>;
                })}
            </div>
            <input
                value={name}
                placeholder="이름을 입력해주세요"
                // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
                onChange={(e) => setName(e.target.value)}
            />
            <input
                value={age}
                placeholder="나이를 입력해주세요"
                // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
                onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={addUserHandler}>추가하기</button>
        </div>
    );
};

export default Btn;
