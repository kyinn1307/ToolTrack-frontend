import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/office.css";

const OfficePage = () => {
  const navigate = useNavigate();

  const [hoveredItem, setHoveredItem] = useState(null);
  const [lastHoveredItem, setLastHoveredItem] = useState("calculator");

  const items = {
    calculator: 26,
    blanket: 10, // need to change
  };

  const handleBackButtonClick = () => {
    navigate("/roomselection"); // Use navigate to change the route
  };

  const handleItemButtonClick = (item) => {
    navigate(`/borrowing/${item}`, { state: { from: "office" } });
  }; // go to borrowing item page with state that items belong to

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
    setLastHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div>
      <div className="e1_4">
        <span className="e1_7" id="main-button" onClick={handleBackButtonClick}>
          ITM <b>ToolTrack</b>
        </span>
      </div>

      <div className="e19_14">
        <div className="e19_15"></div>
        <div
          className="e19_16"
          id="calculator-box"
          onClick={() => handleItemButtonClick("calculator")}
          onMouseEnter={() => handleMouseEnter("calculator")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="e19_33"></div>
        </div>
        <div
          className="e19_17"
          onClick={() => handleItemButtonClick("blanket")}
          onMouseEnter={() => handleMouseEnter("blanket")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="e19_32"></div>
        </div>
        <span className="e19_19">
          Which <b>tool</b> do you want?
        </span>
        <span className="e19_20">
          Now you can borrow from the <b>office</b>
        </span>
        <span className="e19_21">Remaining number</span>
        <span className="e19_22" id="item_name_mouse">
          {hoveredItem ? hoveredItem : lastHoveredItem ? lastHoveredItem : ""}
        </span>
        <span className="e19_23" id="item_num_mouse">
          {hoveredItem
            ? items[hoveredItem]
            : lastHoveredItem
            ? items[lastHoveredItem]
            : ""}
        </span>
        <div
          className="e19_24"
          onClick={() => handleItemButtonClick("calculator")}
          onMouseEnter={() => handleMouseEnter("calculator")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="e19_25">
            <div className="e19_26"></div>
          </div>
          <span className="e19_27">calculator</span>
        </div>
        <div
          className="e19_28"
          onClick={() => handleItemButtonClick("blanket")}
          onMouseEnter={() => handleMouseEnter("blanket")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="e19_29">
            <div className="e19_30"></div>
          </div>
          <span className="e19_31">blanket</span>
        </div>
        <div
          className="e32_87"
          id="back-button-office"
          onClick={handleBackButtonClick}
        >
          <div className="e32_85"></div>
        </div>
      </div>
    </div>
  );
};

export default OfficePage;
