import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

const SelectCity = (props) => {
  const { field, data, sex } = props;
  if (sex === "") {
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
  }
  return (
    <select {...field} {...props}>
      {data?.map((data, id) => {
        let list =
          data.params?.gender == undefined || sex === data.params?.gender ? (
            <option key={id} value={data.id}>
              <Typography variant="h4">{data.name}</Typography>
            </option>
          ) : null;
        return list;
      })}
    </select>
  );
};
export default SelectCity;
