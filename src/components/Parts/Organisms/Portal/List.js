import Card from '@mui/material/Card'
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
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import TrainIcon from '@mui/icons-material/Train'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

//style
import styled from 'styled-components'
const resultPaper = {
  backgroundColor: '#cce5ff',
  padding: '4px',
  margin: '1rem 0',
}
const resultCard = {
  fontSize: '28px',
  padding: '1rem',
}
const nameLink = {
  color: '#1470CC',
  hover: {
    borderBottom: '1px solid red',
  },
}
const priceSpan = {
  fontSize: '15px',
}
const thinSmall = {
  fontSize: 10,
  lineHeight: 1.5,
  fontWeight: 500,
  color: '#666666',
}
const StyledTableCell = styled(TableCell)`
  border-right: 1px solid #ddd !important;
  text-align: center;
  width: 30px !important;
  padding: 0;
`
const List = props => {
  const { data, rows } = props
  console.log(data)
  return (
    <Paper style={resultPaper}>
      <Card style={resultCard}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img src="/images/thumbnail.jpg" alt="" />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">カフェ・スイーツ｜赤羽</Typography>
            <p style={thinSmall}>
              赤羽 台湾 SNS タピオカ ミルク マキアート 茶 テイクアウト セット
              トッピング 電源
            </p>
            <Typography variant="h2">
              <a href="#" style={nameLink}>
                {data.restaurant_name}
              </a>
            </Typography>
            <Grid style={{ display: 'flex', gap: '10px' }}>
              <Grid style={{ display: 'flex', gap: '5px' }}>
                <LightModeIcon color="morning" />
                <span style={priceSpan}>{data.lunch.price}</span>
              </Grid>
              <Grid style={{ display: 'flex', gap: '5px' }}>
                <ModeNightIcon color="night" />
                <span style={priceSpan}>{data.dinner.price}</span>
              </Grid>
            </Grid>
            <Grid
              style={{
                display: 'flex',
                gap: '5px',
                marginTop: '.5rem',
              }}>
              <TrainIcon color="primary" />
              <span style={priceSpan}>横浜駅南口徒歩５分</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{
            display: 'flex',
            gap: '5px',
            margin: '1rem 0',
            alignItems: 'center',
          }}>
          <CalendarMonthIcon color="primary" fontSize="large" />
          <Typography variant="h5">ネット予約状況</Typography>
        </Grid>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, border: '1px solid #ddd' }}
            aria-label="simple table">
            <>
              <TableHead>
                <TableRow>
                  {rows.map((row, index) => {
                    if (row.dow === '土') {
                      return (
                        <StyledTableCell
                          key={index}
                          style={{
                            background: '#EBF6FA',
                            color: '#3BA3CD',
                          }}>
                          {row.dow}
                        </StyledTableCell>
                      )
                    } else if (row.dow === '日') {
                      return (
                        <StyledTableCell
                          key={index}
                          style={{
                            background: '#FCE8E7',
                            color: '#E41A12',
                          }}>
                          {row.dow}
                        </StyledTableCell>
                      )
                    } else {
                      return (
                        <StyledTableCell key={index}>{row.dow}</StyledTableCell>
                      )
                    }
                  })}
                </TableRow>
              </TableHead>
            </>
            <>
              <TableBody>
                <TableRow
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 0,
                    },
                  }}>
                  {rows.map(row => (
                    <StyledTableCell component="th" key={row.day}>
                      <Button variant="text" style={{ padding: 0 }}>
                        <Typography variant="h6" style={{ margin: '1rem 0' }}>
                          {row.day}
                          <br />
                          {row.status}
                        </Typography>
                        <br />
                      </Button>
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableBody>
            </>
          </Table>
        </TableContainer>
      </Card>
    </Paper>
  )
}
export default List
