import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#eeeeee',
    overflow: 'hidden',
    width: '235px',
  },
  container: {
    padding: '10px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  searchbox: {
    flex: 1,
    display: 'flex',
    padding: 0,
    '& input': {
      flex: 1,
      padding: '10px',
    },
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: 0,
    },
  },
}))

export default useStyles
