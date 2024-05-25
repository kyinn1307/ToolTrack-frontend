// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/roomSelection.css";

const RoomSelectionPage = () => {
  const navigate = useNavigate();

  const officeClick = () => {
    navigate("/office"); // Use navigate to change the route as office page
  };
  const studentRoomClick = () => {
    navigate("/studentroom"); // Use navigate to change the route as studentroom page
  };

  return (
    <div>
      <div className="e1_4">
        <span className="e1_7" id="main-button">
          ITM <b>ToolTrack</b>
        </span>
        <button type="button" className="e1_8" id="login-button">
          login
        </button>

        <div className="e5_74">
          <div className="e5_87" id="office-button" onClick={officeClick}>
            <div className="e5_96" id="office-onmouse"></div>
          </div>
          <div
            className="e5_88"
            id="student-room-button"
            onClick={studentRoomClick}
          >
            <div className="e5_97" id="student-room-onmouse"></div>
          </div>
          <span className="e5_90">
            Which <b>office</b> do you want to visit?
          </span>
          <span className="e5_95">
            you can search & borrow anything in ITM with ITM <b>ToolTrack</b> !
          </span>
          <span className="e28_34">
            click to choose <b>{">>"}</b>
          </span>
          <div className="e8_109">
            <div className="e8_108">
              <div className="e8_105"></div>
            </div>
            <span className="e8_107">office</span>
          </div>
          <div className="e8_110">
            <div className="e8_111">
              <div className="e8_112"></div>
            </div>
            <span className="e8_113">student room</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSelectionPage;
