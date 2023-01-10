//mui
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
const Summarize = () => {
  return (
    <Grid container spacing={2} style={{ marginTop: '2rem' }}>
      <Grid item xs={12} md={8}>
        <Grid style={{ padding: '1rem', background: '#ddd' }}>
          <Typography variant="h5">お知らせ</Typography>
        </Grid>
        <Box
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
          }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="2023年1月1日
新年会パーフェクトガイドオープン！"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid style={{ padding: '1rem', background: '#ddd' }}>
          <Typography variant="h5">グルメ情報</Typography>
        </Grid>
        <Box
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
          }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="
新年会パーフェクトガイド"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid style={{ padding: '1rem', background: '#ddd' }}>
          <Typography variant="h5">お得情報</Typography>
        </Grid>
        <Box
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
          }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ポイントプラスで最大8倍" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="
女子会完全ガイド"
                  />
                  <Grid />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Grid>
    </Grid>
  )
}
export default Summarize
