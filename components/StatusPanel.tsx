// <! WRITTEN BY STEVEN !> 
// this is the panel on top of the terminal 
'use client';

import styled from "styled-components";
import { useContext } from "react";
import { EntityContext } from "@/context/EntityContext";
import { MAX_MOVES } from "@/lib/constants";

const Panel = styled.div`
  background: #121212;
  color: #00ffcc;
  padding: 2%;
  border: 1px solid #00ffcc;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 4.2% auto;
  font-family: monospace;
  font-size: calc(1px + 2vh);
  text-align: center;
`;

const Info = styled.p`
  margin: 0.5% 0;
`;


const BigStatus = styled.div<{ type: 'win' | 'lose' }>`
    font-size: calc(2px + 5vh);
    font-weight: bold;
    margin-top: 1%;
    color: ${({ type }) => (type === 'win' ? '#ff4444' : '#ff0000')};
    text-shadow: 0 0 10px ${({ type }) => (type === 'win' ? 'black' : 'black')};

`;

// displays current move count and max move count, also displays win/lose messages
export default function StatusPanel() {
    const { moveCount, gameStatus } = useContext(EntityContext);

    const isWin = gameStatus === "You Win!";
    const isLose = gameStatus === "You Lose!";

    return (
        <Panel>
            <Info>Moves made: {moveCount}/{MAX_MOVES}</Info>
            {isWin && (
                <BigStatus type={"win"}>
                    I’m FrEE!<br />
                    You fOUnd m3...<br />
                    thaNk YOu, stRanGer.
                </BigStatus>

            )}

            {isLose && <BigStatus type="lose">Too LATE...!</BigStatus>}
            {!isWin && !isLose && <Info>Status: {gameStatus}</Info>}
        </Panel>
    );
}
