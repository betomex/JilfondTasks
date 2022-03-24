import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Dialog, DialogActions, DialogTitle, IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserType } from '../../types/users';
import { deleteUserById } from '../../redux/slices/users';

type PropsType = {
  user: UserType
}

export const DeleteModal: React.FC<PropsType> = ({user}) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const dispatch = useDispatch();

  const onModalOpen = () => {
    setIsModalOpened(true);
  };

  const onModalClose = () => {
    setIsModalOpened(false);
  };

  const onModalAgree = () => {
    dispatch(deleteUserById(user.id));
    setIsModalOpened(false);
  }

  return (
    <Box>
      <IconButton onClick={onModalOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={isModalOpened}
        onClose={onModalClose}
      >
        <DialogTitle>
          {"Вы уверены, что хотите удалить пользователя?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={onModalClose}>Отмена</Button>
          <Button onClick={onModalAgree} autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}