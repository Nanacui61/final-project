'use client';

import styled from "styled-components";
import { useContext } from "react";
import { EntityContext } from "@/context/EntityContext";
import { MAX_MOVES } from "@/lib/constants";

const Panel = styled.div`
  background: #121212;
  color: #00ffcc;
  padding: 1rem;
  border: 1px solid #00ffcc;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
  font-family: monospace;
    font-size: 1.3rem;
  text-align: center;
`;

const Info = styled.p`
  margin: 0.25rem 0;
`;


const BigStatus = styled.div<{ type: 'win' | 'lose' }>`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: ${({ type }) => (type === 'win' ? '#ff4444' : '#ff0000')};
  text-shadow: 0 0 10px ${({ type }) => (type === 'win' ? 'black' : 'black')};
  
`;

export default function StatusPanel() {
    const { moveCount, gameStatus } = useContext(EntityContext);

    const isWin = gameStatus === "You Win!";
    const isLose = gameStatus === "You Lose!";

    return (
        <Panel>
            <Info>Moves made: {moveCount}/{MAX_MOVES}</Info>
            {isWin && <BigStatus type="win">You Found MEEEE!</BigStatus>}
            {isLose && <BigStatus type="lose">Too LATE...!</BigStatus>}
            {!isWin && !isLose && <Info>Status: {gameStatus}</Info>}
        </Panel>
    );
}
