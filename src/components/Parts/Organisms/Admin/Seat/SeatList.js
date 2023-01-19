//mui
import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
const SeatList = props => {
  const { seats, selectedIndex, handleListItemClick } = props

  return (
    <Paper>
      {seats.length === 0 ? (
        <Typography variant="h5">設定済みの座席はありません。</Typography>
      ) : (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={event => handleListItemClick(event, 0)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={event => handleListItemClick(event, 1)}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </List>
        </Box>
      )}
    </Paper>
  )
}
export default SeatList
