import getAllGameRecords from "@/lib/getAllRecords";

export default async function GameHistoryPage() {
    const records = await getAllGameRecords();

    return (
        <div className="min-h-screen bg-zinc-900 text-white px-6 py-8 font-mono">
            <h1 className="text-2xl font-bold text-center">Game History</h1>

            <div className="overflow-x-auto mt-6">
                <table className="w-full max-w-4xl mx-auto border-collapse">
                    <thead>
                    <tr className="border-b border-zinc-600 text-left">
                        <th className="py-2 px-4">Result</th>
                        <th className="py-2 px-4">Moves</th>
                        <th className="py-2 px-4">Timestamp</th>
                    </tr>
                    </thead>
                    <tbody>
                    {records.map((r) => (
                        <tr key={r.id} className="border-b border-zinc-800 hover:bg-zinc-800 transition">
                            <td className="py-2 px-4">{r.result}</td>
                            <td className="py-2 px-4">{r.moves}</td>
                            <td className="py-2 px-4">{new Date(r.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
