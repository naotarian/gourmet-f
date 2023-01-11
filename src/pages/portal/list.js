import axios from '@/lib/axios'
import Head from 'next/head'
import PageTemplate from '@/components/Parts/Template/Portal/PageTemplate'
//mui
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
//icons
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import TrainIcon from '@mui/icons-material/Train'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

//style
import styled from 'styled-components'
const ContentWraper = styled(Grid)`
  max-width: 950px;
  margin: 2rem auto 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }
`
const StyledPaper = styled(Paper)`
  padding: 1rem;
  margin-bottom: 1rem;
`
const pointStyle = {
  fontSize: '28px',
  color: '#E73820',
  padding: '2px',
}
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
const list = props => {
  const restaurants = props.res
  const rows = [
    { day: '1/11', status: '〇', dow: '水' },
    { day: '1/12', status: '◎', dow: '木' },
    { day: '1/13', status: '◎', dow: '金' },
    { day: '1/14', status: '◎', dow: '土' },
    { day: '1/15', status: '◎', dow: '日' },
    { day: '1/16', status: '◎', dow: '月' },
    { day: '1/17', status: '◎', dow: '火' },
    { day: '1/19', status: '◎', dow: '水' },
    { day: '1/20', status: '◎', dow: '木' },
    { day: '1/21', status: '◎', dow: '金' },
    { day: '1/22', status: '◎', dow: '土' },
    { day: '1/23', status: '◎', dow: '日' },
  ]
  return (
    <>
      <Head>
        <title />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <PageTemplate>
        <ContentWraper>
          <Grid container spacing={2}>
            <Grid
              item
              xs={2}
              style={{ padding: '2px 5px', background: '#ddd' }}>
              <StyledPaper>111</StyledPaper>
              <StyledPaper>111</StyledPaper>
              <StyledPaper>111</StyledPaper>
              <StyledPaper>111</StyledPaper>
            </Grid>
            <Grid item xs={10}>
              <Typography
                variant="h2"
                style={{
                  borderBottom: '1px dotted #CCCCCC',
                  paddingBottom: '5px',
                }}>
                東京 | ディナー～500円のグルメ・クーポン情報
              </Typography>
              <Typography
                variant="h5"
                style={{
                  marginTop: '1rem',
                }}>
                検索結果<span style={pointStyle}>24</span>件 1～20件を表示
              </Typography>
              {restaurants.map((data, index) => (
                <Paper style={resultPaper} key={index}>
                  <Card style={resultCard}>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <img src="/images/thumbnail.jpg" alt="" />
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h6">
                          カフェ・スイーツ｜赤羽
                        </Typography>
                        <p style={thinSmall}>
                          赤羽 台湾 SNS タピオカ ミルク マキアート 茶
                          テイクアウト セット トッピング 電源
                        </p>
                        <Typography variant="h2">
                          <a href="#" style={nameLink}>
                            {data.restaurant_name}
                          </a>
                        </Typography>
                        <Grid style={{ display: 'flex', gap: '10px' }}>
                          <Grid style={{ display: 'flex', gap: '5px' }}>
                            <LightModeIcon color="morning" />
                            <span style={priceSpan}>~ 500円</span>
                          </Grid>
                          <Grid style={{ display: 'flex', gap: '5px' }}>
                            <ModeNightIcon color="night" />
                            <span style={priceSpan}>~ 500円</span>
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
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                                    <StyledTableCell key={index}>
                                      {row.dow}
                                    </StyledTableCell>
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
                                    <Typography
                                      variant="h6"
                                      style={{ margin: '1rem 0' }}>
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
              ))}
            </Grid>
          </Grid>
        </ContentWraper>
      </PageTemplate>
    </>
  )
}
export default list

export const getServerSideProps = async ctx => {
  const cookie = ctx.req?.headers.cookie
  const sendDatas = {
    PF: ctx.query.PF,
    MC: ctx.query.MC,
    PR: ctx.query.PR,
  }
  const res = await axios.post('/api/portal/list', {
    headers: {
      origin: process.env.ORIGIN,
      cookie: cookie,
    },
    datas: sendDatas,
  })
  return {
    props: {
      res: res.data,
    },
  }
}
