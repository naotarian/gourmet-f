//mui
import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import TableRestaurantIcon from '@mui/icons-material/TableRestaurant'
const SeatList = props => {
  const { seats, selectedIndex, handleListItemClick, selectClear } = props
  return (
    <Paper>
      {seats.length === 0 ? (
        <Typography variant="h5">設定済みの座席はありません。</Typography>
      ) : (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <List component="nav" aria-label="main mailbox folders">
            {seats.map((seat, index) => (
              <Grid key={index}>
                <ListItemButton
                  selected={selectedIndex === index}
                  onClick={event => handleListItemClick(event, index, seat)}>
                  <ListItemIcon>
                    <TableRestaurantIcon />
                  </ListItemIcon>
                  <ListItemText primary={seat.name} />
                </ListItemButton>
                <Divider />
              </Grid>
            ))}
          </List>
          <Grid style={{ padding: '1rem', textAlign: 'right' }}>
            <Button variant="outlined" onClick={selectClear}>
              選択をクリア
            </Button>
          </Grid>
        </Box>
      )}
    </Paper>
  )
}
export default SeatList
