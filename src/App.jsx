import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Event from "./Pages/Event";
import Home from "./Pages/Home";
import ClubLogin from "./Pages/ClubLogin";
import ClubSignup from "./Pages/ClubSignup";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/ClubLogin" element={<ClubLogin />} />
          <Route path="/ClubSignup" element={<ClubSignup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
