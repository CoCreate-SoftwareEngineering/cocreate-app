import React, { useState } from 'react';

const ToggleableHeading = ({ heading, rowContent }) => {
  const [isRowVisible, setIsRowVisible] = useState(true);

  const toggleRowVisibility = () => {
    setIsRowVisible(!isRowVisible);
  };

  return (
    <div>
      <h2>
        {heading}
        <span onClick={toggleRowVisibility} style={{ cursor: 'pointer' }}>
          {isRowVisible ? ' ▼' : ' ▶'}
        </span>
      </h2>
      {isRowVisible && <div className="row">{rowContent}</div>}
    </div>
  );
};

export default ToggleableHeading;