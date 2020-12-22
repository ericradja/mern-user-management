import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    head: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: { fontSize: 35 },
    btnsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& > button": {
        textTransform: "none",
      },
    },
    searchInput: {
      width: "100%",
      maxWidth: 500,
      marginBottom: 25,
    },
  })
);

export default useStyles;
