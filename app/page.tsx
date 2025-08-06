//Written by Yuqian Cui
//display the intro page, explaining the context of the Entity hunt game
'use client';

export default function IntroScreen() {
    return (
        <div className="min-h-screen bg-black text-pink-200 font-mono flex items-center justify-center px-4" style={{ fontFamily: '"Courier New", monospace' }}>
            <div className="max-w-2xl text-center text-[#ec7a7a]">
                <h1 className="text-6xl font-bold text-[#ff4444] mb-4">HELP...</h1>

                <p className="text-2xl leading-relaxed mb-6">
                    You have stumbled upon an ancient website... <br />
                    A presence is trapped here — something forgotten, buried beneath digital dust. <br />
                    It reaches out to you through static and whispers...
                </p>

                <p className="text-xl leading-relaxed mb-8">
                    Can you find the hidden entity and set it free before it is trapped forever?
                </p>

                <a
                    href="/New_game"
                    className="inline-block bg-[#00ffcc] text-black text-xl font-bold px-6 py-3 rounded-md hover:bg-[#00c3a5] transition"
                >
                    Save Me!!!!!
                </a>
            </div>
        </div>
    );
}
