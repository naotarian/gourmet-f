import axios from '@/lib/axios'
import Head from 'next/head'
import PageTemplate from '@/components/Parts/Template/Portal/PageTemplate'
//mui
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

//style
import styled from 'styled-components'
const ContentWraper = styled(Grid)`
  max-width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }
`
const list = props => {
  const restaurants = props.res
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
          {console.log(restaurants)}
          {restaurants.map((data, index) => (
            <p key={index}>{data.restaurant_name}</p>
          ))}
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
