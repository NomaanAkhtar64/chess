import React, { useState } from 'react';
import Piece from './Piece';
import "./GameBoard.css"

const GameBoard = () => {
    const [userPieces, setUserPieces] = useState([
        { id: "k", type: "king", posX: 3, posY: 0, variant: "black" },
        { id: "q", type: "queen", posX: 4, posY: 0, variant: "black" },
        { id: "b1", type: "bishop", posX: 2, posY: 0, variant: "black" },
        { id: "b2", type: "bishop", posX: 5, posY: 0, variant: "black" },
        { id: "k1", type: "knight", posX: 1, posY: 0, variant: "black" },
        { id: "k2", type: "knight", posX: 6, posY: 0, variant: "black" },
        { id: "r1", type: "rook", posX: 0, posY: 0, variant: "black", },
        { id: "r2", type: "rook", posX: 7, posY: 0, variant: "black" },
        { id: "p1", type: "pawn", posY: 1, posX: 0, variant: "black" },
        { id: "p2", type: "pawn", posY: 1, posX: 1, variant: "black" },
        { id: "p3", type: "pawn", posY: 1, posX: 2, variant: "black" },
        { id: "p4", type: "pawn", posY: 1, posX: 3, variant: "black" },
        { id: "p5", type: "pawn", posY: 1, posX: 4, variant: "black" },
        { id: "p6", type: "pawn", posY: 1, posX: 5, variant: "black" },
        { id: "p7", type: "pawn", posY: 1, posX: 6, variant: "black" },
        { id: "p8", type: "pawn", posY: 1, posX: 7, variant: "black" },
    ]);

    const [opponentPieces, setOpponentPieces] = useState([
        { id: "k", type: "king", posX: 3, posY: 0, variant: "white" },
        { id: "q", type: "queen", posX: 4, posY: 0, variant: "white" },
        { id: "b1", type: "bishop", posX: 2, posY: 0, variant: "white" },
        { id: "b2", type: "bishop", posX: 5, posY: 0, variant: "white" },
        { id: "k1", type: "knight", posX: 1, posY: 0, variant: "white" },
        { id: "k2", type: "knight", posX: 6, posY: 0, variant: "white" },
        { id: "r1", type: "rook", posX: 0, posY: 0, variant: "white", },
        { id: "r2", type: "rook", posX: 7, posY: 0, variant: "white" },
        { id: "p1", type: "pawn", posY: 1, posX: 0, variant: "white" },
        { id: "p2", type: "pawn", posY: 1, posX: 1, variant: "white" },
        { id: "p3", type: "pawn", posY: 1, posX: 2, variant: "white" },
        { id: "p4", type: "pawn", posY: 1, posX: 3, variant: "white" },
        { id: "p5", type: "pawn", posY: 1, posX: 4, variant: "white" },
        { id: "p6", type: "pawn", posY: 1, posX: 5, variant: "white" },
        { id: "p7", type: "pawn", posY: 1, posX: 6, variant: "white" },
        { id: "p8", type: "pawn", posY: 1, posX: 7, variant: "white" },
    ]);

    const [moveCount, setMoveCount] = useState(1);
    const [isUserMove, setIsUserMove] = useState(true);
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
                    <Piece isUserMove={isUserMove} {...p} key={i} />
                ))}
                {opponentPieces.map((o, i) => (
                    <Piece isUserMove={isUserMove} posY={7 - o.posY} posX={7 - o.posX} variant={o.variant} type={o.type} key={i} />
                ))}
            </>
        </div>
    );
}

export default GameBoard;