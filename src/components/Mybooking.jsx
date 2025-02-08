import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyBooking = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios.get(
        "http://helloworld06.sit.kmutt.ac.th:3000/api/booking"
      );
      setBookings(res.data.data);
      setIsLoading(false);
    };
    fetchBookings();
  }, []);

  const handleUpdate = (booking) => {
    navigate("/RoomBooking", {
      state: {
        bookingData: {
          firstName: booking.fname,
          lastName: booking.lname,
          staffId: booking.staff_id,
          roomId: booking.room_id,
          startTime: booking.start_time,
          endTime: booking.end_time,
          bookId: booking.book_id,
        },
      },
    });
  };

  const handleDelete = async (bookId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );
    if (confirmDelete) {
      try {
        const res = await axios.delete(
          `http://helloworld06.sit.kmutt.ac.th:3000/api/booking/${bookId}`
        );
        setBookings(bookings.filter((booking) => booking.book_id !== bookId));
        alert("Delete successful");
      } catch (error) {
        alert("Delete error");
      }
    }
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (isLoading) {
    return <p className="text-center text-gray-600 text-lg mb-6">Loading...</p>;
  }

  if (bookings.length === 0) {
    return (
      <p className="text-center text-gray-600 text-lg mb-6">
        No bookings available.
      </p>
    );
  }

  return (
    <div>
      <h2 className="text-3xl text-white bg-[#455E86]  rounded-full
      p-8 max-w-65 relative left-25">
        My Bookings
      </h2>
      <div className="p-6 max-w-300 m-auto">
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking.book_id}
              className="bg-[#455E86] border flex justify-between rounded-xl shadow-lg p-6"
            >
              <div className="bg-white rounded-xl w-175">
                <p className="text-lg pt-2 pb-1 px-5 font-bold text-gray-900">
                  Room: {booking.room_id}
                </p>
                <p className="text-lg px-5 py-1 font-bold text-gray-900">
                  Staff ID: {booking.staff_id}
                </p>
                <p className="text-lg px-5 py-1 font-bold text-gray-900">
                  Name: {booking.fname} {booking.lname}
                </p>
                <p className="text-gray-700 px-5">
                  Start: {formatDateTime(booking.start_time)}
                </p>
                <p className="text-gray-700 px-5 pb-2">
                  End: {formatDateTime(booking.end_time)}
                </p>
              </div>
              <div className="mt-30 flex gap-5 mr-10">
                <button
                  onClick={() => handleUpdate(booking)}
                  className="bg-[#FFA333] hover:bg-[#ff7b00] text-white px-10 h-9 hover:cursor-pointer rounded-full"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(booking.book_id)}
                  className="bg-[#FA4616] hover:bg-[#ff7b00] text-white px-10 h-9 hover:cursor-pointer rounded-full"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
