import { createContext, useContext } from "react";
import { User } from "../types/user";

export type UsersContextType = {
  users: User[];
  setUsers: (users: User[]) => void;
};

export const UsersContext = createContext<UsersContextType>({
  users: [],
  setUsers: () => null,
});

export const useUsers = () => useContext(UsersContext);
