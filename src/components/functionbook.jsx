import { useState, useEffect } from "react";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // จำลองการดึงข้อมูลการจองจาก API หรือ localStorage
    const fetchBookings = async () => {
      const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      setBookings(storedBookings);
    };

    fetchBookings();
  }, []);

  return (
    <>
      {bookings.length > 0 && (
        <div className="p-4">
          <h1 className="text-xl font-bold">My Booking</h1>
          <div className="space-y-4">
            {bookings.map((booking, index) => (
              <div key={index} className="bg-blue-500 p-4 rounded-md text-white">
                <p>{booking.name}</p>
                <p>{booking.date} {booking.time}</p>
                <button className="bg-green-500 p-2 rounded mr-2">Update</button>
                <button className="bg-red-500 p-2 rounded">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MyBooking;