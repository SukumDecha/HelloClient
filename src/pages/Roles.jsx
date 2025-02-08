import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

export default function PickYourRole() {
  const [popupVisible, setPopupVisible] = useState(true);
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === "Student") {
      alert("Please contact staff.");
    } else {
      navigate("/Heropage");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[url('../src/img/Herobg.png')] bg-cover bg-center text-white">
      
      
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative flex flex-col items-center">
        <h2 className="text-5xl font-[<regular>] mb-10">Pick Your Role</h2>
        <div className="flex flex-col gap-6">
          {["Lecturer", "Student", "Staff", "LF"].map((role) => (
            <button 
              key={role} 
              className="w-40 text-lg bg-white hover:bg-gray-400 text-[#455E86] p-3 rounded-full hover:pointer"
              onClick={() => handleRoleSelection(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {popupVisible && (
        <div className="fixed bottom-5 right-5 bg-white text-black p-10 shadow-lg w-100 rounded-2xl">
          <div className="relative">
            <button 
              className="absolute -top-4 -right-4 text-red-500 hover:text-black"
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
