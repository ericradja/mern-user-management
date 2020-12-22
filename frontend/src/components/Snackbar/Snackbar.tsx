import { IconButton, Snackbar as MUISnackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, { FC } from "react";
import { useSnackbar } from "../../context/SnackbarContext";

interface SnackbarProps {
  message: string;
  autoHideDuration?: number;
}

const Snackbar: FC<SnackbarProps> = ({ message, autoHideDuration = 5000 }) => {
  const { open, setOpen } = useSnackbar();

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <MUISnackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      message={message}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};

export default Snackbar;
