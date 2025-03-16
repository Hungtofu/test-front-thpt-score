import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import '../App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";


const Report = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
  
        const response = await axios.get("https://testappthptscore-production.up.railway.app/score/report")
        const rawData = response.data;
        console.log(rawData);

        // Chuyển đổi dữ liệu API thành dạng phù hợp cho biểu đồ
        const formattedData = Object.keys(rawData).map((subject) => ({
          subject,
          ">=8 points": rawData[subject].lv1,
          "8 > && >=6 points": rawData[subject].lv2,
          "6 > && >=4 points": rawData[subject].lv3,
          "< 4 points": rawData[subject].lv4,
        }));

        setData(formattedData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-black">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Score Report</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical" margin={{ left: 50 }}>
          <XAxis type="number" />
          <YAxis dataKey="subject" type="category" width={150} />
          <Tooltip />
          <Legend />
          <Bar dataKey=">=8 points" fill="#4caf50" />
          <Bar dataKey="8 > && >=6 points" fill="#ffeb3b" />
          <Bar dataKey="6 > && >=4 points" fill="#ff9800" />
          <Bar dataKey="< 4 points" fill="#f44336" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Report;
