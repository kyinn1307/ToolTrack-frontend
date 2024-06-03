import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../src/styles/update.css";

const UpdateItemPage = () => {
  const [itemId, setItemId] = useState("");
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student || {};

  const handleUpdateItem = async (e) => {
    e.preventDefault();

    const data = { roomId };

    try {
      const response = await fetch(
        `http://localhost:8000/items/update/${itemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Item updated successfully");
        navigate("/roomselection", { state: { student } });
      } else {
        console.error("Failed to update item:", response.statusText);
      }
    } catch (error) {
      console.error("Error during item update:", error);
    }
  };

  return (
    <div class="e232_341">
      <div class="e290_26"></div>
      <span class="e232_342">Which tool do you want to update?</span>
      <span class="e232_343">Updating page</span>
      <span class="e232_344">only for administrators</span>
      <div class="e232_345"></div>
      <div class="e232_346"></div>
      <div class="e232_348">
        <span class="e232_349">Tool</span>
        <span class="e232_351">Room</span>
      </div>
      <div class="e232_352"></div>
      <div class="e232_353">
        <span class="e232_354">Select Tool</span>
        <span class="e232_356">Select Room</span>
      </div>
      <div class="e232_359">
        <div class="e232_360">
          <div class="e232_361"></div>
          <span class="e232_362">UPDATE</span>
        </div>
      </div>
    </div>
  );
};

export default UpdateItemPage;
