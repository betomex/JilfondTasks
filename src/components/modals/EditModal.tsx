import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import { userEditFormParams } from '../../constants/userEditFormParams';
import { UsersFormInitialValuesType } from '../../types/userFormValues';
import { UserType } from '../../types/users';
import { updateUserDataById } from '../../redux/slices/users';
import { editModalFormSchema } from './editModalFormSchema';

type PropsType = {
  user: UserType
}

export const EditModal: React.FC<PropsType> = ({ user }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const dispatch = useDispatch();

  const initialValues: UsersFormInitialValuesType = {
    name: user.name,
    phone: user.phone,
    email: user.email,
    suite: user.address.suite,
    street: user.address.street,
    city: user.address.city,
    zipcode: user.address.zipcode
  }

  const onModalOpen = () => {
    setIsModalOpened(true);
  };

  const onModalClose = () => {
    setIsModalOpened(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values) => {
        dispatch(updateUserDataById({
          ...values,
          id: user.id
        }))
        onModalClose();
      }}
      validationSchema={editModalFormSchema(userEditFormParams)}
    >
      {
        (
          {
            values,
            errors,
            handleChange,
            handleSubmit
          }
        ) => (
          <Box>
            <IconButton onClick={onModalOpen}>
              <EditIcon />
            </IconButton>
            <Dialog open={isModalOpened} onClose={onModalClose}>
              <DialogTitle>Изменить данные пользователя</DialogTitle>
              <DialogContent>
                <Form>
                  {
                    userEditFormParams.map(param => {
                      const key = (param.id) as keyof UsersFormInitialValuesType;
                      return (
                        <TextField
                          key={param.id}
                          id={param.id}
                          name={param.id}
                          value={values[key]}
                          margin="dense"
                          label={param.label}
                          type="text"
                          fullWidth
                          variant="standard"
                          required
                          error={errors && Object.keys(errors).includes(param.id)}
                          helperText={errors[key]}
                          onChange={handleChange}
                        />
                      )
                    })
                  }
                </Form>
              </DialogContent>
              <DialogActions>
                <Button onClick={onModalClose}>Отмена</Button>
                <Button onClick={() => handleSubmit()}>Готово</Button>
              </DialogActions>
            </Dialog>
          </Box>
        )
      }
    </Formik>
  );
}