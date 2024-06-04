import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "../src/styles/borrowingDate.css";
import Header from "./Header";

const ItemBorrowingDatePage = () => {
  const navigate = useNavigate();
  const { item } = useParams();
  const location = useLocation();
  const from = location.state?.from;
  const student = location.state?.student || {};

  const [value, setValue] = useState("0");
  const [borrowingDate, setBorrowingDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const [returningDate, setReturningDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const handleNavigation = (path, state) => {
    navigate(path, { state });
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d{0,2}$/.test(newValue)) {
      setValue(newValue);
    }
  };

  const handleBackClick = () => {
    handleNavigation(`/borrowing/${item}`, { from });
  };

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  // limit the term between borrowing date and return date
  useEffect(() => {
    const maxBorrowingPeriod = 14; // 최대 2주 (14일)
    const maxReturningDate = new Date(borrowingDate);
    maxReturningDate.setDate(maxReturningDate.getDate() + maxBorrowingPeriod);

    if (returningDate < borrowingDate) {
      setReturningDate(borrowingDate);
    } else if (new Date(returningDate) > maxReturningDate) {
      setReturningDate(formatDate(maxReturningDate));
    }
  }, [borrowingDate, returningDate]);

  const handleConfirmClick = async () => {
    const data = {
      item,
      quantity: value, // have to modify the variable name
      borrowingDate,
      returningDate,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/borrow/", // have to modify the url
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Data sent successfully");
        handleNavigation("/confirm", { from });
      } else {
        console.error("Failed to send data:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <Header
        isLoggedIn={true}
        isAdmin={student.isAdmin} /*onLogoutClick={handleLogoutClick}*/
      />{" "}
      <div className="e102_53">
        <div className="e174_9">
          <span className="e102_54">
            {from === "office" ? "Office" : "Student Room"}
          </span>
          <span className="e102_55">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </span>
          <div className="e102_58">
            <span className="e121_6">
              You’re gonna <br />
              borrow
              <br />
              {item}.<br />
              The returning date is
            </span>
          </div>
          <input
            type="date"
            className="e102_75"
            value={borrowingDate}
            onChange={(e) => setBorrowingDate(e.target.value)}
          />
          <input
            type="date"
            className="e102_76"
            value={returningDate}
            min={borrowingDate}
            max={formatDate(
              new Date(
                new Date(borrowingDate).setDate(
                  new Date(borrowingDate).getDate() + 14
                )
              )
            )} // make a limitation of returning date
            onChange={(e) => setReturningDate(e.target.value)}
          />
          <span className="e102_59">Borrowing date</span>
          <span className="e102_71">Returning date</span>

          <div
            className="e102_70"
            id="confirm-button"
            onClick={handleConfirmClick}
          >
            <div className="e102_61">
              <span className="e102_63">
                <b>CONFIRM</b>
              </span>
            </div>
          </div>
          <input
            type="date"
            className="e121_17"
            value={returningDate}
            min={borrowingDate}
            max={formatDate(
              new Date(
                new Date(borrowingDate).setDate(
                  new Date(borrowingDate).getDate() + 14
                )
              )
            )} // make a limitation of returning date
            onChange={(e) => setReturningDate(e.target.value)}
          />
        </div>
        <div
          className="e102_64"
          id="back-button-borrowingDate"
          onClick={handleBackClick}
        >
          <div className="e102_65"></div>
        </div>
        <input
          type="number"
          name="favnum"
          min="0"
          max="99"
          value={value}
          onChange={handleChange}
          className="e174_8"
        />
      </div>
    </div>
  );
};

export default ItemBorrowingDatePage;
