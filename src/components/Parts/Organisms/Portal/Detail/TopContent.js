import { useState } from 'react'
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
//Organisms
import ReserveCheckModal from '@/components/Parts/Organisms/Portal/Detail/ReserveCheckModal'
//style
import styled from 'styled-components'
const StyledTableCell = styled(TableCell)`
  border-right: 1px solid #ddd !important;
  text-align: center;
  width: 20px !important;
  padding: 0;
`
const dow = ['月', '火', '水', '木', '金', '土', '日']
const TopContent = props => {
  const {
    images,
    store,
    reserve_calendar,
    reserve_calendarNext,
    currentMonth,
    nextMonth,
  } = props
  const [openReserveCheckModal, setOpenReserveCheckModal] = useState(false)
  const [dataReserveCheckModal, setDataReserveCheckModal] = useState(null)
  const [numberOfPeople, setNumberOfPeople] = useState(0)
  const [time, setTime] = useState(0)
  const selectCalender = data => {
    setDataReserveCheckModal(data)
    setOpenReserveCheckModal(true)
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
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
        <Grid item xs={12} md={12} lg={6}>
          <Grid style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <CalendarMonthIcon color="primary" fontSize="large" />
            <Typography variant="h2">ネット予約状況</Typography>
          </Grid>
          <Grid style={{ width: '100%', textAlign: 'right' }}>
            <Typography variant="h6">{currentMonth}</Typography>
          </Grid>
          <TableContainer component={Paper} style={{ marginBottom: '1rem' }}>
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
                            style={{ padding: 0, minWidth: '50px' }}
                            onClick={() => selectCalender(d)}
                            disabled={d.status === '×'}>
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
          <Grid style={{ width: '100%', textAlign: 'right' }}>
            <Typography variant="h6">{nextMonth}</Typography>
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
                  {reserve_calendarNext.map((row, index) => (
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
                            style={{ padding: 0, minWidth: '50px' }}
                            onClick={() => selectCalender(d)}
                            disabled={d.status === '×'}>
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
          <ReserveCheckModal
            dataReserveCheckModal={dataReserveCheckModal}
            openReserveCheckModal={openReserveCheckModal}
            setOpenReserveCheckModal={setOpenReserveCheckModal}
            store={store}
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
            time={time}
            setTime={setTime}
          />
        </Grid>
      </Grid>
    </>
  )
}
export default TopContent
