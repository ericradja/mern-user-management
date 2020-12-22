import { AppBar, Toolbar } from "@material-ui/core";
import clsx from "clsx";
import React, { FC, Fragment } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import useStyles from "./styles";

const Navbar: FC<RouteComponentProps> = ({ location: { pathname } }) => {
  const classes = useStyles();

  const links = [
    {
      label: "A propos",
      url: "/#",
      isActive: false,
    },
    {
      label: "Contact",
      url: "/#",
      isActive: false,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="transparent">
        <Toolbar variant="dense" className={classes.toolbar}>
          <Link to="/" className={classes.brand}>
            My SPA
          </Link>
          <div className={classes.links}>
            {links.map((link, index) => (
              <Fragment key={index}>
                <Link
                  className={
                    link.isActive
                      ? clsx(classes.link, classes.active)
                      : classes.link
                  }
                  to={link.url}
                >
                  {link.label}
                </Link>
              </Fragment>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
