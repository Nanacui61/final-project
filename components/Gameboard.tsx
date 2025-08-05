'use client';
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Tile } from './Tile';
import { EntityContext } from '@/context/EntityContext';
import { MAX_MOVES } from "@/lib/constants";


const GRID_SIZE = 8;

const BoardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${GRID_SIZE}, 80px);
    grid-template-rows: repeat(${GRID_SIZE}, 80px);
    gap: 8px;
    margin-top: 20px;
`;

export const GameBoard = () => {
    const [treasurePos, setTreasurePos] = useState<[number, number]>([0, 0]);
    const [revealed, setRevealed] = useState<boolean[][]>(
        Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(false))
    );

    const { triggerEvent, gameStatus, moveCount } = useContext(EntityContext);

    useEffect(() => {

        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);
        setTreasurePos([row, col]);
    }, []);

    const handleClick = (row: number, col: number) => {
        console.log("[handleClick] clicked:", row, col);
        if (revealed[row][col]) return;
        if (gameStatus === 'You Win!' || gameStatus === 'You Lose!') return;

        const newRevealed = revealed.map((r) => [...r]);
        newRevealed[row][col] = true;
        setRevealed(newRevealed);
        //setLastClick([row, col]);



        const isTreasure = row === treasurePos[0] && col === treasurePos[1];
        const isClose = Math.abs(row - treasurePos[0]) <= 1 && Math.abs(col - treasurePos[1]) <= 1;

        const updatedMoveCount = moveCount + 1;

        if (isTreasure) {
            triggerEvent("treasure");

            fetch("/api/record", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ moves: updatedMoveCount, result: "win" }),
            });
        } else if (updatedMoveCount >= MAX_MOVES) {
            triggerEvent("maxMoves");

            fetch("/api/record", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ moves: updatedMoveCount, result: "lose" }),
            });
        } else if (isClose) {
            triggerEvent("warm");
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
