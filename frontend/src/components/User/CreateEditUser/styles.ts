import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      maxWidth: 500,
    },
    btn: {
      height: "100%",
      minHeight: 56,
      minWidth: 210,
    },
    input: { width: "100%", marginBottom: 15 },
    h5: { margin: 0, marginBottom: 10 },
    marginTop: {
      marginTop: 23.45,
    },
  })
);

export default useStyles;
