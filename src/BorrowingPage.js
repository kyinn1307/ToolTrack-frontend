import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "../src/styles/borrowing.css";

const BorrowingPage = () => {
  const navigate = useNavigate();
  const { item } = useParams();
  const location = useLocation();
  const from = location.state?.from;

  const items = {
    calculator: 26,
    blanket: 15,
    earphone: 12,
    ruler: 20,
  };

  const images = {
    calculator:
      "https://gi.esmplus.com/untteutmax/webprogramming/calculator.jpeg",
    blanket: "https://gi.esmplus.com/untteutmax/webprogramming/blanket.jpeg",
    earphone: "https://gi.esmplus.com/untteutmax/webprogramming/earphone.jpeg",
    ruler: "https://gi.esmplus.com/untteutmax/webprogramming/ruler.jpeg",
  };

  const itemName = item ? item.charAt(0).toUpperCase() + item.slice(1) : "";
  const itemCount = item ? items[item] : 0;
  const itemImage = item ? images[item] : "";

  const handleNavigation = (path, state) => {
    navigate(path, { state });
  };

  const handleBackClick = () => {
    if (from === "office") {
      navigate("/office");
    } else if (from === "studentroom") {
      navigate("/studentroom");
    } else {
      navigate("/roomselection");
    }
  };

  const handleBorrowClick = () => {
    handleNavigation(`/borrowing/date/${item}`, { from });
  };

  return (
    <div>
      <div className="e1_4">
        <span
          className="e1_7"
          id="main-button"
          onClick={() => handleNavigation("/roomselection")}
        >
          ITM <b>ToolTrack</b>
        </span>
        <button
          type="button"
          className="e1_8"
          id="login-button"
          onClick={() => handleNavigation("/login")}
        >
          login
        </button>
      </div>

      {item && (
        <div className="e102_2">
          <span className="e102_3">Student’s office</span>
          <span className="e102_6">{itemName}</span>
          <div
            className="e102_22"
            id="back-button-borrow-page"
            onClick={handleBackClick}
          >
            <div className="e102_7"></div>
          </div>
          <div className="e102_25">
            <img src={itemImage} alt={itemName} className="item-image" />
          </div>
          <div className="e102_33">
            <span className="e102_36">{itemCount}</span>
          </div>
          <span className="e102_34">Remaining number</span>
          <div
            className="e102_41"
            id="borrow-button"
            onClick={handleBorrowClick}
          >
            <span className="e102_38">BORROW</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BorrowingPage;
