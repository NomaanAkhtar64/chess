import React, { useState } from 'react';

const getIcon = (type, color) => {
    switch (type) {
        case "rook":
            return "ROOOK"

        case "pawn":
            return "PAWN"

        case "king":
            return "KING"

        case "queen":
            return "QUEEN";

        case "bishop":
            return "BISHOP";

        case "knight":
            return "KNIGHT"

        default:
            return null
    }
}

const getColor = ({ x, y }) => {
    let baseMap = ['white', 'black'];
    let startingRow;
    if ((y + 2) % 2 === 0) {
        startingRow = 0;

    } else {
        startingRow = 1;
    }

    if ((x + 2) % 2 === 0) {
        return baseMap[startingRow]
    } else {
        if (startingRow >= 1) { return baseMap[startingRow - 1] }
        else { return baseMap[startingRow + 1] }
    }


}

const Piece = ({ type, posX, posY }) => {
    const [position, setPosition] = useState({ x: posX, y: posY })
    const color = getColor(position);
    console.log(color);

    return (
        <div className="piece" style={{ left: position.x * 64 + 'px', bottom: position.y * 64 + 'px' }}>
            {getIcon(type, color)}
        </div>
    );
}

export default Piece;