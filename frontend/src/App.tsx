import React from "react";
import { Box } from "@material-ui/core";
import AppRouter from "./components/Router";

const App = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <AppRouter />
    </Box>
  );
};

export default App;
