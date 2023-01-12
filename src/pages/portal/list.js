import axios from '@/lib/axios'
import Head from 'next/head'
import PageTemplate from '@/components/Parts/Template/Portal/PageTemplate'
//mui
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
//Organisms
import List from '@/components/Parts/Organisms/Portal/List'
import { BrowserView, MobileView } from 'react-device-detect'

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

const list = props => {
  const restaurants = props.res.restaurants
  const searchNumber = props.res.search_number
  const searchModules = props.res.search_modules
  const query = props.res.query
  console.log(searchModules)
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
              xs={12}
              md={2}
              style={{ padding: '2px 5px', background: '#ddd' }}>
              <BrowserView>
                <StyledPaper>111</StyledPaper>
                <StyledPaper>111</StyledPaper>
                <StyledPaper>111</StyledPaper>
                <StyledPaper>111</StyledPaper>
              </BrowserView>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography
                variant="h2"
                style={{
                  borderBottom: '1px dotted #CCCCCC',
                  paddingBottom: '5px',
                }}>
                {query.PF_name} | {query.PR_price}
                のグルメ・クーポン情報
              </Typography>
              <Typography
                variant="h5"
                style={{
                  marginTop: '1rem',
                }}>
                検索結果<span style={pointStyle}>{searchNumber}</span>件
                1～20件を表示
              </Typography>
              {restaurants.map((data, index) => (
                <List data={data} key={index} rows={rows} />
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
