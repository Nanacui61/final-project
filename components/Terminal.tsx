// <! WRITTEN BY STEVEN !> 

'use client';

import styled from "styled-components";
import { useContext } from "react";
import { EntityContext } from "@/context/EntityContext";

const TerminalBox = styled.div`
  background-color: #000000;
  color: #00ff00;
  padding: 1rem;
  margin: 1rem auto;
  width: 500px;
  border: 1px solid #00ff00;
  font-family: 'Courier New', Courier, monospace;
  height: 200px;
  overflow-y: auto;
  border-radius: 6px;
`;

// slightly different styling for the display message when the player clicks on a tile that's close to the treasure
const Line = styled.div<{ isWarm?: boolean }>`
  margin-bottom: 0.3rem;
    font-size: 1.2rem;
  color: ${({ isWarm }) => (isWarm ? 'orange' : '#00ff00')};
`;

export default function Terminal() {
    const { messages } = useContext(EntityContext);

    // (could be improved) scans for keywords that are used in warm messages
    const isWarmMessage = (msg: string) =>
        /warm|cl0se|tr3mbles|H34t|br3ath|nearby/i.test(msg);

    return (
        <TerminalBox>
            {[...messages].reverse().map((msg, index) => (
                // displays text, if it's warm, render it another way
                <Line key={index} isWarm={isWarmMessage(msg)}>
                    &gt; {msg}
                </Line>
            ))}
        </TerminalBox>

    );
}
