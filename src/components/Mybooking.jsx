import React, { useState } from "react";

const Mybooking = () => {
  const [bookings, setBookings] = useState([]);
  return (
    <div className="text-black">
      {bookings.length > 0 && (
        <div>
          <h2>My Booking</h2>
          {bookings.map((booking, index) => (
            <div key={index} className="booking-item">
              <p>{booking.details}</p>
              <button className="update-btn">Update</button>
              <button className="delete-btn">Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mybooking;
