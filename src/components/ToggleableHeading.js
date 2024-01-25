import React, { useState } from 'react';
import './ToggleableHeading.css';
import NotificationBox from './NotificationBox';

const ToggleableHeading = ({ heading, notiAmountCons ,rowContent }) => {
  const [isRowVisible, setIsRowVisible] = useState(true);
  const [newAmount, setNewAmount] = useState(notiAmountCons);

  const toggleRowVisibility = () => {
    setIsRowVisible(!isRowVisible);
    setNewAmount(newAmount + 1);
    console.log(newAmount);
  };

  return (
    <>
    <div>
      <h2 class = "heading-container">
        {heading}
        <NotificationBox
        num = {newAmount}
        />
        {/*notiAmount > 0 && 
        <div class="notifcation-box">{notiAmount}</div>
  */}
        <span onClick={toggleRowVisibility} className = 'dropdown-arrow'>
          {isRowVisible ? ' ▼' : ' ▶'}
        </span>
      </h2>
    </div>
    {isRowVisible && <div className="row">{rowContent}</div>}
    </>
  );
};

export default ToggleableHeading;