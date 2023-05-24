import React from "react";
import Typography from "@material-ui/core/Typography";

const SelectCity = (props) => {
  const { field, data, cityId, birthdayDate, values } = props;
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  if (cityId === "") {
    return (
      <select {...field} {...props}>
        {data?.map((data, id) => {
          return (
            <option key={id} value={data.id}>
              <Typography variant="h4">
                {`${data.name} ${data.surname}`}
              </Typography>
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
          cityId === data.id ? (
            birthdayDate ? (
              getAge(birthdayDate) < 16 && data.isPediatrician ? (
                <option key={id} value={data.id}>
                  <Typography variant="h4">
                    {`${data.name} ${data.surname}`}
                  </Typography>
                </option>
              ) : null
            ) : (
              <option key={id} value={data.id}>
                <Typography variant="h4">
                  {`${data.name} ${data.surname}`}
                </Typography>
              </option>
            )
          ) : null;
        return list;
      })}
    </select>
  );
};
export default SelectCity;
