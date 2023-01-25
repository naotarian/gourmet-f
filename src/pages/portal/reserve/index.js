import axios from '@/lib/axios'
import Head from 'next/head'
import PageTemplate from '@/components/Parts/Template/Portal/PageTemplate'
//mui
import Grid from '@mui/material/Grid'
//style
import styled from 'styled-components'
//Organisms
import GuestInformationForm from '@/components/Parts/Organisms/Portal/Reserve/GuestInformationForm'
import ReserveInformationForm from '@/components/Parts/Organisms/Portal/Reserve/ReserveInformationForm'
const ContentWraper = styled(Grid)`
  max-width: 950px;
  margin: 2rem auto 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }
`
const index = (props) => {
  const time = props.res.time
  const numberOfPeople = props.res.number_of_people
  return (
    <>
      <Head>
        <title>店名| ネット予約</title>
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
          <ReserveInformationForm numberOfPeople={numberOfPeople} time={time} />
          <GuestInformationForm />
        </ContentWraper>
      </PageTemplate>
    </>
  )
}
export default index
export const getServerSideProps = async ctx => {
  const cookie = ctx.req?.headers.cookie
  const res = await axios.get('/api/reserve/reserve_session_fetch', {
    headers: {
      origin: process.env.ORIGIN,
      cookie: cookie,
    }
  })
  return {
    props: {
      res: res.data,
    },
  }
}