// read from mongodb
import getCollection, {RECORDS_COLLECTION} from "@/mongodb";
import { GameRecordProps} from "@/type/type";

export default async function getAllGameRecords(): Promise<GameRecordProps[]> {
    const gameCollection = await getCollection(RECORDS_COLLECTION);
    const data = await gameCollection.find().toArray();

    const records: GameRecordProps[] = data.map((doc) => ({
        id: doc._id.toHexString(),
        moves: doc.moves,
        result: doc.result,
        timestamp: doc.timestamp,
    }));

    return records.reverse(); // show most recent first
}
