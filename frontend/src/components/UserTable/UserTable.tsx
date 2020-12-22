import {
  IconButton,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import dayjs from "dayjs";
import React, { FC, Fragment, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useUserManagement } from "../../hooks/useUserManagement";
import { User } from "../../types/user";
import AlertDialog from "../AlertDialog";

interface UserTableProps {
  users: User[];
}

interface UserTableColumn {
  id: keyof User;
  label: string;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const UserTable: FC<UserTableProps & RouteComponentProps> = ({
  users,
  history: { push },
}) => {
  const classes = useStyles();

  const { deleteUser } = useUserManagement();

  const [open, setOpen] = useState<boolean>(false);
  const [deletedUser, setDeletedUser] = useState<User | null>(null);

  const columns: UserTableColumn[] = [
    { id: "lastname", label: "Nom" },
    { id: "firstname", label: "Prénom" },
    { id: "email", label: "Email" },
    { id: "createdAt", label: "Date de création" },
    { id: "updatedAt", label: "Date de modification" },
    { id: "" as any, label: "Actions" },
  ];

  const goToEdit = (id: string) => push(`/user/edit/${id}`);

  const handleClickDelete = (user: User) => {
    setOpen(true);
    setDeletedUser(user);
  };

  const handleClickConfirmDelete = () => {
    if (deletedUser && deletedUser._id) {
      deleteUser(deletedUser._id);
    }
  };

  // Set deletedUser to null if on click cancel
  React.useEffect(() => {
    if (!open && deletedUser) setDeletedUser(null);
  }, [open, deletedUser]);

  return (
    <Fragment>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                return (
                  <TableCell key={index} align="left">
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id} hover>
                {columns.map((column, index) => {
                  if (column.id) {
                    return (
                      <TableCell key={index} align="left">
                        {column.id === "createdAt" || column.id === "updatedAt"
                          ? dayjs(user[column.id]).format("DD/MM/YYYY H:mm:ss")
                          : user[column.id]}
                      </TableCell>
                    );
                  } else {
                    return null;
                  }
                })}
                <TableCell align="left">
                  <IconButton
                    title="Modifier"
                    color="primary"
                    onClick={() => goToEdit(user._id)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    title="Supprimer"
                    color="secondary"
                    onClick={() => handleClickDelete(user)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AlertDialog
        open={open}
        setOpen={setOpen}
        title="Suppression"
        content={
          <span>
            Etes-vous sûre de vouloir supprimer{" "}
            <span style={{ fontWeight: "bold" }}>{`${
              deletedUser
                ? deletedUser.firstname + " " + deletedUser.lastname
                : ""
            }`}</span>{" "}
            ?
          </span>
        }
        onClickConfirm={handleClickConfirmDelete}
      />
    </Fragment>
  );
};

export default withRouter(UserTable);
