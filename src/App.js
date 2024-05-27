import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage"; // Make sure you have this component
import RoomSelectionPage from "./RoomSelectionPage";
import AddItemPage from "./AddItemPage";
import RemoveItemPage from "./RemoveItem";
import StudentRoomPage from "./StudentRoomPage";
import OfficePage from "./OfficePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/roomselection" element={<RoomSelectionPage />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/removeitem" element={<RemoveItemPage />} />
      </Routes>
    </Router>
  );
};

export default App;
