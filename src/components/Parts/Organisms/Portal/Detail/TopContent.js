import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
//mui
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
//icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
//style
import styled from 'styled-components'
const StyledTableCell = styled(TableCell)`
  border-right: 1px solid #ddd !important;
  text-align: center;
  width: 20px !important;
  padding: 0;
`
const dow = ['月', '火', '水', '木', '金', '土', '日']
const rows = [
  [
    { day: '1/16', status: '◎', dow: '月' },
    { day: '1/17', status: '◎', dow: '火' },
    { day: '1/18', status: '◎', dow: '水' },
    { day: '1/19', status: '◎', dow: '木' },
    { day: '1/20', status: '◎', dow: '金' },
    { day: '1/21', status: '◎', dow: '土' },
    { day: '1/22', status: '◎', dow: '日' },
  ],
  [
    { day: '1/23', status: '◎', dow: '月' },
    { day: '1/24', status: '◎', dow: '火' },
    { day: '1/25', status: '◎', dow: '水' },
    { day: '1/26', status: '◎', dow: '木' },
    { day: '1/27', status: '◎', dow: '金' },
    { day: '1/28', status: '◎', dow: '土' },
    { day: '1/29', status: '◎', dow: '日' },
  ],
  [
    { day: '1/30', status: '◎', dow: '月' },
    { day: '1/31', status: '◎', dow: '火' },
    { day: '', status: '', dow: '' },
    { day: '', status: '', dow: '' },
    { day: '', status: '', dow: '' },
    { day: '', status: '', dow: '' },
    { day: '', status: '', dow: '' },
  ],
]
const TopContent = props => {
  const { images, store, reserve_calendar } = props
  console.log(reserve_calendar)
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {images.length > 0 ? (
            <Grid>
              <ImageGallery showNav={false} items={images} />
            </Grid>
          ) : (
            <Grid style={{ border: '1px solid #ddd' }}>
              <img src="/images/noimage.png" alt="" />
            </Grid>
          )}
        </Grid>
        <Grid item xs={6}>
          <Grid style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <CalendarMonthIcon color="primary" fontSize="large" />
            <Typography variant="h5">ネット予約状況</Typography>
          </Grid>
          <TableContainer component={Paper}>
            <Table sx={{ border: '1px solid #ddd' }} aria-label="simple table">
              <>
                <TableHead>
                  <TableRow>
                    {dow.map((w, index) => {
                      if (w === '土') {
                        return (
                          <StyledTableCell
                            key={index}
                            style={{
                              background: '#EBF6FA',
                              color: '#3BA3CD',
                            }}>
                            {w}
                          </StyledTableCell>
                        )
                      } else if (w === '日') {
                        return (
                          <StyledTableCell
                            key={index}
                            style={{
                              background: '#FCE8E7',
                              color: '#E41A12',
                            }}>
                            {w}
                          </StyledTableCell>
                        )
                      } else {
                        return (
                          <StyledTableCell key={index}>{w}</StyledTableCell>
                        )
                      }
                    })}
                  </TableRow>
                </TableHead>
              </>
              <>
                <TableBody>
                  {reserve_calendar.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        '&:last-child td, &:last-child th': {
                          border: 0,
                        },
                      }}>
                      {row.map((d, w) => (
                        <StyledTableCell component="th" key={w}>
                          <Button
                            variant="text"
                            style={{ padding: 0, minWidth: '50px' }}>
                            <Typography
                              variant="h6"
                              style={{ margin: '1rem 0' }}>
                              {d.date}
                              <br />
                              {d.status}
                            </Typography>
                            <br />
                          </Button>
                        </StyledTableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  )
}
export default TopContent
