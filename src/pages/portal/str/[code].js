import axios from '@/lib/axios'
import Head from 'next/head'
import PageTemplate from '@/components/Parts/Template/Portal/PageTemplate'
//mui
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
//style
import styled from 'styled-components'
//icons
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import TrainIcon from '@mui/icons-material/Train'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
const ContentWraper = styled(Grid)`
  max-width: 950px;
  margin: 2rem auto 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }
`
const TopPaper = styled(Paper)`
  padding: 2rem;
  background: #ddd;
`
const ButtonWrapper = styled(Grid)`
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`
const ChipSpan = styled.span`
  float: left;
  width: 58px;
  margin-right: 10px;
  padding: 6px 0;
  border: 1px solid #979797;
  font-size: 10px;
  font-weight: normal;
  color: #4e4e4e;
  text-align: center;
  line-height: 1;
  box-sizing: border-box;
`
const priceSpan = {
  fontSize: '12px',
}
const reserveButton = {
  background: 'linear-gradient(45deg, #34B6EB 30%, #20A7DE 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(32, 167, 222, .3)',
}
const code = props => {
  const store = props.res.store
  console.log(store)
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
          <TopPaper elevation={0}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Grid
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                  }}>
                  <img
                    src="/images/thumbnail.jpg"
                    alt=""
                    style={{ maxWidth: '70px' }}
                  />
                  <Typography variant="h2">{store.restaurant_name}</Typography>
                </Grid>
                <Grid
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginTop: '20px',
                  }}>
                  <ChipSpan>予算</ChipSpan>
                  <Grid
                    style={{
                      display: 'flex',
                      gap: '3px',
                      alignItems: 'center',
                    }}>
                    <LightModeIcon color="morning" />
                    <span style={priceSpan}>{store.lunch.price}</span>
                  </Grid>
                  <Grid
                    style={{
                      display: 'flex',
                      gap: '3px',
                      alignItems: 'center',
                    }}>
                    <ModeNightIcon color="night" />
                    <span style={priceSpan}>{store.dinner.price}</span>
                  </Grid>
                </Grid>
                <Grid
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginTop: '10px',
                  }}>
                  <ChipSpan>ジャンル</ChipSpan>
                  <Typography variant="h6" style={priceSpan}>
                    {store.main_category.name} | {store.sub_category.name}
                  </Typography>
                </Grid>
                <Grid
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginTop: '10px',
                  }}>
                  <ChipSpan>所在地</ChipSpan>
                  <Typography variant="h6" style={priceSpan}>
                    {store.address}
                    {store.address_after}
                  </Typography>
                </Grid>
                <Grid
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginTop: '10px',
                  }}>
                  <ChipSpan>TEL</ChipSpan>
                  <Typography variant="h6" style={priceSpan}>
                    {store.restaurant_tel}
                  </Typography>
                </Grid>
              </Grid>
              <ButtonWrapper item xs={4}>
                <Button variant="contained" size="large" style={reserveButton}>
                  空席確認・予約する
                </Button>
                {/* <Button variant="contained">クーポンを見る</Button>
                <Button variant="contained">お食事券を見る</Button> */}
              </ButtonWrapper>
            </Grid>
          </TopPaper>
        </ContentWraper>
      </PageTemplate>
    </>
  )
}
export default code
export const getServerSideProps = async ctx => {
  const cookie = ctx.req?.headers.cookie
  const sendDatas = {
    code: ctx.params.code,
  }
  const res = await axios.post('/api/portal/store/detail', {
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
