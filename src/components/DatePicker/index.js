import React, { useState } from "react";

const DatePicker = (props) => {
  const { selectedDate, field, currentDate } = props;
  return (
    <input
      type="date"
      max={currentDate}
      value={selectedDate}
      {...field}
      {...props}
    />
  );
};
export default DatePicker;
