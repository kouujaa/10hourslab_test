import React from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import useStyles from './SortTypeSelect.style'

interface Props {
  value: any
  onChange: any
  options: any
}

const SortTypeSelect: React.FC<Props> = ({ value, onChange, options }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    // @ts-ignore ts-migrate(2531) FIXME: Object is possibly 'null'.
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const onSelect = (item) => {
    setOpen(false)
    onChange(item.value)
  }

  const selectedOption = options.find((i) => i.value === value)

  return (
    <>
      <Button
        disableElevation
        classes={{
          root: classes.button,
          label: classes.btnLabel,
        }}
        color="primary"
        size="large"
        ref={anchorRef}
        onClick={handleToggle}
      >
        <CalendarTodayIcon />
        <span>{selectedOption.label}</span>
        <ArrowDropDownIcon />
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} transition>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper classes={{ root: classes.paper }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList classes={{ root: classes.list }}>
                  {options
                    .filter((i) => i !== selectedOption)
                    .map((i) => (
                      <MenuItem
                        classes={{ root: classes.menuItem }}
                        onClick={() => onSelect(i)}
                        key={i.value}
                      >
                        <span>{i.label}</span>
                      </MenuItem>
                    ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default SortTypeSelect
