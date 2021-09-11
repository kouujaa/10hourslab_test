import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'
// import SortTypeSelect from '../../components/SortTypeSelect/SortTypeSelect'
import { ACCOUNT,SESSIONS,TRANSACTION } from '../../constants'

interface Props {
  menuOptions: any
  onFilterChange: any
  filter: any
  pageTab: any
  setPageTab: any
}

const ChartBar: React.FC<Props> = ({
  // menuOptions,
  // onFilterChange,
  // filter,
  pageTab,
  setPageTab,
}) => {

  return (
    <>
      <Grid container direction="row" alignItems="center">
        <Grid
          item
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginRight: 'auto' }}>
            <ButtonGroup>
              <Button
                style={{ height: '40px', width: '125px' }}
                variant={pageTab ===  ACCOUNT ? 'contained' : 'text'}
                color="primary"
                onClick={() => setPageTab(ACCOUNT)}
              >
                Accounts
              </Button>
              <Button
                style={{ height: '40px', width: '125px' }}
                variant={pageTab ===  TRANSACTION ? 'contained' : 'text'}
                color="primary"
                onClick={() => setPageTab(TRANSACTION)}
              >
                Transactions
              </Button>
              <Button
                style={{ height: '40px', width: '125px' }}
                variant={pageTab ===  SESSIONS ? 'contained' : 'text'}
                color="primary"
                onClick={() => setPageTab(SESSIONS)}
              >
                Sessions
              </Button>
            </ButtonGroup>
          </div>

          {/* <div style={{ display: 'flex' }}>
            <SortTypeSelect
              options={menuOptions}
              onChange={onFilterChange}
              value={filter}
            />
          </div> */}
        </Grid>
      </Grid>
    </>
  )
}

export default ChartBar
