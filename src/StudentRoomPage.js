// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/studentRoom.css";

const StudentRoomPage = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/roomselection"); // Use navigate to change the route
  };

  const handleItemButtonClick = (item) => {
    navigate(`/borrowing/${item}`, { state: { from: "studentroom" } });
  }; // go to borrowing item page with state that items belong to

  return (
    <div>
      <div className="e1_4">
        <span className="e1_7" id="main-button" onClick={handleBackButtonClick}>
          ITM <b>ToolTrack</b>
        </span>
        <button type="button" className="e1_8" id="login-button">
          login
        </button>
      </div>

      <div className="e28_45">
        <div className="e28_46"></div>
        <div
          className="e28_47"
          id="earphone_button"
          onClick={() => handleItemButtonClick("earphone")}
        >
          <div className="e28_63"></div> {/* div for layer */}
        </div>

        <div
          className="e28_48"
          id="ruler_button"
          onClick={() => handleItemButtonClick("ruler")}
        >
          <div className="e28_64"></div>
        </div>
        <span className="e28_50">
          Which <b>tool</b> do you want?
        </span>
        <span className="e28_51">
          Now you can borrow from the <b>students room</b>
        </span>
        <span className="e28_52">Remaining number</span>
        <span className="e28_53" id="item_name">
          earphone
        </span>
        <span className="e28_54" id="item_remain_num">
          12
        </span>
        <div
          className="e28_55"
          onClick={() => handleItemButtonClick("earphone")}
        >
          <span className="e28_58">earphone</span>
        </div>
        <div className="e28_59">
          <span className="e28_62">ruler</span>
        </div>
        <div
          className="e32_101"
          id="back-button-studentRoom"
          onClick={handleBackButtonClick}
        >
          <div className="e32_104"></div>
        </div>
      </div>
    </div>
  );
};

export default StudentRoomPage;
