import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: 'white',
    zIndex: 1,
    marginTop: 0,
  },
  button: {
    width: 170,
    padding: '8px 14px',
    lineHeight: 2.4,
  },
  btnLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 13,
  },
  list: {
    width: 170,
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13,
    fontWeight: 500,
    color: '#645BE8',
  },
}))

export default useStyles
