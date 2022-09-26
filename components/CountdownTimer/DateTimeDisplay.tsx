import React from 'react';

const DateTimeDisplay = ({ value, isDanger }) => {
  return (
    <div>
      <p className={isDanger ? "text-red-500" : "text-black"}>{value}</p>
    </div >
  );
};

export default DateTimeDisplay;