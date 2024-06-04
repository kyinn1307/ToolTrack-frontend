import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../src/styles/removeItem.css";

const RemoveItemPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student || {};

  const handleRemoveItem = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/items/remove/${name}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Item removed successfully");
        navigate("/roomselection", { state: { student } });
      } else {
        alert("Couldn't remove item");
        console.error("Failed to remove item:", response.statusText);
      }
    } catch (error) {
      alert("Error during item removal");
      console.error("Error during item removal:", error);
    }
  };

  return (
    <div className="remove-item-container">
      <h1>Remove Item</h1>
      <form onSubmit={handleRemoveItem}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Remove Item</button>
      </form>
    </div>
  );
};

export default RemoveItemPage;
