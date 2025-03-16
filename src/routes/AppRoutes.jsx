import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import SearchScores from "../pages/SearchScoresPage.jsx";
import Report from "../pages/ReportPage.jsx";
import TopGroupA from "../pages/TopTenPage.jsx";
import '../App.css';
import { useState } from "react";

const AppRoutes = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-blue-950 text-white text-2xl md:text-4xl p-4 text-center">
        G-Scores
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-3 bg-black text-white"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "✖ Close" : "☰ Menu"}
      </button>

      <Router>
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - Hiện trên màn hình lớn, ẩn trên mobile (toggle) */}
          <div
            className={`absolute h-screen md:static md:w-64 bg-gradient-to-b from-yellow-500 to-green-600 transition-all duration-300 ${
              isSidebarOpen ? "w-64 p-4" : "w-0 overflow-hidden"
            }`}
          >
            <Sidebar />
          </div>

          <div className="flex-1 p-5">
            <Routes>
              <Route path="/search" element={<SearchScores />} />
              <Route path="/report" element={<Report />} />
              <Route path="/top" element={<TopGroupA />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default AppRoutes;