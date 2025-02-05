import Formtools from "./formtools";
import LinkCom from "./Link";
import { useState } from "react";

const Tools = () => {
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showBuildingDropdown, setShowBuildingDropdown] = useState(false);

  return (
    <div className="toolscontent">
      {/* What you looking for? */}
      <div className="flex gap-1 m-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20.0004 19.9999L15.9504 15.9499M15.9504 15.9499C16.6004 15.2998 17.116 14.5281 17.4678 13.6788C17.8196 12.8295 18.0007 11.9192 18.0007 10.9999C18.0007 10.0806 17.8196 9.17027 17.4678 8.32095C17.116 7.47163 16.6004 6.69991 15.9504 6.04987C15.3003 5.39983 14.5286 4.88418 13.6793 4.53238C12.83 4.18058 11.9197 3.99951 11.0004 3.99951C10.0811 3.99951 9.17076 4.18058 8.32144 4.53238C7.47211 4.88418 6.7004 5.39983 6.05036 6.04987C4.73754 7.36269 4 9.14326 4 10.9999C4 12.8565 4.73754 14.637 6.05036 15.9499C7.36318 17.2627 9.14375 18.0002 11.0004 18.0002C12.857 18.0002 14.6375 17.2627 15.9504 15.9499Z" stroke="black"/>
        </svg>
        <p>What you looking for?</p>
      </div>

      <p className="flex gap-1 m-auto">|</p>

      {/* Date/Time Dropdown */}
      <div className="flex gap-1 m-auto relative">
        <button onClick={() => setShowDateDropdown(!showDateDropdown)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM10 4C10.2449 4.00003 10.4813 4.08996 10.6644 4.25272C10.8474 4.41547 10.9643 4.63975 10.993 4.883L11 5V9.586L13.707 12.293C13.8863 12.473 13.9905 12.7144 13.9982 12.9684C14.006 13.2223 13.9168 13.4697 13.7488 13.6603C13.5807 13.8508 13.3464 13.9703 13.0935 13.9944C12.8406 14.0185 12.588 13.9454 12.387 13.79L12.293 13.707L9.293 10.707C9.13758 10.5514 9.03776 10.349 9.009 10.131L9 10V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4Z" fill="black"/>
          </svg>
          Date/Time
        </button>
        {showDateDropdown && (
          <div className="absolute top-full left-0 bg-white shadow-md p-2">
            <p>Select Date/Time</p>
          </div>
        )}
      </div>

      <p className="flex gap-1 m-auto">|</p>

      {/* Building Dropdown */}
      <div className="flex gap-1 m-auto relative">
        <button onClick={() => setShowBuildingDropdown(!showBuildingDropdown)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 21H21M9 8H10M9 12H10M9 16H10M14 8H15M14 12H15M14 16H15M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21" stroke="black"/>
          </svg>
          Building
        </button>
        {showBuildingDropdown && (
          <div className="absolute top-full left-0 bg-white shadow-md p-2">
            <p>Select Building</p>
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="flex gap-1 m-auto">
        <button className="search-btn">
          <LinkCom Linkto="/Roombooking" text="Search" />
          <svg className="flex m-auto" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path d="M8.49967 1.3335C12.1797 1.3335 15.1663 4.32016 15.1663 8.00016C15.1663 11.6802 12.1797 14.6668 8.49967 14.6668C4.81967 14.6668 1.83301 11.6802 1.83301 8.00016C1.83301 4.32016 4.81967 1.3335 8.49967 1.3335ZM8.49967 7.3335H5.83301V8.66683H8.49967V10.6668L11.1663 8.00016L8.49967 5.3335V7.3335Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Tools;