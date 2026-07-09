"use client";

interface PreviewTableProps {
    data: Record<string, any>[];
}

export default function PreviewTable({ data }: PreviewTableProps) {
    if (!data || data.length === 0) return null;

    const headers = Object.keys(data[0]);

    return (
        <div className="overflow-x-auto mt-6 bg-white rounded-lg shadow border">
            <table className="min-w-full text-sm">

                <thead className="bg-blue-600 text-white">

                    <tr>

                        {headers.map((header) => (

                            <th
                                key={header}
                                className="px-4 py-3 text-left border"
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
                            className="hover:bg-slate-100"
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