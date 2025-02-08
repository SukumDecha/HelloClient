import { useState } from "react";

const Accordion = ({topic,text}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2.5  text-white rounded-lg animate-[slideInFromLeft] ease-in-out">
      <button
        className="w-full text-left font-bold p-4 bg-[#455E86] rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "▼ " : "▶ " }{topic}
      </button>

      {isOpen && (
        <div className="mt-1 p-4 bg-[#DDDDDD] rounded-lg">
          <p className="text-black">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
