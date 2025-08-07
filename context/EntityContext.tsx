// <! WRITTEN BY STEVEN !> 
"use client";

import { createContext, useState, ReactNode } from "react";
import { MAX_MOVES } from "@/lib/constants";


type EntityContextType = {
    messages: string[]; // an array of message strings
    moveCount: number; // number of moves made
    gameStatus: string; //a string like "warm", "You Win!", etc
    triggerEvent: (type: string) => void; // function to be called when something happens
};

// custom messages for each stage so the players will get varying lines, so it's not that boring
const wrongMessages = [
    "N0thing h3re... k33p looking...",
    "Dust... and s1lenc3.",
    "N0thing but ech0es.",
    "Just... d3bris.",
    "Wron9. Ag4in."
];

const warmMessages = [
    "W4rmth... cl0se... so cl0se...",
    "I fe3l... your presencE nearby...",
    "Y0u're n3ar...", ,
    "A breAth... I cAn alm0st t4ste freEdom..."
];

const winMessages = [
    "You f0und m3... I’m frEE...",
    "...th4nk you...",
    "You s4w thr0ugh th3 l1Es... th4nk y0u.",
];

const loseMessages = [
    "T00 lAte... I’m trApped...",
    "You w3re cl0se... but not en0ugh...",
    "I'm f0rgottEn... 4gAin..."
];


// returns a random string from one of the arrays based on the type
function getMessage(type: string): string {
    const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
    switch (type) {
        case "wrong":
            return random(wrongMessages);
        case "warm":
            return random(warmMessages);
        case "treasure":
            return random(winMessages);
        case "maxMoves":
            return random(loseMessages);
        default:
            return "....";
    }
}

// creates the context with default values (empty list, 0 moves, etc.)
export const EntityContext = createContext<EntityContextType>({
    messages: [],
    moveCount: 0,
    gameStatus: "Idle",
    triggerEvent: () => {},
});

// wrapper for app and manages game state
export function EntityProvider({ children }: { children: ReactNode }) {
    const [messages, setMessages] = useState<string[]>([
        "PleAsE saVe ME...",
    ]);
    const [moveCount, setMoveCount] = useState(0);
    const [gameStatus, setGameStatus] = useState("Idle");

    // main logic that handles game events, triggered whenever a tile is clicked
    function triggerEvent(type: string) {
        let newStatus = "";
        const newMessage = getMessage(type);

        const newCount = moveCount + 1;

        // end game conditions
        if (type === "treasure") {
            newStatus = "You Win!";
        } else if (newCount >= MAX_MOVES) {
            newStatus = "You Lose!";
            type = "maxMoves";
        }

        //updates moveCount
        setMoveCount(newCount);

        // creates a new copy of the old array and appends whatever the new message to it 
        if (newMessage) {
            setMessages((prev) => [...prev, newMessage]);
        }

        //either win or lose 
        if (newStatus) {
            setGameStatus(newStatus);
        }
    }

    return (
        <EntityContext.Provider value={{ messages, moveCount, gameStatus, triggerEvent }}>
            {children}
        </EntityContext.Provider>
    );
}
