import { createContext, useContext } from "react";

export type SnackbarContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const SnackbarContext = createContext<SnackbarContextType>({
  open: false,
  setOpen: () => null,
});

export const useSnackbar = () => useContext(SnackbarContext);
