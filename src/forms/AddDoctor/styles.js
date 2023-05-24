import makeStyles from "../../hooks/makeStyles";

export default makeStyles(({ palette, spacing, breakpoints }) => {
  return {
    root: {
      width: 480,
      display: "flex",
      flexDirection: " column",
      background: "#F5F5F5",
      borderRadius: 12,
      height: "calc(100vh - 16px)",
    },
    label: {
      fontSize: 18,
      lineHeight: "16px",
      color: "#322D2D",
      margin: "24px 0 18px 24px",
    },
    labelSecondary: {
      color: "#B9B9BC",
      marginLeft: 24,
    },

    field: {
      margin: "0 24px",
    },
    loadingRoot: {
      display: "flex",
      height: "100vh",
      alignContent: "center",
      flexDirection: "column",
      justifyContent: "center",
    },
    submitButton: {
      marginTop: "auto",
      background: "#F38921",
      borderRadius: "12px 12px 0px 0px",
      color: "#fff",
      "&:hover": {
        background: "#F38921",
      },
    },
  };
});
