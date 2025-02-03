import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Heropage from "./pages/Heropage";
import Roombooking from "./pages/Roombooking";
import Help from "./pages/Help";
import Report from "./pages/Report";
import Calendar from "./pages/Calendar";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <>
      <Router>
      <Routes>
      <Route path="/" element={<Heropage />} />
      <Route path="/Roombooking" element={<Roombooking />} />
      <Route path="/Help" element={<Help />} />
      <Route path="/Report" element={<Report />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
