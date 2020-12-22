import axios from "axios";
import { useCallback, useState } from "react";
import { API_BASE_URL } from "../constants/api";
import { useUsers } from "../context/UsersContext";
import {
  PaginatedUsers,
  User,
  UserEditData,
  UserManagementType,
} from "../types/user";

const headers = { "Content-Type": "application/json" };

export const useUserManagement = (): UserManagementType => {
  const [loading, setLoading] = useState<boolean>(false);
  const [paginatedUsers, setPaginatedUsers] = useState<PaginatedUsers | null>(
    null
  );
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<any>(null);
  const [message, setMessage] = useState<string>("");

  // Global state
  const { users, setUsers } = useUsers();

  const getUsers = useCallback((page?: number, limit?: number) => {
    setLoading(true);
    let url = `${API_BASE_URL}/users`;
    if (page && !limit) url = `${API_BASE_URL}/users?page=${page}`;
    if (limit && !page) url = `${API_BASE_URL}/users?limit=${limit}`;
    if (page && limit) {
      url = `${API_BASE_URL}/users?page=${page}&limit=${limit}`;
    }
    axios
      .get(url, { headers })
      .then(({ data }) => {
        setPaginatedUsers(data);
      })
      .catch((err) => {
        console.error("err :>> ", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const getUser = useCallback((userId: string) => {
    const url = `${API_BASE_URL}/user/${userId}`;
    setLoading(true);
    axios
      .get(url, { headers })
      .then(({ data }) => {
        if (data && data.user) {
          setUser(data.user);
        }
      })
      .catch((err) => {
        console.error("err :>> ", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const addUser = useCallback((user: User) => {
    const url = `${API_BASE_URL}/add-user`;
    setLoading(true);
    axios
      .post(url, {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      })
      .then(({ data }) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.error("err :>> ", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const editUser = useCallback((userId: string, data: UserEditData) => {
    const url = `${API_BASE_URL}/edit-user/${userId}`;
    setLoading(true);
    axios
      .put(url, {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
      })
      .then(({ data }) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.error("err :>> ", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const deleteUser = useCallback(
    (userId: string) => {
      const url = `${API_BASE_URL}/delete-user/${userId}`;
      setLoading(true);
      axios
        .delete(url, { headers })
        .then(({ data }) => {
          if (data && data.user) {
            setMessage(data.message);
            // Update global state
            const newUsers = users.filter((u) => u._id !== data.user._id);
            setUsers(newUsers);
          }
        })
        .catch((err) => {
          console.error("err :>> ", err);
          setError(err);
        })
        .finally(() => setLoading(false));
    },
    [setUsers, users]
  );

  return {
    user,
    paginatedUsers,
    loading,
    error,
    message,
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser,
  };
};
