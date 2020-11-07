import React, { useState } from 'react';
import Piece from './Piece';
import "./GameBoard.css"

const GameBoard = () => {
    const [userPieces, setUserPieces] = useState([
        { id: "k", type: "king", posX: 3, posY: 0 },
        { id: "q", type: "queen", posX: 4, posY: 0 },
        { id: "b1", type: "bishop", posX: 2, posY: 0 },
        { id: "b2", type: "bishop", posX: 5, posY: 0 },
        { id: "k1", type: "knight", posX: 1, posY: 0 },
        { id: "k2", type: "knight", posX: 6, posY: 0 },
        { id: "r1", type: "rook", posX: 0, posY: 0, },
        { id: "r2", type: "rook", posX: 7, posY: 0 },
        { id: "p1", type: "pawn", posY: 1, posX: 0 },
        { id: "p2", type: "pawn", posY: 1, posX: 1 },
        { id: "p3", type: "pawn", posY: 1, posX: 2 },
        { id: "p4", type: "pawn", posY: 1, posX: 3 },
        { id: "p5", type: "pawn", posY: 1, posX: 4 },
        { id: "p6", type: "pawn", posY: 1, posX: 5 },
        { id: "p7", type: "pawn", posY: 1, posX: 6 },
        { id: "p8", type: "pawn", posY: 1, posX: 7 },
    ]);

    const [opponentPieces, setOpponentPieces] = useState([
        { id: "k", type: "king", posX: 3, posY: 0 },
        { id: "q", type: "queen", posX: 4, posY: 0 },
        { id: "b1", type: "bishop", posX: 2, posY: 0 },
        { id: "b2", type: "bishop", posX: 5, posY: 0 },
        { id: "k1", type: "knight", posX: 1, posY: 0 },
        { id: "k2", type: "knight", posX: 6, posY: 0 },
        { id: "r1", type: "rook", posX: 0, posY: 0, },
        { id: "r2", type: "rook", posX: 7, posY: 0 },
        { id: "p1", type: "pawn", posY: 1, posX: 0 },
        { id: "p2", type: "pawn", posY: 1, posX: 1 },
        { id: "p3", type: "pawn", posY: 1, posX: 2 },
        { id: "p4", type: "pawn", posY: 1, posX: 3 },
        { id: "p5", type: "pawn", posY: 1, posX: 4 },
        { id: "p6", type: "pawn", posY: 1, posX: 5 },
        { id: "p7", type: "pawn", posY: 1, posX: 6 },
        { id: "p8", type: "pawn", posY: 1, posX: 7 },
    ]);
    const [userDeadPieces, setUserDeadPieces] = useState([]);
    const [opponentDeadPieces, setOpponentDeadPieces] = useState([]);
    const [moveCount, setMoveCount] = useState(1);
    const [isUserMove, setIsUserMove] = useState(true);
    return (
        <>
            <div className="turn-counter">
                {`${isUserMove ? "USER" : "OPPONENT"}  TURN ${Math.ceil(moveCount / 2)}`}
            </div>
            <div className="game-board">
                <div className="squares">
                    <div className="row white">
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                    </div>
                    <div className="row white">
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
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
                    <div className="row black">
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                    </div>
                    <div className="row black">
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                    </div>
                </div>
                {opponentDeadPieces.map((o, i) => (
                    <Piece isUserMove={false} posY={i < 8 ? 11 : 10} posX={i < 8 ? i : i - 8} variant="white" type={o.type} key={i} />
                ))}
                {opponentPieces.map((o, i) => (
                    <Piece isUserMove={isUserMove} posY={9 - o.posY} posX={7 - o.posX} variant="white" type={o.type} key={i} />
                ))}
                {userPieces.map((p, i) => (
                    <Piece isUserMove={isUserMove} variant="black" posX={p.posX} posY={p.posY + 2} type={p.type} key={i} />
                ))}
                {userDeadPieces.map((o, i) => (
                    <Piece isUserMove={false} posY={i < 8 ? 1 : 0} posX={i < 8 ? i : i - 8} variant="black" type={o.type} key={i} />
                ))}
            </div>
        </>
    );
}

export default GameBoard;