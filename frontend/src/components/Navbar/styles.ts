import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > header": {
        width: "100%",
        display: "flex",
        alignItems: "center",
      },
    },
    toolbar: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      maxWidth: 800,
    },
    brand: {
      color: "#000",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: 25,
    },
    links: {
      display: "flex",
    },
    link: {
      textTransform: "uppercase",
      cursor: "pointer",
      marginLeft: theme.spacing(2),
      color: "#000",
      textDecoration: "none",
      "&:hover": { fontWeight: "bold" },
    },
    active: {
      fontWeight: "bold",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export default useStyles;
