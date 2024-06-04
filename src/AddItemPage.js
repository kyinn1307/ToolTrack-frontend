import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../src/styles/addItem.css";

const AddItemPage = () => {
  const [name, setName] = useState("");
  const [available, setAvailable] = useState(true);
  const [amount, setAmount] = useState(0);
  const [roomId, setRoomId] = useState(502);
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student || {};

  const handleAddItem = async (e) => {
    e.preventDefault();

    const data = { name, available, amount, roomId };

    try {
      const response = await fetch("http://localhost:8000/items/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Item added successfully");
        navigate("/roomselection", { state: { student } });
      } else {
        alert("Failed to add item:");
        console.error("Failed to add item:", response.statusText);
      }
    } catch (error) {
      console.error("Error during item addition:", error);
    }
  };

  return (
    <div className="add-item-container">
      <h1>Add New Item</h1>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>
          Available:
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
        </label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <label>
          Room ID:
          <select
            value={roomId}
            onChange={(e) => setRoomId(Number(e.target.value))}
            required
          >
            <option value={302}>302</option>
            <option value={502}>502</option>
          </select>
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemPage;
