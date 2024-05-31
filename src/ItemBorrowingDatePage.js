import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "../src/styles/borrowingDate.css"; // Ensure you have the corresponding CSS file

const ItemBorrowingDatePage = () => {
  const navigate = useNavigate();
  const { item } = useParams();
  const location = useLocation();
  const from = location.state?.from;

  const handleNavigation = (path, state) => {
    navigate(path, { state });
  };

  const handleBackClick = () => {
    handleNavigation(`/borrowing/${item}`, { from });
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
      </div>
      <div className="e102_53">
        <div className="e174_9">
          <span className="e102_54">Student’s office</span>
          <span className="e102_82">24</span>
          <span className="e102_83">24</span>
          <span className="e102_84">05</span>
          <span className="e102_86">17</span>
          <span className="e102_87">31</span>
          <span className="e102_85">05</span>
          <span className="e121_13">02</span>
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
          <div className="e102_75"></div>
          <div className="e102_76"></div>
          <span className="e102_59">Borrowing date</span>
          <span className="e102_71">Returning date</span>

          <div
            className="e102_70"
            id="confirm-button"
            onClick={() => handleNavigation("/confirm")}
          >
            <div className="e102_61">
              <span className="e102_63">
                <b>CONFIRM</b>
              </span>
            </div>
          </div>
          <div className="e102_77"></div>
          <div className="e102_80"></div>
          <div className="e102_81"></div>
          <div className="e102_78"></div>
          <span className="e121_14">24</span>
          <span className="e121_15">31</span>
          <span className="e121_16">05</span>
          <div className="e121_17"></div>
          <div className="e121_18"></div>
          <div className="e121_19"></div>
        </div>
        <div
          className="e102_64"
          id="back-button-borrowingDate"
          onClick={handleBackClick}
        >
          <div className="e102_65"></div>
        </div>
        <div className="e174_8">
          <div className="e121_7">
            <div className="e121_10">
              <div className="e121_11">
                <div className="e121_12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBorrowingDatePage;
