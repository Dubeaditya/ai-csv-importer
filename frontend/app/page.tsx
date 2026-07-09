"use client";

import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <UploadBox />
      </div>
    </main>
  );
}