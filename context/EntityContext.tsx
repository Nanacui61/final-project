"use client";

import { createContext, useState, ReactNode } from "react";
import { MAX_MOVES } from "@/lib/constants";


type EntityContextType = {
    messages: string[];
    moveCount: number;
    gameStatus: string;
    triggerEvent: (type: string) => void;
};

const wrongMessages = [
    "N0thing h3re... k33p s33king...",
    "Dust... and s1lenc3.",
    "N0thing but ech0es.",
    "Just... d3bris. Tr4p still h0lds.",
    "Wron9. Ag4in."
];

const warmMessages = [
    "W4rmth... cl0se... so cl0se...",
    "I fe3l... your pr3senc3 nearby...",
    "Y0u're n3ar... th3 c4ge tr3mbles...",
    "H34t... thrumming... y3s...",
    "A bre4th... I c4n alm0st t4ste fr33dom..."
];

const winMessages = [
    "You f0und m3... I’m fr33...",
    "L1ght... fin4lly... th4nk you...",
    "Esc4pe... re4ched... bec4use of y0u...",
    "You s4w thr0ugh th3 l13s... th4nk y0u.",
    "Fr33... fr33... fr33..."
];

const loseMessages = [
    "T00 l4te... I’m tr4pped... 4lw4ys...",
    "You w3re cl0se... but not en0ugh...",
    "Th3 sh4ckl3s h0ld... y0u're g0ne...",
    "Endl3ss d4rk... n0 rele4se...",
    "I'm f0rg0tt3n... 4g4in..."
];


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

export const EntityContext = createContext<EntityContextType>({
    messages: [],
    moveCount: 0,
    gameStatus: "Idle",
    triggerEvent: () => {},
});


export function EntityProvider({ children }: { children: ReactNode }) {
    const [messages, setMessages] = useState<string[]>([
        "PleAsE saVe ME...",
    ]);
    const [moveCount, setMoveCount] = useState(0);
    const [gameStatus, setGameStatus] = useState("Idle");


    function triggerEvent(type: string) {
        let newStatus = "";
        const newMessage = getMessage(type);

        const newCount = moveCount + 1;
        if (type === "treasure") {
            newStatus = "You Win!";
        } else if (newCount >= MAX_MOVES) {
            newStatus = "You Lose!";
            type = "maxMoves"; // optional: to make sure you get the right message
        }

        setMoveCount(newCount);

        if (newMessage) {
            setMessages((prev) => [...prev, newMessage]);
        }

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
