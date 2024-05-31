import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/studentRoom.css";

const StudentRoomPage = () => {
  const navigate = useNavigate();

  const [hoveredItem, setHoveredItem] = useState(null);
  const [lastHoveredItem, setLastHoveredItem] = useState("earphone");

  const items = {
    earphone: 12,
    ruler: 8, // ruler의 개수를 실제 값으로 설정하세요.
  };

  const handleBackButtonClick = () => {
    navigate("/roomselection"); // Use navigate to change the route
  };

  const handleItemButtonClick = (item) => {
    navigate(`/borrowing/${item}`, { state: { from: "studentroom" } });
  }; // go to borrowing item page with state that items belong to

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
    setLastHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    setLastHoveredItem("earphone");
  }, []);

  return (
    <div>
      <div className="e1_4">
        <span className="e1_7" id="main-button" onClick={handleBackButtonClick}>
          ITM <b>ToolTrack</b>
        </span>
      </div>

      <div className="e28_45">
        <div className="e28_46"></div>
        <div
          className="e28_47"
          id="earphone_button"
          onClick={() => handleItemButtonClick("earphone")}
          onMouseEnter={() => handleMouseEnter("earphone")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="e28_63"></div>
        </div>
        <div
          className="e28_48"
          id="ruler_button"
          onClick={() => handleItemButtonClick("ruler")}
          onMouseEnter={() => handleMouseEnter("ruler")}
          onMouseLeave={handleMouseLeave}
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
          {hoveredItem ? hoveredItem : lastHoveredItem ? lastHoveredItem : ""}
        </span>
        <span className="e28_54" id="item_remain_num">
          {hoveredItem ? items[hoveredItem] : lastHoveredItem ? items[lastHoveredItem] : ""}
        </span>
        <div
          className="e28_55"
          onClick={() => handleItemButtonClick("earphone")}
          onMouseEnter={() => handleMouseEnter("earphone")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="e28_58">earphone</span>
        </div>
        <div
          className="e28_59"
          onClick={() => handleItemButtonClick("ruler")}
          onMouseEnter={() => handleMouseEnter("ruler")}
          onMouseLeave={handleMouseLeave}
        >
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
