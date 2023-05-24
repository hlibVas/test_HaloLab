import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "./styles";

function Spinner(props) {
  const { thickness, ...restProps } = props;

  const classes = useStyles();

  return (
    <div className={classes.root} {...restProps}>
      <CircularProgress
        thickness={thickness}
        willchange="transform"
        color="primary"
        size={64}
      />
    </div>
  );
}

Spinner.defaultProps = {
  size: 64,
  thickness: 4,
};

export default Spinner;
