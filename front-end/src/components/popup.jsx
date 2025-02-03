import { useState } from "react";

// Popup Component
const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-5 rounded-xl shadow-xl relative">
        <div className="bg-red-500 text-white p-3 rounded-lg mb-4">
          Popup Content Here
        </div>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};