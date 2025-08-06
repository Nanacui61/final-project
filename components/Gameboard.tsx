// <! WRITTEN BY STEVEN !> 

'use client';
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Tile } from './Tile';
import { EntityContext } from '@/context/EntityContext';
import { MAX_MOVES } from "@/lib/constants";


// initializes the size of the gameboard
const GRID_SIZE = 8;

const BoardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${GRID_SIZE}, 80px);
    grid-template-rows: repeat(${GRID_SIZE}, 80px);
    gap: 8px;
    margin-top: 20px;
`;

export const GameBoard = () => {
    // randomly chosen location of the treasure
    const [treasurePos, setTreasurePos] = useState<[number, number]>([0, 0]);
    //keeps track of which tile the user has clicked
    const [revealed, setRevealed] = useState<boolean[][]>(
        Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(false))
    );

    //connects the gameboard logic to global game state functions
    const { triggerEvent, gameStatus, moveCount } = useContext(EntityContext);

    useEffect(() => {
        //randomly places the treasure location on the gameboard
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);
        setTreasurePos([row, col]);
    }, []);

    // core logic, it:
    const handleClick = (row: number, col: number) => {
        // - prevents the same tile from being clicked more than once
        if (revealed[row][col]) return;
        /// - prevents the tiles from being clicked after the game has ended
        if (gameStatus === 'You Win!' || gameStatus === 'You Lose!') return;

        // - creates a new, shallow copy of revealed, updates the copy and assigns it back to revealed so that it rerenders
        const newRevealed = revealed.map((r) => [...r]);
        newRevealed[row][col] = true;
        setRevealed(newRevealed);

        // - sets boolean values that check if the tile clicked is treasure/ is adjacent to treasure 
        const isTreasure = row === treasurePos[0] && col === treasurePos[1];
        const isClose = Math.abs(row - treasurePos[0]) <= 1 && Math.abs(col - treasurePos[1]) <= 1;

        //increments the moveCount 
        const updatedMoveCount = moveCount + 1;

        // conditionals that check for different cases

        //if it's treasure, then triggers the corresponding state (see EntityContext)
        if (isTreasure) {
            triggerEvent("treasure");
            // logs our player history
            fetch("/api/record", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ moves: updatedMoveCount, result: "win" }),
            });
        // if we reached MAX_MOVES, triggers the corresponding state
        } else if (updatedMoveCount >= MAX_MOVES) {
            triggerEvent("maxMoves");
            // logs our player history
            fetch("/api/record", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ moves: updatedMoveCount, result: "lose" }),
            });

        // if we are close and still playing the game
        } else if (isClose) {
            triggerEvent("warm");
        // if we clicked on a tile that is neither the treasure nor adjacent to it
        } else {
            triggerEvent("wrong");
        }


    };

    return (
        <>
            <BoardWrapper>
                {Array.from({ length: GRID_SIZE }).map((_, row) =>
                    Array.from({ length: GRID_SIZE }).map((_, col) => (
                        <Tile
                            key={`${row}-${col}`}
                            revealed={revealed[row][col]}
                            isTreasure={row === treasurePos[0] && col === treasurePos[1]}
                            onClick={() => handleClick(row, col)}
                            disabled={gameStatus === 'You Win!' || gameStatus === 'You Lose!'}
                        />
                    ))
                )}
            </BoardWrapper>


        </>
    );
};
