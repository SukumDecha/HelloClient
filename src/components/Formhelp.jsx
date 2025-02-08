import { useState } from "react";
import '../App.css';

const Accordion = ({topic,text}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2.5  text-white rounded-lg animate-[slideInFromLeft] bg-[#DDDDDD] ease-in-out">
      <button
        className="w-full text-left font-bold p-4 bg-[#455E86] rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "▼ " : "▶ " }{topic}
      </button>

      {isOpen && (
        <div className="hiddenTag">
          <p className="text-black">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
