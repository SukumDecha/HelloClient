import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Heropage from "./pages/Heropage";
import Roombooking from "./pages/Roombooking";
import Help from "./pages/Help";
import PickYourRole from "./pages/Roles";
import ConsentPage from "./pages/Consent"

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<ConsentPage />} />
        <Route path="/PickYourRole" element={<PickYourRole />} />
        <Route path="/Heropage" element={<Heropage />} />
        <Route path="/Roombooking" element={<Roombooking />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
