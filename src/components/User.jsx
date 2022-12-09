import React from "react";

const User = ({ user, deleteUserHandler }) => {
    const squareStyle = {
        width: "100px",
        height: "100px",
        border: "1px solid green",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <div style={squareStyle}>
            <div>
                {user.age}살 - {user.name}
            </div>
            <button
                onClick={() => {
                    deleteUserHandler(user.id);
                }}
            >
                삭제하기
            </button>
        </div>
    );
};

export default User;
