'use client';

import styled from 'styled-components';




const FullScreenWrapper = styled.div`
    background-color: black;
    color: #ffcccc;
    font-family: 'Courier New', monospace;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 2rem;
    text-align: center;
    color: #ec7a7a;
    font-family: 'Courier New', monospace;
    max-width: 700px;
    margin: 0 auto;

`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #ff4444;
    margin-bottom: 1rem;
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    line-height: 1.6;
    margin-bottom: 2rem;
`;



const StyledAnchor = styled.a`
    background-color: #00ffcc;
    color: #000;
    font-size: 1.2rem;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-family: monospace;

    &:hover {
        background-color: #00c3a5;
    }
`;

export default function IntroScreen() {

    return (
        <FullScreenWrapper>
            <Wrapper>
                <Title>HELP...</Title>
                <Paragraph>
                    You have stumbled upon an ancient website...
                    Strange symbols flicker across the screen.
                    A presence is trapped here — something forgotten, buried beneath digital dust.
                    It reaches out to you through static and whispers...
                </Paragraph>
                <Paragraph>
                    Can you find the hidden entity and set it free before it is trapped forever?
                </Paragraph>
                <StyledAnchor href="/New_game">Save Me!!!!!</StyledAnchor>

            </Wrapper>
        </FullScreenWrapper>
    );
}
