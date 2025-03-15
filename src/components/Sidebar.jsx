import { Link } from "react-router-dom";
import '../App.css';

const Sidebar = () => {
  return (
    <div className="h-screen w-auto bg-gradient-to-b from-yellow-500 to-green-600 text-white p-5">
      <h2 className="text-xl font-bold mb-5 text-center text-black">Menu</h2>
      <ul className="space-y-3">
        <li><Link to="/search" className="block hover:text-gray-200 text-black">Search Scores</Link></li>
        <li><Link to="/report" className="block hover:text-black text-black">Reports</Link></li>
        <li><Link to="/top" className="block hover:text-black text-black">Top Group A</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
