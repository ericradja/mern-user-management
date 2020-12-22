import React, { useState } from "react";
import { Box } from "@material-ui/core";
import AppRouter from "./components/Router";
import { User } from "./types/user";
import { UsersContext } from "./context/UsersContext";
import { SnackbarContext } from "./context/SnackbarContext";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <SnackbarContext.Provider
        value={{ open: openSnackbar, setOpen: setOpenSnackbar }}
      >
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          minHeight="100vh"
        >
          <AppRouter />
        </Box>
      </SnackbarContext.Provider>
    </UsersContext.Provider>
  );
};

export default App;
