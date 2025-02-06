import React, { useState } from "react";

const BuildingAndFloorSelector = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(""); 
  const [floors, setFloors] = useState([]); 

  const buildings = {
    LX: ["Floor 10","Floor 11", "Floor 12", "Floor 13"],
    "CB 2": ["Floor A", "Floor B", "Floor C"],
    SIT: ["Level X", "Level Y", "Level Z"],
  };

  const handleBuildingSelect = (building) => {
    setSelectedBuilding(building); 
    setFloors(buildings[building]); 
  };

  return (
    <div>
      <div className="mt-4">
        <label className="block font-bold mb-3 text-3xl">Select Building:</label>
        <div className="flex space-x-2">
          {Object.keys(buildings).map((building, index) => (
            <button
              key={index}
              onClick={() => handleBuildingSelect(building)}
              className={`px-11 py-3 rounded-3xl font-bold ${
                selectedBuilding === building
                  ? "bg-green-500 text-white" 
                  : "bg-gray-300 text-black hover:bg-gray-400"
              }`}
            >
              {building}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-bold mb-3 text-3xl">Select Floor:</label>
        <select
          className="w-full border rounded-2xl px-2 py-2 text-black bg-white"
          disabled={!selectedBuilding} 
        >
          {floors.length > 0 ? (
            floors.map((floor, index) => (  
              <option key={index} value={floor}>
                {floor}
              </option>
            ))
          ) : (
            <option value="">Please select a building first</option>
          )}
        </select>
        <div lassName="px-4 bg-amber-50">
                <label className="block font-bold mb-1 text-3xl">Select Room:</label>
                <select className="w-full border rounded-2xl px-2 py-3 text-black bg-white">
                  <option value="" disabled selected>
                    Select a room
                  </option>
                  <option value="Room A">Room A</option>
                  <option value="Room B">Room B</option>
                  <option value="Room C">Room C</option>
                </select>
              </div>
      </div>
    </div>
  );
};

export default BuildingAndFloorSelector;
