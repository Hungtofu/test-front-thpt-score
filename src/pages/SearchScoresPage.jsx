import { useState } from "react";
import axios from "axios";
import "../App.css";

const SearchScores = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {  // Chỉ cho phép số (dùng RegExp)
      setRegistrationNumber(value);
      setError(""); // Xóa lỗi nếu nhập đúng
    } else {
      setError("Registration number must be numbers only!");
    }
  };

  // ✅ Gọi API nếu hợp lệ
  const handleSearch = async () => {
    if (!registrationNumber) {
      setError("Please enter a registration number!");
      return;
    }

    try {
      setError("");
      setStudent(null);
      setShowResult(false);

      const response = await axios.get(
        `https://testappthptscore-production.up.railway.app/score/check?sbd=${registrationNumber}`
      );

      setStudent(response.data);
      setShowResult(true);
    } catch (err) {
      setError("Student not found!");
      setShowResult(false);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-3">Student Registration Numbers</h1>
      <input
        type="text"
        placeholder="Enter registration number"
        value={registrationNumber}
        onChange={handleInputChange}
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
        <div className="mt-5 p-3">
          <h2 className="text-xl font-semibold mt-5">Detail scores of {student.sbd}</h2>
          <p className="inline mr-10">Toán: {student.toan}</p>
          <p className="inline mr-10">Ngữ Văn: {student.ngu_van}</p>
          <p className="inline mr-10">Ngoại Ngữ: {student.ngoai_ngu}</p>
          <p className="inline mr-10">Vật lý: {student.vat_ly}</p>
          <p className="inline mr-10">Hóa Học: {student.hoa_hoc}</p>
          <p className="inline mr-10">Sinh Học: {student.sinh_hoc}</p>
          <p className="inline mr-10">Lịch Sử: {student.lich_su}</p>
          <p className="inline mr-10">Địa Lý: {student.dia_ly}</p>
          <p className="inline mr-10">Giáo Dục Công Dân: {student.gdcd}</p>
        </div>
      )}
    </div>
  );
};

export default SearchScores;
