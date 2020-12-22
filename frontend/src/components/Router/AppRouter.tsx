import { Box } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CREATE_USER_URL, EDIT_USER_URL, HOME_URL } from "../../constants/url";
import Home from "../Home";
import Navbar from "../Navbar";
import CreateEditUser from "../User/CreateEditUser";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Box width="100%" maxWidth="1000px" display="flex" marginTop="50px">
        <Switch>
          <Route path={[CREATE_USER_URL, EDIT_USER_URL]} strict exact>
            <CreateEditUser />
          </Route>
          <Route path={HOME_URL} strict exact>
            <Home />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};

export default AppRouter;
