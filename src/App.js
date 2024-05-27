import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage"; // Make sure you have this component
import RoomSelectionPage from "./RoomSelectionPage";
import StudentRoomPage from "./StudentRoomPage";
import OfficePage from "./OfficePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/roomselection" element={<RoomSelectionPage />} />
        <Route path="/office" element={<OfficePage />} />
        <Route path="/studentroom" element={<StudentRoomPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
