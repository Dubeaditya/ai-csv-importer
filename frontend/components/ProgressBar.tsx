"use client";

interface Props {
    progress: number;
}

export default function ProgressBar({ progress }: Props) {
    return (
        <div className="mt-8">

            <div className="flex justify-between mb-2">
                <span className="font-semibold">Import Progress</span>
                <span>{progress}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">

                <div
                    className="bg-blue-600 h-4 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />

            </div>

        </div>
    );
}