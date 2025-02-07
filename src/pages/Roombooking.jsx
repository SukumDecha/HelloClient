import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import "../App.css";
import Footer from "../components/footer";

const Roombooking = () => {
  const [selectedRoom, setSelectedRoom] = useState("");

  const rooms = ["Room 101", "Room 102", "Room 103", "Room 111", "Room 112", "Room 113", 
                 "Room 121", "Room 122", "Room 123", "Room A1", "Room A2", "Room A3", 
                 "Room B1", "Room B2", "Room B3", "Room C1", "Room C2", "Room C3", 
                 "Room X1", "Room X2", "Room X3", "Room Y1", "Room Y2", "Room Y3", 
                 "Room Z1", "Room Z2", "Room Z3"];
  
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const [bookings, setBookings] = useState({
    8: true,
    14: true,
    18: true,
  });

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return {
      day: date.getDate(),
      weekDay: date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
    };
  });

  useEffect(() => {
    const date = localStorage.getItem("selectedDate");
    if (date) setSelectedDate(parseInt(date));
  }, []);

  return (
    <div>
      <div className="bg-[#455E86] w-full h-[125px]">
        <Navbar />
      </div>
      <div className="p-6 bg-white min-h-screen">
        <header className="py-4">
          <h1 className="text-3xl font-bold text-black">Booking Detail</h1>
        </header>

        <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg relative">
          <div className="flex space-x-3">
            {days.map((date, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center w-20 h-20 rounded-md cursor-pointer ${
                  selectedDate === date.day
                    ? "text-red-400 font-bold bg-gray-300"
                    : "text-gray-500 hover:bg-gray-300 bg-gray-200"
                }`}
                onClick={() => setSelectedDate(date.day)}
              >
                <p className="text-lg font-bold">{date.day}</p>
                <p className="text-xs">{date.weekDay}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-[#455E86] text-white p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold mb-1">Start Date/Time:</label>
                <input
                  type="datetime-local"
                  className="w-full border rounded-2xl px-2 py-5 text-black bg-white"
                  value={selectedDate}
                />
              </div>
              <div>
                <label className="block font-bold mb-1">End Date/Time:</label>
                <input
                  type="datetime-local"
                  className="w-full border rounded-2xl px-2 py-5 text-black bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-[#455E86] text-white p-1 rounded-lg">
                <div className="mt-4">
                  <label className="block font-bold mb-3 text-3xl">Select Room:</label>
                  <select
                    className="w-full border rounded-2xl px-2 py-2 text-black bg-white"
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    value={selectedRoom}
                  >
                    <option value="">Please select a room</option>
                    {rooms.map((room, index) => (
                      <option key={index} value={room}>
                        {room}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <div className="mt-5.5">
                  <label className="block font-bold mb-3 text-3xl">User:</label>
                  <input type="text" placeholder="Name" className="w-full border rounded-2xl px-2 py-2 text-black bg-white" />
                  <input type="text" placeholder="User ID" className="w-full border rounded-2xl px-2 py-2 mt-2 text-black bg-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#455E86] text-white p-6 rounded-lg flex flex-col h-[425px] relative">
            <div className="overflow-y-auto flex-1 pr-2">
              <p className="text-lg font-bold mb-5">All Day</p>
              {["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map((time, i) => {
                const hour = parseInt(time.split(":")[0]);
                return (
                  <div key={i} className="mb-4">
                    <p className="text-white-200 text-sm font-bold">{time}</p>
                    <div className={`w-full h-12 rounded-xl ${bookings[hour] ? "bg-red-500" : "bg-gray-200"}`}></div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center items-center bg-[#455E86] p-2 mt-2">
              <button className="w-[200px] h-[50px] bg-green-500 text-white rounded-full hover:bg-green-700 hover:cursor-pointer flex justify-center font-bold items-center">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roombooking;