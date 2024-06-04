import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../src/styles/update.css";

const UpdateItemPage = () => {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student || {};

  const handleUpdateItem = async (e) => {
    e.preventDefault();

    const data = { roomId };

    try {
      const response = await fetch(
        `http://localhost:8000/items/update/${name}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Item updated successfully");
        navigate("/roomselection", { state: { student } });
      } else {
        alert("Couldn't update item");
        console.error("Failed to update item:", response.statusText);
      }
    } catch (error) {
      alert("Error during item update");
      console.error("Error during item update:", error);
    }
  };

  return (
    <div className="update-item-container">
      <h1>Update Item</h1>
      <form onSubmit={handleUpdateItem}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="New Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          required
        />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItemPage;
