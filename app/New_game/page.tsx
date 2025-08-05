'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Terminal from '@/components/Terminal';
import StatusPanel from '@/components/StatusPanel';
import { GameBoard } from '@/components/Gameboard';

const PageContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #101010;
    min-height: 100vh;
    color: white;
    font-family: 'Courier New', monospace;
    padding: 2rem;
`;

const GameLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 2rem;
    padding: 1rem;
    flex-wrap: nowrap;

    @media (max-width: 1200px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;


const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const GameTitle = styled.h1`
  font-size: 2.7rem;
  color: red;
  margin-bottom: 1rem;
  text-align: center;
`;

export default function HomePage() {
    return (
        <PageContainer>
            <GameTitle>Save me!!!!!!!</GameTitle>
            <GameLayout>
                <GameBoard />
                <SidePanel>
                    <StatusPanel />
                    <Terminal />
                </SidePanel>
            </GameLayout>
        </PageContainer>
    );
}