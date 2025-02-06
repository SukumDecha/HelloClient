import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate

export default function PickYourRole() {
  const [popupVisible, setPopupVisible] = useState(true);
  const navigate = useNavigate(); // ใช้ useNavigate()

  const handleRoleSelection = (role) => {
    if (role === "Student") {
      alert("Please contact staff.");
    } else {
      navigate("/Heropage"); // นำทางไปยังหน้า Home (Heropage)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Pick Your Role</h2>
      <div className="space-y-4">
        {["Lecturer", "Student", "Staff", "LF"].map((role) => (
          <button 
            key={role} 
            className="flex w-40 text-lg bg-blue-500 hover:bg-blue-400 hover:cursor-pointer text-white p-2 rounded "
            onClick={() => handleRoleSelection(role)}
          >
            {role}
          </button>
        ))}
      </div>

      {popupVisible && (
        <div className="fixed bottom-5 right-5 bg-white text-black p-4 shadow-lg w-90 rounded-2xl">
          <div className="relative">
            <button 
              className="absolute top-0 right-0 text-gray-500 hover:text-black"
              onClick={() => setPopupVisible(false)}
            >
              X
            </button>
            <p>
              กรุณาทำการจองล่วงหน้าอย่างน้อย 24 ชม. 
              หากต้องการความช่วยเหลือ กรุณาติดต่อ Helpdesk ที่:
              <br />
              📞 0-2470-9820  
              <br />
              📧 servicedesk@sit.kmutt.ac.th  
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
