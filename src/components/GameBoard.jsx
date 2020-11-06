import React, { useEffect, useState } from 'react';
import "./GameBoard.css"
import Piece from './Piece';

const GameBoard = () => {
    const [userPieces, setUserPieces] = useState([
        { type: "king", posX: 3, posY: 0, variant: "black" },
        { type: "queen", posX: 4, posY: 0, variant: "black" },
        { type: "bishop", posX: 2, posY: 0, variant: "black" },
        { type: "bishop", posX: 5, posY: 0, variant: "black" },
        { type: "knight", posX: 1, posY: 0, variant: "black" },
        { type: "knight", posX: 6, posY: 0, variant: "black" },
        { type: "rook", posX: 0, posY: 0, variant: "black", },
        { type: "rook", posX: 7, posY: 0, variant: "black" },
        { type: "pawn", posY: 1, posX: 0, variant: "black" },
        { type: "pawn", posY: 1, posX: 1, variant: "black" },
        { type: "pawn", posY: 1, posX: 2, variant: "black" },
        { type: "pawn", posY: 1, posX: 3, variant: "black" },
        { type: "pawn", posY: 1, posX: 4, variant: "black" },
        { type: "pawn", posY: 1, posX: 5, variant: "black" },
        { type: "pawn", posY: 1, posX: 6, variant: "black" },
        { type: "pawn", posY: 1, posX: 7, variant: "black" },
    ]);

    const [opponentPieces, setOpponentPieces] = useState([
        { type: "king", posX: 3, posY: 0, variant: "white" },
        { type: "queen", posX: 4, posY: 0, variant: "white" },
        { type: "bishop", posX: 2, posY: 0, variant: "white" },
        { type: "bishop", posX: 5, posY: 0, variant: "white" },
        { type: "knight", posX: 1, posY: 0, variant: "white" },
        { type: "knight", posX: 6, posY: 0, variant: "white" },
        { type: "rook", posX: 0, posY: 0, variant: "white", },
        { type: "rook", posX: 7, posY: 0, variant: "white" },
        { type: "pawn", posY: 1, posX: 0, variant: "white" },
        { type: "pawn", posY: 1, posX: 1, variant: "white" },
        { type: "pawn", posY: 1, posX: 2, variant: "white" },
        { type: "pawn", posY: 1, posX: 3, variant: "white" },
        { type: "pawn", posY: 1, posX: 4, variant: "white" },
        { type: "pawn", posY: 1, posX: 5, variant: "white" },
        { type: "pawn", posY: 1, posX: 6, variant: "white" },
        { type: "pawn", posY: 1, posX: 7, variant: "white" },
    ]);
    return (
        <div className="game-board">
            <div className="squares">
                <div className="row">
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                </div>
                <div className="row">
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                </div>
                <div className="row">
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                </div>
                <div className="row">
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                </div>
                <div className="row">
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                </div>
                <div className="row">
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                </div>
                <div className="row">
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                </div>
                <div className="row">
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                    <div className="square black"></div>
                    <div className="square white"></div>
                </div>
            </div>
            <>
                {userPieces.map((p, i) => (
                    <Piece {...p} key={i} />
                ))}
                {opponentPieces.map((o, i) => (
                    <Piece posY={7 - o.posY} posX={7 - o.posX} variant={o.variant} type={o.type} key={i} />
                ))}
            </>
        </div>
    );
}

export default GameBoard;