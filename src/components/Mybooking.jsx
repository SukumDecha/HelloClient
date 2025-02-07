import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyBooking = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ใช้ fetch หรือ axios เพื่อดึงข้อมูลจาก API
    const fetchBookings=async()=>{
      const res=await axios.get("http://helloworld06.sit.kmutt.ac.th:3000/api/booking")
      setBookings(res.data.data)
      setIsLoading(false)
    }
    fetchBookings()
  }, []);

  const handleUpdate = (roomId) => {
    navigate("/RoomBooking");
  };

  const handleDelete = async(bookId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
    if (confirmDelete) {
        try {
          const res=await axios.delete(`http://helloworld06.sit.kmutt.ac.th:3000/api/booking/${bookId}`)
          setBookings(bookings.filter((booking) => booking.book_id !== bookId));
          alert("delete successful")
        } catch (error) {
          alert("delete error")
        }
    }
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (isLoading) {
    // กรณีที่ข้อมูลกำลังโหลด
    return <p className="text-center text-gray-600 text-lg mb-6">Loading...</p>;
  }

  if (bookings.length === 0) {
    // กรณีที่ไม่มีการจอง
    return <p className="text-center text-gray-600 text-lg mb-6">No bookings available.</p>;
  }

  // กรณีที่มีการจอง
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white bg-[#455E86] p-3 rounded-lg text-center">
        My Bookings
      </h2>

      <div className="space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking.book_id}
            className="bg-[#455E86] border  rounded-lg shadow-lg p-6"
          >
            <p className="text-lg font-bold text-gray-900">Room: {booking.room_id}</p>
            <p className="text-white-700">Start: {formatDateTime(booking.start_time)}</p>
            <p className="text-white-700">End: {formatDateTime(booking.end_time)}</p>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => handleUpdate(booking.room_id)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(booking.book_id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
