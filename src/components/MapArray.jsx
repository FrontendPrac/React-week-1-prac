import React from "react";

const MapArray = () => {
    const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"];

    const style = {
        padding: "20px",
        display: "flex",
        gap: "12px",
        border: "black solid 1px",
        marginTop: "10px",
    };

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
        <div>
            <div style={style}>
                <div style={squareStyle}>감자</div>
                <div style={squareStyle}>고구마</div>
                <div style={squareStyle}>오이</div>
                <div style={squareStyle}>가지</div>
                <div style={squareStyle}>옥수수</div>
            </div>

            <div style={style}>
                {vegetables.map((vegetableName) => {
                    return (
                        <div style={squareStyle} key={vegetableName}>
                            {vegetableName}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MapArray;
