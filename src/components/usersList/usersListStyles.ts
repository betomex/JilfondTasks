import { makeStyles } from '@material-ui/core/styles';

export const usersListStyles = makeStyles({
  'users-list': {
    width: '45%'
  },
  'users-list__container': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 48px',
    marginBottom: '12px'
  },
  'users-list__info': {
    display: 'flex',
    flexGrow: 1,
    textAlign: 'center',
    flexDirection: 'column',
    '& p': {
      margin: '2px'
    }
  }
});