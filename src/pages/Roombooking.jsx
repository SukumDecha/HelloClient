import Navbar from "../components/navbar"
import '../App.css';
import Footer from "../components/footer";

const Roombooking = () => {

  return (
<div>
      <div className="bg-blue-600 w-full h-[125px]"><Navbar /></div>
      <div className="p-6 bg-white min-h-screen">
      <header className="py-4">
        <h1 className="text-3xl font-bold text-black">Booking Detail</h1>
      </header>

      <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg relative">
        <div className="flex space-x-3">
          {["3", "4", "5", "6", "7", "8","9"].map((day, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-20 h-20 rounded-md ${day === "7" ? "text-red-400 font-bold bg-gray-200" : "text-gray-500 hover:bg-gray-300 bg-gray-200"}`}
            >
              <p className="text-lg font-bold">{day}</p>
              <p className="text-xs">{["MON", "TUE", "WED", "THU", "FRI", "SAT" , "SUN"][index]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold mb-1">Start Date:</label>
              <input type="date" className="w-full border rounded-2xl px-2 py-5 text-black bg-white" />
            </div>
            <div>
              <label className="block font-bold mb-1">End Date:</label>
              <input type="date" className="w-full border rounded-2xl px-2 py-5 text-black bg-white" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-bold mb-3 text-3xl">Select Building:</label>
            <div className="flex space-x-2 ">
              {["LX", "CB 2", "SIT"].map((building, index) => (
                <button
                  key={index}
                  className="bg-gray-300 px-10 py-2 rounded-3xl text-black hover:bg-gray-400"
                >
                  {building}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block font-bold mb-1 text-3xl">Select Floor:</label>
              <input type="text" className="w-full border rounded-2xl px-2 py-2 text-black bg-white" />
            </div>
            <div>
              <label className="block font-bold mb-1 text-3xl">User:</label>
              <input type="text" placeholder="Name" className="w-full border rounded-2xl px-2 py-2 text-black bg-white" />
              <input type="text" placeholder="User ID" className="w-full border rounded-2xl px-2 py-2 mt-2 text-black bg-white" />
            </div>
          </div>
          

          <div className="mt-5 flex items-center">
            <input type="checkbox" id="saved" className="mr-3 " />
            <label htmlFor="saved">Saved</label>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <p className="text-lg font-bold mb-4">All Day</p>
          {["8.00", "9.00", "10.00", "11.00"].map((time, i) => (
            <div key={i} className="mb-2">
              <p className="text-white-200 text-sm font-bold">{time}</p>
              <div className="w-full h-45 bg-gray-200 rounded-4xl"></div>
            </div>
          ))}
          <button className="w-full bg-gray-200 text-black p-2 rounded-2xl mt-4 hover:bg-gray-400">Book Now</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Roombooking