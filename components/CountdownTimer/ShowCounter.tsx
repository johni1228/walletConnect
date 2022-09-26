import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';

const ShowCounter = ({ days, hours, minutes, seconds, counter }) => {
  const dangerCounter = 3 * 60 * 1000;
  return (
    <div className="show-counter w-full h-full flex justify-around items-center text-2xl  ">
      <DateTimeDisplay value={days} isDanger={counter < dangerCounter} />
      <p>:</p>
      <DateTimeDisplay value={hours} isDanger={counter < dangerCounter} />
      <p>:</p>
      <DateTimeDisplay value={minutes} isDanger={counter < dangerCounter} />
      <p>:</p>
      <DateTimeDisplay value={seconds} isDanger={counter < dangerCounter} />
    </div >
  );
};

export default ShowCounter;