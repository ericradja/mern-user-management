import React, { FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      minWidth: "100vw",
      position: "absolute",
      left: 0,
    },
  })
);

interface LinearLoaderProps {
  color?: "secondary" | "primary";
}

const LinearLoader: FC<LinearLoaderProps> = ({ color = "secondary" }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LinearProgress color={color} />
    </div>
  );
};

export default LinearLoader;
