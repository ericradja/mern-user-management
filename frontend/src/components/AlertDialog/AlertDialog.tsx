import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";

interface AlertDialogProps {
  open: boolean;
  title: string;
  content: ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClickConfirm: () => void;
}

const useStyles = makeStyles({
  btnActions: {
    "& button": {
      textTransform: "none",
    },
  },
});

const AlertDialog: FC<AlertDialogProps> = ({
  open,
  title,
  content,
  setOpen,
  onClickConfirm,
}) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth={true}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions className={classes.btnActions}>
        <Button onClick={handleClose} color="default" variant="outlined">
          Annuler
        </Button>
        <Button
          onClick={() => {
            handleClose();
            onClickConfirm();
          }}
          color="secondary"
          variant="outlined"
        >
          Confirmer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
