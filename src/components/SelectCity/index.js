import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

const SelectCity = (props) => {
  const { field, data } = props;

  return (
    <select {...field} {...props}>
      {data?.map((data, id) => {
        return (
          <option key={id} value={data.id}>
            <Typography variant="h6">{data.name}</Typography>
          </option>
        );
      })}
    </select>
  );
};
export default SelectCity;
