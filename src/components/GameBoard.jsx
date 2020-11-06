import React from 'react';
import "./GameBoard.css"
import Piece from './Piece';

const GameBoard = () => {
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
                <Piece type="queen" posY={0} posX={4} />
            </>
        </div>
    );
}

export default GameBoard;