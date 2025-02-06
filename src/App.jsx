import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Heropage from "./pages/Heropage";
import Roombooking from "./pages/Roombooking";
import Help from "./pages/Help";
import Report from "./pages/Report";
import PickYourRole from "./pages/Roles";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<PickYourRole />} />
        <Route path="/Heropage" element={<Heropage />} />
        <Route path="/Roombooking" element={<Roombooking />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Report" element={<Report />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
