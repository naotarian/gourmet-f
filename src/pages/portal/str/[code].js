import axios from '@/lib/axios'
import Head from 'next/head'
import PageTemplate from '@/components/Parts/Template/Portal/PageTemplate'
import DetailTopHeader from '@/components/Parts/Organisms/Portal/DetailTopHeader'
import DetailTabContents from '@/components/Parts/Organisms/Portal/DetailTabContents'
//mui
import Grid from '@mui/material/Grid'
//style
import styled from 'styled-components'
const ContentWraper = styled(Grid)`
  max-width: 950px;
  margin: 2rem auto 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }
`
const code = props => {
  const store = props.res.store
  const images = props.res.images
  return (
    <>
      <Head>
        <title>{store.restaurant_name} | ネット予約可</title>
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
          <DetailTopHeader store={store} />
          <DetailTabContents images={images} store={store} />
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
