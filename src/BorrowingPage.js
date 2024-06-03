import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "../src/styles/borrowing.css";
import Header from "./Header";

const BorrowingPage = () => {
  const navigate = useNavigate();
  const { item } = useParams();
  const location = useLocation();
  const from = location.state?.from;
  const student = location.state?.student || {};
  const [items, setItems] = useState({});
  const [studentId, setStudentId] = useState(student.studentId || "");
  const roomId = from === "office" ? 502 : 302;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/get_items_by_room?roomId=${roomId}`
        );
        const data = await response.json();
        console.log(data);
        setItems(
          data.reduce((acc, item) => {
            acc[item.name.toLowerCase()] = item.amount;
            return acc;
          }, {})
        );
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [roomId]);

  const images = {
    calculator:
      "https://gi.esmplus.com/untteutmax/webprogramming/calculator.jpeg",
    blanket: "https://gi.esmplus.com/untteutmax/webprogramming/blanket.jpeg",
    earphone: "https://gi.esmplus.com/untteutmax/webprogramming/earphone.jpeg",
    ruler: "https://gi.esmplus.com/untteutmax/webprogramming/ruler.jpeg",
    medicine:
      "https://gi.esmplus.com/untteutmax/webprogramming/preventiveMedicine.jpg",
    tissue: "https://gi.esmplus.com/untteutmax/webprogramming/tissue.jpg",
  };

  const itemName = item ? item.charAt(0).toUpperCase() + item.slice(1) : "";
  const itemCount = item ? items[item] : 0;
  const itemImage = item ? images[item] : "";

  const handleBackClick = () => {
    if (from === "office") {
      navigate("/office", { state: { student } });
    } else if (from === "studentroom") {
      navigate("/studentroom", { state: { student } });
    } else {
      navigate("/roomselection", { state: { student } });
    }
  };

  const handleBorrowClick = async () => {
    const data = {
      itemId: item,
      studentId: studentId,
      roomId: roomId,
      itemName: itemName,
    };

    try {
      const response = await fetch("http://localhost:8000/borrow/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Item borrowed successfully");
      } else {
        console.error("Failed to borrow item:", response.statusText);
      }
    } catch (error) {
      console.error("Error during item borrowing:", error);
    }
  };

  return (
    <div>
      <Header isLoggedIn={true} />
      {item && (
        <div className="e102_2">
          <span className="e102_3">
            {from === "office" ? "Office" : "Student Room"}
          </span>
          <span className="e102_6">{itemName}</span>
          <div
            className="e102_22"
            id="back-button-borrow-page"
            onClick={handleBackClick}
          >
            <div className="e102_7"></div>
          </div>
          <div className="e102_25">
            {itemCount > 0 ? (
              <img
                src={itemImage}
                alt={item.charAt(0).toUpperCase() + item.slice(1)}
                className="item-image"
              />
            ) : (
              <div className="no-remaining">There are no remainings</div>
            )}
          </div>
          <div className="e102_33">
            <span className="e102_36">{itemCount}</span>
          </div>
          <span className="e102_34">Remaining number</span>
          <div
            className="e102_41"
            id="borrow-button"
            onClick={itemCount > 0 ? handleBorrowClick : null}
            style={{
              opacity: itemCount > 0 ? 1 : 0.5,
              cursor: itemCount > 0 ? "pointer" : "default",
            }}
          >
            <span className="e102_38">
              <b>BORROW</b>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BorrowingPage;
