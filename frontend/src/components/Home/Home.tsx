import { Box, Button, TextField } from "@material-ui/core";
import React, { FC, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { CREATE_USER_URL } from "../../constants/url";
import { useUsers } from "../../context/UsersContext";
import { useUserManagement } from "../../hooks/useUserManagement";
import { User } from "../../types/user";
import { LinearLoader } from "../Loader";
import UserTable from "../UserTable";
import useStyles from "./styles";

const Home: FC<RouteComponentProps> = ({ history: { push } }) => {
  const classes = useStyles();
  const { getUsers, paginatedUsers, loading, error } = useUserManagement();
  const { users, setUsers } = useUsers();
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const defaultUsers: User[] = (paginatedUsers && paginatedUsers.users) || [];

  // Get Users
  React.useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set users
  React.useEffect(() => {
    if (paginatedUsers && paginatedUsers.users) {
      setUsers(paginatedUsers.users);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginatedUsers]);

  // Search
  React.useEffect(() => {
    if (searchKeyword.length > 0) {
      const newUsers = defaultUsers.filter(
        (user) =>
          user.firstname.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          user.lastname.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          user.email.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setUsers(newUsers);
    } else {
      setUsers(defaultUsers);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword]);

  const goToCreate = () => push(CREATE_USER_URL);

  return (
    <Box width="100%">
      {loading && <LinearLoader />}
      <Box className={classes.head}>
        <h1 className={classes.title}>Liste des utilisateurs</h1>
        <Box className={classes.btnsContainer}>
          <Button variant="outlined" onClick={goToCreate} color="primary">
            Ajouter un utilisateur
          </Button>
        </Box>
      </Box>
      <TextField
        className={classes.searchInput}
        label="Recherche"
        type="text"
        variant="outlined"
        name="searchKeyword"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      {error ? (
        <h4>Une erreur s'est produite! Essayez de rafraîchir la page.</h4>
      ) : users.length === 0 && !loading ? (
        <h4>Aucune donnée disponible</h4>
      ) : (
        <UserTable users={users} />
      )}
    </Box>
  );
};

export default withRouter(Home);
