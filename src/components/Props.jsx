import React from "react";

function GrandFather() {
    const grandFather = "Ronaldo";
    return <Mother grandFather={grandFather} />;
}

function Mother({ grandFather }) {
    const name = "홍부인";
    const names = ["Kidonng", "Neymar"];
    const people = { name: "Kidongg", age: 27 };
    return (
        <div>
            <Child name={name} names={names} people={people} />
            <div>{grandFather}</div>
        </div>
    );
}

function Child({ name, names, people }) {
    console.log(name);
    console.log(names[0]);
    console.log(people.name);
    return <div>연결 성공</div>;
}

export default GrandFather;
