import { useState } from "react";

const Accordion = ({topic,text}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2.5 bg-gray-800 text-white rounded-lg animate-[slideInFromLeft] ease-in-out">
      <button
        className="w-full text-left font-bold p-2 bg-[#455E86] rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "▼ " : "▶ " }{topic}
      </button>

      {isOpen && (
        <div className="mt-2 p-2 bg-gray-900 rounded-lg">
          <p>
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
