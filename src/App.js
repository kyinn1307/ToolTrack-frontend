import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage"; // Make sure you have this component
import RoomSelectionPage from "./RoomSelectionPage";
import AddItemPage from "./AddItemPage";
import RemoveItemPage from "./RemoveItem";
import StudentRoomPage from "./StudentRoomPage";
import OfficePage from "./OfficePage";
import BorrowingPage from "./BorrowingPage";
import ItemBorrowingDatePage from "./ItemBorrowingDatePage";
import UpdateItemPage from "./UpdateItem";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/roomselection" element={<RoomSelectionPage />} />
        <Route path="/office" element={<OfficePage />} />
        <Route path="/studentroom" element={<StudentRoomPage />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/removeitem" element={<RemoveItemPage />} />
        <Route path="/updateitem" element={<UpdateItemPage />} />
        <Route path="/borrowing/:item" element={<BorrowingPage />} />
        <Route
          path="/borrowing/date/:item"
          element={<ItemBorrowingDatePage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
