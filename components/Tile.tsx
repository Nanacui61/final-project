'use client';
import React from 'react';
import styled , {keyframes,css}from 'styled-components';

type TileProps = {
    revealed: boolean;
    isTreasure: boolean;
    onClick: () => void;
    disabled?: boolean;
};

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 4px red; }
  50% { box-shadow: 0 0 12px #ff0044; }
  100% { box-shadow: 0 0 4px red; }
`;


const TileWrapper = styled.div<{
    revealed: boolean;
    isTreasure: boolean;
}>`
    width: 80px;
    height: 80px;
    border: 1px solid #444;
    background-color: ${({ revealed }) => (revealed ? "#222" : "#111")};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    user-select: none;

    ${({ revealed, isTreasure }) =>
            revealed &&
            isTreasure &&
            css`
      background-color: #440000;
      color: #ff4444;
      animation: ${pulseGlow} 1s infinite;
    `}
`;
export const Tile: React.FC<TileProps> = ({
                                              revealed,
                                              isTreasure,
                                              onClick,
                                              disabled,
                                          }) => {
    const content = revealed
        ? isTreasure
            ? "👁" // 👁 could be “the entity”
            : "⬜"
        : "";
    return (
        <TileWrapper
            revealed={revealed}
            isTreasure={isTreasure}
            onClick={!disabled ? onClick: undefined}
            style={{ cursor: disabled ? 'not-allowed' : 'pointer', }}
        >
            {content}
        </TileWrapper>
    );
};