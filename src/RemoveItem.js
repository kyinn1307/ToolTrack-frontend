import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../src/styles/removeItem.css";

const RemoveItemPage = () => {
  const [itemId, setItemId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student || {};

  const handleRemoveItem = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/items/remove/${itemId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Item removed successfully");
        navigate("/roomselection", { state: { student } });
      } else {
        console.error("Failed to remove item:", response.statusText);
      }
    } catch (error) {
      console.error("Error during item removal:", error);
    }
  };

  return (
    <div className="remove-item-container">
      <h1>Remove Item</h1>
      <form onSubmit={handleRemoveItem}>
        <input
          type="text"
          placeholder="Item ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          required
        />
        <button type="submit">Remove Item</button>
      </form>
    </div>
  );
};

export default RemoveItemPage;
