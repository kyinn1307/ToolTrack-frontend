import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/office.css";

const OfficePage = () => {
  const navigate = useNavigate();
  const images = [
    {
      src: "https://gi.esmplus.com/untteutmax/webprogramming/calculator.jpeg",
      name: "calculator",
    },
    {
      src: "https://gi.esmplus.com/untteutmax/webprogramming/blanket.jpeg",
      name: "blanket",
    },
    {
      src: "https://gi.esmplus.com/untteutmax/webprogramming/preventiveMedicine.jpg",
      name: "medicine",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(
    images.length - 1
  ); // 초기값을 마지막 이미지로 설정

  const items = {
    calculator: 26,
    blanket: 10,
    medicine: 15,
  };

  const handleBackButtonClick = () => {
    navigate("/roomselection");
  };

  const handleItemButtonClick = (item) => {
    navigate(`/borrowing/${item}`, { state: { from: "office" } });
  };

  const handleImageClick = () => {
    setPreviousImageIndex(currentImageIndex); // 이전 이미지를 현재 이미지로 설정
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // 현재 이미지를 다음 이미지로 설정
  };

  const currentItem = images[currentImageIndex].name;
  const previousItem = images[previousImageIndex].name;

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
          onClick={() => handleItemButtonClick(currentItem)}
          style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}
        ></div>
        <div
          className="e19_17"
          onClick={handleImageClick}
          style={{ backgroundImage: `url(${images[previousImageIndex].src})` }}
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
          {currentItem}
        </span>
        <span className="e19_23" id="item_num_mouse">
          {items[currentItem]}
        </span>
        <div
          className="e19_24"
          onClick={() => handleItemButtonClick("calculator")}
        >
          <div className="e19_25">
            <div className="e19_26"></div>
            <span className="e19_27">{currentItem}</span>
          </div>
        </div>
        <div
          className="e19_28"
          onClick={() => handleItemButtonClick("blanket")}
        >
          <div className="e19_29">
            <div className="e19_30"></div>
          </div>
          <span className="e19_31">{previousItem}</span>
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
