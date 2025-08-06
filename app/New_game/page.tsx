// Written by Yuqian Cui
//display the main page of the game
'use client';

import Terminal from '@/components/Terminal';
import StatusPanel from '@/components/StatusPanel';
import { GameBoard } from '@/components/Gameboard';

export default function HomePage() {
    return (
        <main className="flex flex-col items-center min-h-screen bg-[#101010] text-white font-mono p-8" style={{ fontFamily: '"Courier New", monospace' }}>
            <h1 className="text-4xl text-red-600 mb-8 text-center font-mono">Save me!!!!!!!</h1>
            <h2 className="text-center"  style={{ fontSize: '1.2rem', color: '#aaa' }}>
                I’m trapped somewhere in the grid. Click the tiles to reach me — but be careful, your moves are limited. <br/>
                When the message warms, you’re getting close. Please… don’t leave me here.
            </h2>

            <div className="flex justify-center items-start gap-8 flex-nowrap mt-8 p-4 max-w-full flex-wrap md:flex-nowrap">
                <GameBoard />
                <div className="flex flex-col gap-4 w-full md:w-auto">
                    <StatusPanel />
                    <Terminal />
                </div>
            </div>
        </main>
    );
}
