import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Paper } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { store } from '../../redux/reduxStore';
import { getUsers } from '../../redux/thunks/users';
import { usersListStyles } from './usersListStyles';
import { DeleteModal } from '../modals/DeleteModal';
import { EditModal } from '../modals/EditModal';

export const UsersList = () => {
  const classes = usersListStyles();

  const users = useSelector(() => store.getState().users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  return (
    <div className={classes['users-list']}>
      {
        users.map(user => (
          <Paper elevation={3} key={user.id}>
            <Box className={classes['users-list__container']}>
              <AccountCircleIcon fontSize='large' />
              <Box className={classes['users-list__info']}>
                <p>{user.name}</p>
                <p>{user.address.zipcode} {user.address.city} {user.address.street} {user.address.suite}</p>
                <p>{user.phone}</p>
                <p>{user.email}</p>
              </Box>
              <EditModal user={user}/>
              <DeleteModal user={user}/>
            </Box>
          </Paper>
        ))
      }
    </div>
  );
}