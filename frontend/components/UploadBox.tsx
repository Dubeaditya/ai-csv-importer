"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import PieChartCard from "./PieChartCard";
import RecentActivity from "./RecentActivity";
import ProgressBar from "./ProgressBar";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import axios from "axios";

import Loader from "./Loader";
import PreviewTable from "./PreviewTable";
import ResultTable from "./ResultTable";

interface Stats {
    total: number;
    imported: number;
    skipped: number;
}


export default function UploadBox() {
    const [file, setFile] = useState<File | null>(null);
    const [previewData, setPreviewData] = useState<any[]>([]);
    const [resultData, setResultData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const [stats, setStats] = useState<Stats>({
        total: 0,
        imported: 0,
        skipped: 0,
    });

    const downloadCSV = () => {
        if (resultData.length === 0) {
            alert("No data available.");
            return;
        }

        const headers = Object.keys(resultData[0]);

        const csv = [
            headers.join(","),
            ...resultData.map((row) =>
                headers
                    .map((header) =>
                        `"${String(row[header] ?? "").replace(/"/g, '""')}"`
                    )
                    .join(",")
            ),
        ].join("\n");

        const blob = new Blob([csv], {
            type: "text/csv;charset=utf-8;",
        });

        saveAs(blob, "crm_processed_data.csv");
    };

    const onDrop = (acceptedFiles: File[]) => {
        if (!acceptedFiles.length) return;

        const selected = acceptedFiles[0];

        if (!selected.name.endsWith(".csv")) {
            alert("Please upload only CSV file.");
            return;
        }

        setFile(selected);

        Papa.parse(selected, {
            header: true,
            skipEmptyLines: true,

            complete: (results) => {
                setPreviewData(results.data as any[]);
            },

            error: () => {
                alert("Unable to parse CSV.");
            },
        });
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            "text/csv": [".csv"],
        },
    });

    async function importCSV() {
        if (!file) {
            alert("Select CSV First");
            return;
        }

        try {
            setProgress(10);
            setLoading(true);

            const formData = new FormData();
            setProgress(30);
            formData.append("csv", file);

            const response = await axios.post(
                "http://localhost:5000/api/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setProgress(80);

            setResultData(response.data.data);
            setProgress(100);

            setStats({
                total: response.data.totalRows,
                imported: response.data.totalImported,
                skipped: response.data.totalSkipped,
            });
        } catch (err: any) {
            console.error(err);
            if (err.response?.status === 429) {
                alert("AI service is temporarily unavailable.\n\nPlease try again later.");
            } else if (err.response?.status === 500) {
                alert("Internal Server Error.\n Please try again later..");
            } else if (err.response?.status === 400) {
                alert("Invalid CSV or AI request.");
            } else {
                alert("Something went wrong. Please try again.");
            }

        } finally {

            setLoading(false);
            setProgress(0);

        }
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="text-center py-10">

                <h1 className="text-5xl font-extrabold text-gray-800">
                    AI CRM CSV Importer
                </h1>

                <p className="mt-3 text-lg text-gray-600">
                    Upload, Validate & Import CRM Records using Gemini AI
                </p>

            </div>
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-2xl bg-white shadow-2xl hover:shadow-blue-300 transition-all duration-300 cursor-pointer p-12 ${isDragActive ? "border-blue-600 scale-105" : "border-gray-300"
                    }`}
            >
                <input {...getInputProps()} />
                <div className="text-6xl mb-4">
                    📂
                </div>
                <h2 className="text-3xl font-bold">
                    Drag & Drop CSV Here
                </h2>

                <p className="mt-3 text-gray-600">
                    or Click to Browse
                </p>

                {file && (
                    <div className="mt-5">
                        <p className="font-semibold text-green-600">
                            {file.name}
                        </p>
                    </div>
                )}
            </div>
            {previewData.length === 0 && (

                <div className="bg-white rounded-2xl shadow-lg p-12 mt-10 text-center">

                    <div className="text-7xl mb-4">
                        📁
                    </div>

                    <h2 className="text-3xl font-bold text-gray-800">
                        No CSV Uploaded Yet
                    </h2>

                    <p className="text-gray-500 mt-4 text-lg">
                        Upload a CSV file to preview, process with AI and generate CRM-ready data.
                    </p>

                </div>

            )}
            {previewData.length > 0 && (
                <>
                    <div className="mt-10 flex justify-between items-center">
                        <h2 className="text-2xl font-bold">
                            CSV Preview
                        </h2>

                        <button
                            onClick={importCSV}
                            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 transition text-white font-semibold px-8 py-3 rounded-xl shadow-lg">
                            Confirm Import
                        </button>
                    </div>

                    <PreviewTable data={previewData} />
                </>
            )}
            {progress > 0 && progress < 100 && (
                <ProgressBar progress={progress} />
            )}
            {loading && (
                <div className="mt-8">
                    <Loader />
                </div>
            )}

            {resultData.length > 0 && (
                <>
                    <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">
                        Import Analytics Dashboard
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-lg p-6 text-white">
                            <p className="text-sm uppercase">Total Records</p>
                            <h1 className="text-4xl font-bold mt-3">{stats.total}</h1>
                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-xl shadow-lg p-6 text-white">
                            <p className="text-sm uppercase">Imported</p>
                            <h1 className="text-4xl font-bold mt-3">{stats.imported}</h1>
                        </div>

                        <div className="bg-gradient-to-r from-red-500 to-red-700 rounded-xl shadow-lg p-6 text-white">
                            <p className="text-sm uppercase">Skipped</p>
                            <h1 className="text-4xl font-bold mt-3">{stats.skipped}</h1>
                        </div>

                        <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl shadow-lg p-6 text-white">
                            <p className="text-sm uppercase">Success Rate</p>
                            <h1 className="text-4xl font-bold mt-3">
                                {stats.total
                                    ? ((stats.imported / stats.total) * 100).toFixed(1)
                                    : 0}
                                %
                            </h1>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

                        <div className="bg-white rounded-xl shadow border p-5">
                            <h3 className="text-gray-500 text-sm">Duplicate Records</h3>
                            <h2 className="text-3xl font-bold text-yellow-600 mt-2">
                                {stats.skipped}
                            </h2>
                        </div>

                        <div className="bg-white rounded-xl shadow border p-5">
                            <h3 className="text-gray-500 text-sm">Processing Status</h3>
                            <h2 className="text-3xl font-bold text-green-600 mt-2">
                                Completed
                            </h2>
                        </div>

                        <div className="bg-white rounded-xl shadow border p-5">
                            <h3 className="text-gray-500 text-sm">Processed At</h3>
                            <h2 className="text-lg font-semibold text-blue-600 mt-2">
                                {new Date().toLocaleString()}
                            </h2>
                        </div>
                    </div>
                    <PieChartCard
                        total={stats.total}
                        imported={stats.imported}
                        skipped={stats.skipped}
                    />
                    <RecentActivity />

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            CRM Output
                        </h2>
                        <button
                            onClick={downloadCSV}
                            className="bg-gradient-to-r from-green-500 to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
                            DOWNLOAD CSV TEST
                        </button>
                        <ResultTable data={resultData} />
                    </div>
                </>
            )}
            <div className="text-center mt-16 py-8 border-t text-gray-500">
                AI CRM CSV Importer • Built with Next.js • Express.js • Gemini AI
            </div>
        </div>
    );
}