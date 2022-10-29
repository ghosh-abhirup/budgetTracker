import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import useStyles from "./styles";

const SnackBar = ({ open, setOpen }) => {
  const classes = useStyles();

  const onCloseHandler = (event, reason) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={onCloseHandler}
      >
        <Alert
          onClose={onCloseHandler}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfully created
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
