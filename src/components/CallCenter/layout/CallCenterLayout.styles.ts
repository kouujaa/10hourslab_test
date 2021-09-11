import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
  },
  analyticsContainer: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
  },
  chartContainer: {
    overflowY: 'auto',
  },
}))

export default useStyles
