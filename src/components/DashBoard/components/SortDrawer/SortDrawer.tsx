import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { Search, Clear } from '@material-ui/icons'
import Checkbox from '@material-ui/core/Checkbox'

import useStyles from './SortDrawer.styles'


interface Props {
  toggleDrawer: any
  setToggleDrawer: any
  admin: any
  setAdmin: any
  admins: any
}

const SortDrawer: React.FC<Props> = ({
  toggleDrawer,
  setToggleDrawer,
  admin,
  setAdmin,
  admins,
}) => {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = useState<any[]>([])

  const filterAdmins = (admins, searchTerm) => {
    if (admins) {
      var re = new RegExp('(' + searchTerm.join('|') + ')', 'g')
      var results: any = []
      for (var i = 0; i < admins.length; i++) {
        const text = admins[i]
        var result = text.name.toLowerCase().match(re)
        if (result != null || result != null) {
          results.push(text)
        }
      }
      return results
    }
  }

  const searchedAdmins: any[] = filterAdmins(admins, searchTerm)

  const handleChange = (param) => {
    setAdmin(param)
    setToggleDrawer(!toggleDrawer)
  }

  return (
    <>
      <Drawer
        anchor="right"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(!toggleDrawer)}
        classes={{ paper: classes.paper }}
        ModalProps={{ hideBackdrop: false }}
      >
        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.header}>
            <span>
              <Typography variant="h6" color="primary">
                Filters
              </Typography>
            </span>
            <div>
              <Button variant="contained" color="primary" size="small">
                Save
              </Button>
              <Button
                variant="text"
                color="primary"
                size="small"
                onClick={() => setToggleDrawer(!toggleDrawer)}
              >
                Close
              </Button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <TextField
                placeholder="Search here..."
                autoComplete="off"
                variant="outlined"
                className={classes.searchbox}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm((pre) => [e.target.value])
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search color="primary" />
                    </InputAdornment>
                  ),
                  endAdornment: searchTerm ? (
                    <InputAdornment position="end">
                      <IconButton
                        style={{ width: 50, margin: 0 }}
                        onClick={() => setSearchTerm((prev) => [])}
                        edge="end"
                      >
                        <Clear />
                      </IconButton>
                    </InputAdornment>
                  ) : null,
                }}
              />
            </div>
          </Grid>
          {admins && (
            <Box style={{ maxHeight: '82vh', overflow: 'auto' }}>
              {searchedAdmins.map((a) => {
                return (
                  <Grid
                    item
                    xs={12}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                    key={a.id}
                  >
                    <Checkbox
                      checked={admin.id === a.id}
                      onChange={() => handleChange(a)}
                      color="primary"
                      size="small"
                    />
                    <Typography variant="body2">{a.name}</Typography>
                  </Grid>
                )
              })}
            </Box>
          )}
        </Grid>
      </Drawer>
    </>
  )
}

export default SortDrawer
