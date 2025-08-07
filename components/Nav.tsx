// Written by Yuqian Cui
// display the Nav bar that can redirect to Home, Game History and New Game page
'use client';

import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.nav`
    width: 100%;
    padding: 16px 32px; 
    background-color: #1a1a1a;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #333;
    font-family: monospace;
`;

const NavLink = styled(Link)`
    color: #00ffcc;
    text-decoration: none;
    margin-right: 24px; 
    font-weight: bold;
    font-size: calc(2px + 1.2vw); 

    &:hover {
        text-decoration: underline;
    }
`;
export default function Nav() {

    return (
        <NavBar>
            <div>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/History">Game History</NavLink>
                <NavLink
                    href="/New_game"
                    onClick={(e) => {
                        if (window.location.pathname === "/New_game") {
                            e.preventDefault();
                            window.location.reload();
                        }
                    }}
                >
                    New Game
                </NavLink>

            </div>
        </NavBar>
    );
}
