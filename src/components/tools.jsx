import RoleSelector from "../pages/Roles";
import LinkCom from "./Link";
import { useState } from "react";

const buildings = [
  { id: "CB2", image: "/img/Hero.png" },
  { id: "LX", image: "/images/cb2302.jpg" },
  { id: "SIT", image: "/images/cb2303.jpg" },
];

const timeSlots = ["08:00","09:00","10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const Tools = () => {
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showBuildingDropdown, setShowBuildingDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Date/Time");
  const [selectedBuilding, setSelectedBuilding] = useState("Building");

  return (
    <div className="toolscontent flex items-center gap-4">
      {/* What you looking for? */}
      <div className="flex items-center gap-2 w-49">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <p>What you looking for?</p>
      </div>

      <p>|</p>

      {/* Date/Time Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowDateDropdown(!showDateDropdown)}
          className="flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          {selectedDate}
        </button>
        {showDateDropdown && (
          <div className="absolute top-full left-0 bg-white shadow-md p-2 rounded-md overflow-y-auto" style={{ maxHeight: "150px" }}>
            <ul className="scrollable-dropdown">
              {timeSlots.map((time, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedDate(time);
                    setShowDateDropdown(false);
                  }}
                >
                  {time}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p>|</p>

      {/* Building Dropdown */}
<div className="relative">
  <button
    onClick={() => setShowBuildingDropdown(!showBuildingDropdown)}
    className="flex items-center gap-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-6 h-6"
    >
      <path d="M3 21H21M9 8H10M9 12H10M9 16H10M14 8H15M14 12H15M14 16H15M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21" />
    </svg>
    {selectedBuilding}
  </button>
  {showBuildingDropdown && (
    <div className="absolute top-full left-0 bg-white shadow-md p-2 rounded-md">
      <ul>
        {buildings.map((building) => (
          <li
            key={building.id}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              setSelectedBuilding(building.id);
              setShowBuildingDropdown(false);
            }}
          >
            {building.id}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>


      {/* Search Button */}
      <div>
  <button
    className="search-btn flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
    onClick={() => {
      // ใช้ localStorage หรือ URL parameters ส่งข้อมูลไปหน้า Roombooking
      localStorage.setItem("selectedDate", selectedDate);
      localStorage.setItem("selectedBuilding", selectedBuilding);
    }}
  >
    <LinkCom Linkto="/Roombooking" text="Search" />
    <svg
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
    >
      <path
        d="M8.49967 1.3335C12.1797 1.3335 15.1663 4.32016 15.1663 8.00016C15.1663 11.6802 12.1797 14.6668 8.49967 14.6668C4.81967 14.6668 1.83301 11.6802 1.83301 8.00016C1.83301 4.32016 4.81967 1.3335 8.49967 1.3335ZM8.49967 7.3335H5.83301V8.66683H8.49967V10.6668L11.1663 8.00016L8.49967 5.3335V7.3335Z"
        fill="white"
      />
    </svg>
  </button>
</div>
    </div>
  );
};

export default Tools;