import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import SearchScores from "../pages/SearchScoresPage.jsx";
import Report from "../pages/ReportPage.jsx";
import TopGroupA from "../pages/TopTenPage.jsx";
import '../App.css';

const AppRoutes = () => {
  return (
    <div className="flex-row ">
      <div className="bg-blue-950 text-white text-4xl p-5 text-center">G-Scores</div>
      <Router>
      <div className="flex">
        <Sidebar />
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
