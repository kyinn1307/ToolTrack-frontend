import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/studentRoom.css";
import Header from "./Header";

const StudentRoomPage = () => {
  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(2);

  const items = {
    earphone: 12,
    ruler: 8,
    tissue: 10,
  };

  const images = [
    {
      src: "https://gi.esmplus.com/untteutmax/webprogramming/earphone.jpeg",
      name: "earphone",
    },
    {
      src: "https://gi.esmplus.com/untteutmax/webprogramming/ruler.jpeg",
      name: "ruler",
    },
    {
      src: "https://gi.esmplus.com/untteutmax/webprogramming/tissue.jpg",
      name: "tissue",
    },
  ];

  const handleBackButtonClick = () => {
    navigate("/roomselection");
  };

  const handleItemButtonClick = (item) => {
    navigate(`/borrowing/${item}`, { state: { from: "studentroom" } });
  };

  const handleImageClick = () => {
    setPreviousImageIndex(currentImageIndex);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const currentItem = images[currentImageIndex].name;
  const previousItem = images[previousImageIndex].name;

  return (
    <div className="e1_1">
      <Header isLoggedIn={true} /*onLogoutClick={handleLogoutClick}*/ />{" "}
      <div className="e28_45">
        <div className="e28_46"></div>
        <div
          className="e28_47"
          id="image-box"
          onClick={() => handleItemButtonClick(currentItem)}
          style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}
        ></div>
        <div
          className="e28_48"
          onClick={handleImageClick}
          style={{ backgroundImage: `url(${images[previousImageIndex].src})` }}
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
          {currentItem}
        </span>
        <span className="e28_54" id="item_remain_num">
          {items[currentItem]}
        </span>
        <div
          className="e28_55"
          onClick={() => handleItemButtonClick(currentItem)}
        >
          <span className="e28_58">{currentItem}</span>
        </div>
        <div className="e28_59">
          <span className="e28_62">{previousItem}</span>
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
