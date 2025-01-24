import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Event from "./Pages/Event";
import Home from "./Pages/Home";
import ClubLogin from "./Pages/ClubLogin";
import ClubSignup from "./Pages/ClubSignup";
import DswLoginP from "./Pages/DSWLoginP";
import Clubs from "./Pages/Clubs";
import ClubAdminDashboard from "./Pages/ClubAdminDash";
import CreateEvent from "./components/CreateEvent";
import ApplyEvent from "./Pages/ApplyEvent";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/ClubLogin" element={<ClubLogin />} />
          <Route path="/ClubSignup" element={<ClubSignup />} />
          <Route path="/dswlogin" element={<DswLoginP />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/admindash" element={<ClubAdminDashboard />} />
          <Route path="/applyevent" element={<ApplyEvent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
