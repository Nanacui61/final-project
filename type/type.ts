//Written by Yuqian Cui

// Represents a single game record stored in the database.
// Each record contains:
// - id: unique identifier for the record (MongoDB ObjectId as string)
// - moves: number of moves the player made in the game
// - result: whether the game ended in a "win" or "lose"
// - timestamp: ISO string indicating when the game ended

export type GameRecordProps = {
    id: string;
    moves: number;
    result: "win" | "lose";
    timestamp: string;
};
