"use client";

interface ResultTableProps {
    data: Record<string, any>[];
}

export default function ResultTable({ data }: ResultTableProps) {
    if (!data || data.length === 0) return null;

    const headers = Object.keys(data[0]);

    return (
        <div className="overflow-x-auto mt-8 bg-white rounded-lg shadow border">

            <table className="min-w-full text-sm">

                <thead className="bg-green-600 text-white">

                    <tr>

                        {headers.map((header) => (

                            <th
                                key={header}
                                className="px-4 py-3 border text-left"
                            >
                                {header}
                            </th>

                        ))}

                    </tr>

                </thead>

                <tbody>

                    {data.map((row, rowIndex) => (

                        <tr
                            key={rowIndex}
                            className="hover:bg-green-50"
                        >

                            {headers.map((header) => (

                                <td
                                    key={header}
                                    className="border border-gray-300 px-4 py-2 bg-white text-black font-semibold"
                                >
                                    {String(row[header] ?? "")}
                                </td>

                            ))}

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}