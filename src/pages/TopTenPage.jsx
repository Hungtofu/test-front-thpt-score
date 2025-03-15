import { useState, useEffect } from "react";
import axios from "axios";

const TopGroupA = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://testappthptscore-production.up.railway.app/score/top_group_a")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Không thể lấy dữ liệu!");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>; 

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-3">🏆 Top 10 students of group A</h1>
      <table className="min-w-full border-collapse border border-gray-300 mt-5">
        <thead>
          <tr className="">
            <th className="border p-2">Rank</th>
            <th className="border p-2">SBD</th>
            <th className="border p-2">Average Score</th>
          </tr>
        </thead>
        <tbody>
          {students.slice(0, 10).map((student, index) => (
            <tr key={student.sbd} className="text-center border">
              <td className="border p-2 font-bold">{index + 1}</td>
              <td className="border p-2">{student.sbd}</td>
              <td className="border p-2">{student.avg_score.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopGroupA;
