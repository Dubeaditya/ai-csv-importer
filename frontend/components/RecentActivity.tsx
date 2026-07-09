"use client";

export default function RecentActivity() {
    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mt-8">

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Recent Activity
            </h2>

            <div className="space-y-2">

                <div className="flex justify-between items-center border-b border-gray-200 py-4">
                    <span className="text-gray-900 font-semibold text-lg">
                        📤 CSV Uploaded
                    </span>

                    <span className="text-green-600 font-bold text-lg">
                        Completed
                    </span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-200 py-4">
                    <span className="text-gray-900 font-semibold text-lg">
                        📄 CSV Parsed
                    </span>

                    <span className="text-green-600 font-bold text-lg">
                        Completed
                    </span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-200 py-4">
                    <span className="text-gray-900 font-semibold text-lg">
                        🤖 AI Processing
                    </span>

                    <span className="text-green-600 font-bold text-lg">
                        Completed
                    </span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-200 py-4">
                    <span className="text-gray-900 font-semibold text-lg">
                        📊 CRM Generated
                    </span>

                    <span className="text-green-600 font-bold text-lg">
                        Completed
                    </span>
                </div>

                <div className="flex justify-between items-center py-4">
                    <span className="text-gray-900 font-semibold text-lg">
                        ⬇ Download Ready
                    </span>

                    <span className="text-blue-600 font-bold text-lg">
                        Ready
                    </span>
                </div>

            </div>

        </div>
    );
}