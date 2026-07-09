"use client";

export default function Loader() {
    return (
        <div className="flex flex-col justify-center items-center py-10">

            <div className="w-16 h-16 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>

            <h2 className="mt-5 text-lg font-semibold text-gray-700">
                AI is Processing CSV...
            </h2>

        </div>
    );
}
