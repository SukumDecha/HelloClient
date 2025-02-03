import Navbar from "../components/navbar"
import '../App.css';

const Roombooking = () => {

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <header className="py-4">
          <h1 className="text-5xl text-black">Booking Detail</h1>
        </header>

        <div className="bg-white rounded-lg shadow p-4 text-black">
          <div className="flex justify-between items-center space-x-2">
            {"2,3,4,5,6,7,8".split(",").map((day, index) => (
              <div
                key={index}
                className="flex-1 text-center bg-gray-200 rounded-md p-2"
              >
                <p className="text-lg font-bold text-black">{day}</p>
                <p className="text-sm text-gray-600">
                  {"SUN,MON,TUE,WED,THU,FRI,SAT".split(",")[index]}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1 text-black">Start Date:</label>
                  <input type="date" className="w-full border rounded px-2 py-1" />
                </div>
                <div>
                  <label className="block font-bold mb-1">End Date:</label>
                  <input type="date" className="w-full border rounded px-2 py-1" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block font-bold mb-1">Select Building:</label>
                  <div className="flex space-x-2">
                    {["Lx", "CB 2", "SIT"].map((building, index) => (
                      <button
                        key={index}
                        className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                      >
                        {building}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-bold mb-1">Select Floor:</label>
                  <input
                    type="text"
                    placeholder="Enter floor"
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Time:</label>
                  <input
                    type="time"
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <input type="checkbox" id="bookmark" className="mr-2" />
                <label htmlFor="bookmark">Bookmark Save automatically</label>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="text-green-500 font-bold text-3xl">Available</p>
                <p className="text-pink-500 font-bold text-3xl">Booking</p>
              </div>
              <div className="border-t border-gray-300 mt-2 pt-2">
                {Array.from({ length: 13 }).map((_, i) => (
                  <div key={i} className="mb-2">
                    <p className="text-gray-600 text-sm">{8 + i}.00</p>
                    <div className="w-full h-8 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roombooking