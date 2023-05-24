import makeStyles from "../../hooks/makeStyles";

export default makeStyles(() => {
  return {
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
      minHeight: 100,
    },
  };
});
