// Written by Yuqian Cui
// Saves a game result (win/lose, moves) to the database
import getCollection, { RECORDS_COLLECTION } from "@/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { moves, result } = await req.json();
    const collection = await getCollection(RECORDS_COLLECTION);

    const newRecord = {
        moves,
        result,
        timestamp: new Date().toISOString(),
    };

    await collection.insertOne(newRecord);
    return NextResponse.json({ success: true });
}
