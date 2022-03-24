import { makeStyles } from '@material-ui/core/styles';

export const usersListStyles = makeStyles({
  usersList: {
    width: '45%'
  },
  listItemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 48px',
    marginBottom: '12px'
  },
  userInfo: {
    display: 'flex',
    flexGrow: 1,
    textAlign: 'center',
    flexDirection: 'column',
    '& p': {
      margin: '2px'
    }
  }
});