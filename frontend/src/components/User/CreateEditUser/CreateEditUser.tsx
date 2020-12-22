import { Box, Button, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { FC, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { HOME_URL } from "../../../constants/url";
import { useForm } from "../../../hooks/useForm";
import { useUserManagement } from "../../../hooks/useUserManagement";
import { isEmailValid } from "../../../utils/validator";
import { LinearLoader } from "../../Loader";
import useStyles from "./styles";

const CreateEditUser: FC<RouteComponentProps> = ({
  history: { push },
  location: { pathname },
  match: { params },
}) => {
  const classes = useStyles();
  const isOnEdit = pathname.includes("/edit/");

  const { id } = params as any;

  const {
    addUser,
    editUser,
    getUser,
    loading,
    error,
    user,
    message,
  } = useUserManagement();

  const initFormState = { firstname: "", lastname: "", email: "" };
  const { formState, updateFormState, handleChangeInput } = useForm(
    initFormState
  );

  const { firstname, lastname, email } = formState;

  const handleClickSave = async () => {
    if (isOnEdit) {
      if (user && user._id) {
        editUser(user._id, { firstname, lastname, email });
      }
    } else {
      addUser({ _id: "", firstname, lastname, email });
    }
  };

  const disabledBtnSave = () => {
    if (firstname && lastname && email && isEmailValid(email)) {
      return false;
    }
    return true;
  };

  // Get user if on edit
  useEffect(() => {
    if (id && isOnEdit) {
      getUser(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isOnEdit]);

  // Update form state
  useEffect(() => {
    if (user) {
      updateFormState({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // Redirect after create or edit
  useEffect(() => {
    if (message && (message.includes("added") || message.includes("updated"))) {
      push(HOME_URL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <Box className={classes.root}>
      {loading && <LinearLoader />}
      {error && (
        <Alert
          severity="error"
          variant="outlined"
          className={classes.marginTop}
        >
          Une erreur s'est produite! Actualisez la page et réessayez.
        </Alert>
      )}
      <h1>{`${isOnEdit ? "Modifier" : "Ajouter"} un utilisateur`} </h1>
      <Box className={classes.formContainer}>
        <TextField
          className={classes.input}
          label="Prénom"
          type="text"
          variant="outlined"
          name="firstname"
          value={firstname}
          onChange={handleChangeInput}
          required
        />
        <TextField
          className={classes.input}
          label="Nom"
          type="text"
          variant="outlined"
          name="lastname"
          value={lastname}
          onChange={handleChangeInput}
          required
        />
        <TextField
          className={classes.input}
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={email}
          onChange={handleChangeInput}
          required
          error={email && !isEmailValid(email)}
        />
        <Box display="flex" width="100%" justifyContent="space-between">
          <Button
            variant="outlined"
            className={classes.btn}
            onClick={() => push(HOME_URL)}
            size="large"
            color="default"
          >
            Annuler
          </Button>
          <Button
            variant="outlined"
            disabled={disabledBtnSave()}
            className={classes.btn}
            onClick={handleClickSave}
            size="large"
            color="primary"
          >
            Enregistrer
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default withRouter(CreateEditUser);
