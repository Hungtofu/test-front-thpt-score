import { useState } from "react";
import axios from "axios";
import "../App.css";

const SearchScores = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSearch = async () => {
    try {
      setError("");
      setStudent(null);
      setShowResult(false);

      const api = axios.create({
        baseURL: "https://testappthptscore-production.up.railway.app",
      });

      api
        .get(`/score/check?sbd=${registrationNumber}`, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          setStudent(response.data);
          setShowResult(true);
        })
        .catch((error) => console.error(error));
    } catch (err) {
      setError("Không tìm thấy sinh viên!");
      setShowResult(false);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-3">User Registration</h1>
      <input
        type="text"
        placeholder="Enter registration number"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-3 bg-black text-white p-2 rounded"
      >
        Submit
      </button>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {showResult && student && (
        <div className="mt-5 p-3 border rounde">
          <h2 className="text-xl font-semibold">Detail scores of {student.sbd}</h2>
          <p>Toán: {student.toan}</p>
          <p>Ngữ Văn: {student.ngu_van}</p>
          <p>Ngoại Ngữ: {student.ngoai_ngu}</p>
          <p>Vật lý: {student.vat_ly}</p>
          <p>Hóa Học: {student.hoa_hoc}</p>
          <p>Sinh Học: {student.sinh_hoc}</p>
          <p>Lịch Sử: {student.lich_su}</p>
          <p>Địa Lý: {student.dia_ly}</p>
          <p>Giáo Dục Công Dân: {student.gdcd}</p>
        </div>
      )}
    </div>
  );
};

export default SearchScores;
