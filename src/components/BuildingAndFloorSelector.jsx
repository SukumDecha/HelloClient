import React, { useState } from "react";

const BuildingAndFloorSelector = () => {
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [floors, setFloors] = useState([]);
  const [rooms, setRooms] = useState([]);

  const buildings = {
    LX: {
      "Floor 10": ["Room 101", "Room 102", "Room 103"],
      "Floor 11": ["Room 111", "Room 112", "Room 113"],
      "Floor 12": ["Room 121", "Room 122", "Room 123"],
    },
    "CB 2": {
      "Floor A": ["Room A1", "Room A2", "Room A3"],
      "Floor B": ["Room B1", "Room B2", "Room B3"],
      "Floor C": ["Room C1", "Room C2", "Room C3"],
    },
    SIT: {
      "Level X": ["Room X1", "Room X2", "Room X3"],
      "Level Y": ["Room Y1", "Room Y2", "Room Y3"],
      "Level Z": ["Room Z1", "Room Z2", "Room Z3"],
    },
  };

  const handleBuildingSelect = (building) => {
    setSelectedBuilding(building);
    setSelectedFloor("");
    setSelectedRoom("");
    setFloors(Object.keys(buildings[building]));
    setRooms([]);
  };

  const handleFloorSelect = (floor) => {
    setSelectedFloor(floor);
    setSelectedRoom("");
    setRooms(buildings[selectedBuilding][floor]);
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
              className={`px-8 py-3 rounded-3xl font-bold ${
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
          onChange={(e) => handleFloorSelect(e.target.value)}
          value={selectedFloor}
        >
          <option value="" >Please select a building first</option>
          {floors.map((floor, index) => (
            <option key={index} value={floor}>
              {floor}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="block font-bold mb-3 text-3xl">Select Room:</label>
        <select
          className="w-full border rounded-2xl px-2 py-2 text-black bg-white"
          disabled={!selectedFloor}
          onChange={(e) => setSelectedRoom(e.target.value)}
          value={selectedRoom}
        >
          <option value="">Please select a floor first</option>
          {rooms.map((room, index) => (
            <option key={index} value={room}>
              {room}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BuildingAndFloorSelector;