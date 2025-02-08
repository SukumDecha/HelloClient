import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";


const Roombooking = () => {

  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [staffId, setStaffId] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    const generateDays = () => {
      const dateArray = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return {
          date: date,
          day: date.getDate(),
          weekDay: date
            .toLocaleDateString("en-US", { weekday: "short" })
            .toUpperCase(),
        };
      });
      setDays(dateArray);
    };

    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          "http://helloworld06.sit.kmutt.ac.th:3000/api/room"
        );
        if (response.data.success) {
          const availableRooms = response.data.data
            .filter((room) => room.room_open === 1)
            .map((room) => room.room_id);
          setRooms(availableRooms);
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    generateDays();
    fetchRooms();
  }, []);

  const fetchBookings = async () => {
    if (!selectedRoom) return;

    try {
      const response = await axios.get(
        "http://helloworld06.sit.kmutt.ac.th:3000/api/booking"
      );
      if (response.data.success) {
        const selectedDateStr = selectedDate.toISOString().split("T")[0];
        const relevantBookings = response.data.data.filter((booking) => {
          const bookingDate = new Date(booking.start_time)
            .toISOString()
            .split("T")[0];
          return (
            booking.room_id === selectedRoom && bookingDate === selectedDateStr
          );
        });
        setBookings(relevantBookings);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [selectedRoom, selectedDate]);

  const isTimeSlotBooked = (timeSlot) => {
    const timeSlotDate = new Date(selectedDate);
    const [hours, minutes] = timeSlot.split(":");
    timeSlotDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    return bookings.find((booking) => {
      const startTime = new Date(booking.start_time);
      const endTime = new Date(booking.end_time);
      return timeSlotDate >= startTime && timeSlotDate < endTime;
    });
  };

  const isTimeSlotAvailable = () => {
    if (!startTime || !endTime) return true;

    const bookingStart = new Date(startTime);
    const bookingEnd = new Date(endTime);

    return !bookings.some((booking) => {
      const existingStart = new Date(booking.start_time);
      const existingEnd = new Date(booking.end_time);

      return (
        (bookingStart >= existingStart && bookingStart < existingEnd) ||
        (bookingEnd > existingStart && bookingEnd <= existingEnd) ||
        (bookingStart <= existingStart && bookingEnd >= existingEnd)
      );
    });
  };

  const handleBookNow = async () => {
    try {
      const adjustTimeForBackend = (dateStr) => {
        const date = new Date(dateStr);
        date.setHours(date.getHours() + 7);
        return date.toISOString().slice(0, 19).replace("T", " ");
      };
  
      const bookingData = {
        staffId: parseInt(staffId),
        fname: firstName,
        lname: lastName,
        roomId: selectedRoom,
        startT: adjustTimeForBackend(startTime),
        endT: adjustTimeForBackend(endTime),
      };
  
      if (location.state?.bookingData?.bookId) {
        // ลบข้อมูลการจองเก่า
        const bookId = location.state.bookingData.bookId;
        await axios.delete(
          `http://helloworld06.sit.kmutt.ac.th:3000/api/booking/${bookId}`
        );
        // เพิ่มข้อมูลการจองใหม่
        await axios.post(
          "http://helloworld06.sit.kmutt.ac.th:3000/api/booking",
          bookingData
        );
        alert("Booking updated successfully!");
      } else {
        // เพิ่มการจองใหม่
        await axios.post(
          "http://helloworld06.sit.kmutt.ac.th:3000/api/booking",
          bookingData
        );
        alert("Booking successful!");
      }
  
      await fetchBookings();
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    }
  };

  const formatDisplayTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const location = useLocation();
  useEffect(() => {
    if (location.state?.bookingData) {
      const { firstName, lastName, staffId, startTime, endTime, roomId } =
        location.state.bookingData;
      
      setFirstName(firstName);
      setLastName(lastName);
      setStaffId(staffId);
      setStartTime(startTime);
      setEndTime(endTime);
      setSelectedRoom(roomId);
    }
  }, [location]);

  
  return (
    <div>
      <div className="bg-[#455E86] w-full h-[125px]">
        <Navbar />
      </div>
      <div className="py-6 px-10 bg-white min-h-screen">
        <header className="py-4">
          <h1 className="text-3xl font-bold text-black">Booking Details</h1>
        </header>

        <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg">
          <div className="flex space-x-3">
            {days.map((dayObj, index) => {
              const dateStr = dayObj.date.toISOString().split("T")[0];
              const hasSameBooking = bookings.some((booking) => {
                const bookingDate = new Date(booking.start_time)
                  .toISOString()
                  .split("T")[0];
                return dateStr === bookingDate;
              });

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center w-20 h-20 rounded-md cursor-pointer ${
                    selectedDate.getDate() === dayObj.day
                      ? "text-red-400 font-bold bg-gray-300"
                      : hasSameBooking
                      ? "bg-red-500 text-white"
                      : "text-gray-500 hover:bg-gray-300 bg-gray-200"
                  }`}
                  onClick={() => setSelectedDate(dayObj.date)}
                >
                  <p className="text-lg font-bold">{dayObj.day}</p>
                  <p className="text-xs">{dayObj.weekDay}</p>
                  <p className="text-xs mt-1"></p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-[#455E86] text-white p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold mb-3 text-3xl">
                  Start Time:
                </label>
                <input
                  type="datetime-local"
                  className="w-full border rounded-full p-6 text-black bg-white"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-bold mb-3 text-3xl">
                  End Time:
                </label>
                <input
                  type="datetime-local"
                  className="w-full border rounded-full p-6 text-black bg-white"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div>
                <label className="block font-bold mb-3 text-3xl">
                  Select Room:
                </label>
                <select
                  className="w-full border rounded-full px-2 py-2 text-black bg-white"
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

              <div>
                <div>
                  <label className="block font-bold mb-3 text-3xl">
                    User Details:
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full border rounded-full px-2 py-2 text-black bg-white"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full border rounded-full px-2 py-2 mt-2 text-black bg-white"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="User ID"
                    className="w-full border rounded-full px-2 py-2 mt-2 text-black bg-white"
                    value={staffId}
                    onChange={(e) => setStaffId(e.target.value)}
                  />
                </div>

                <div className="flex justify-end items-center bg-[#455E86] p-2 mt-6">
                  <button
                    className={`w-[200px] h-[50px] text-white rounded-full flex justify-center font-bold items-center ${
                      !selectedRoom ||
                      !firstName ||
                      !lastName ||
                      !staffId ||
                      !startTime ||
                      !endTime ||
                      !isTimeSlotAvailable()
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-700 hover:cursor-pointer"
                    }`}
                    onClick={handleBookNow}
                    disabled={
                      !selectedRoom ||
                      !firstName ||
                      !lastName ||
                      !staffId ||
                      !startTime ||
                      !endTime ||
                      !isTimeSlotAvailable()
                    }
                  >
                    {!isTimeSlotAvailable()
                      ? "Time Slot Not Available"
                      : "Book Now"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#455E86] text-white p-6 rounded-lg flex flex-col h-[475px] relative">
            <div className="overflow-y-auto flex-1 pr-2">
              <p className="text-lg font-bold mb-5">
                {selectedRoom
                  ? `Time slots for ${selectedRoom}`
                  : "Please select a room"}
              </p>
              {[
                "08:00",
                "09:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
              ].map((time, i) => {
                const bookingInfo = isTimeSlotBooked(time);
                const timeSlotDate = new Date(selectedDate);
                const [hours] = time.split(":");
                timeSlotDate.setHours(parseInt(hours), 0, 0, 0);

                const showPendingBooking =
  startTime &&
  endTime &&
  timeSlotDate >= new Date(startTime) &&
  timeSlotDate < new Date(endTime) &&
  selectedRoom;

                return (
                  <div key={i} className="mb-4 relative">
                    <p className="text-white-200 text-sm font-bold">{time}</p>
                    <div
                      className={`w-full h-15 rounded-xl content-center ${
                        bookingInfo
                          ? "bg-red-500"
                          : showPendingBooking
                          ? "bg-yellow-500"
                          : "bg-gray-200 hover:bg-orange-600"
                      }`}
                    >
                      {bookingInfo && (
                        <div className="absolute inset-0 flex items-center justify-start px-4 text-sm">
                          <span className="mt-5">
                            Booked: {bookingInfo.fname} {bookingInfo.lname} (ID:{" "}
                            {bookingInfo.staff_id})
                            <br />
                            {formatDisplayTime(bookingInfo.start_time)} -{" "}
                            {formatDisplayTime(bookingInfo.end_time)}
                          </span>
                        </div>
                      )}
                      {showPendingBooking && !bookingInfo && (
                        <div className="absolute inset-0 flex items-center mt-6 justify-start px-4 text-sm">
                          <span>
                            Pending: {firstName} {lastName} (ID: {staffId})
                            <br />
                            {formatDisplayTime(startTime)} -{" "}
                            {formatDisplayTime(endTime)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roombooking;
