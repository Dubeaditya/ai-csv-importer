"use client";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

interface Props {
    total: number;
    imported: number;
    skipped: number;
}

const COLORS = ["#22c55e", "#ef4444"];

export default function PieChartCard({
    total,
    imported,
    skipped,
}: Props) {
    const data = [
        { name: "Imported", value: imported },
        { name: "Skipped", value: skipped },
    ];

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">
                Import Analytics
            </h2>

            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>

                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={110}
                            dataKey="value"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />
                        <Legend />

                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="text-center mt-4 text-gray-600">
                Total Records : <b>{total}</b>
            </div>
        </div>
    );
}