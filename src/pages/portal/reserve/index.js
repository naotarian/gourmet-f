import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'
import Head from 'next/head'
import PageTemplate from '@/components/Parts/Template/Portal/PageTemplate'
//mui
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
//style
import styled from 'styled-components'
//Organisms
import GuestInformationForm from '@/components/Parts/Organisms/Portal/Reserve/GuestInformationForm'
import ReserveInformationForm from '@/components/Parts/Organisms/Portal/Reserve/ReserveInformationForm'
const ContentWraper = styled(Grid)`
  max-width: 950px;
  margin: 2rem auto 10rem auto;
  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }
`
const index = props => {
  const time = props.res.time
  const numberOfPeople = props.res.number_of_people
  const store = props.res.store
  const date = props.res.date
  const dow = props.res.dow
  const router = useRouter()
  const [guestInformation, setGuestInformation] = useState({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    email: '',
    cellPhone: '',
    fixedPhone: '',
    remarks: '',
  })
  const [guestInformationErrors, setGuestInformationErrors] = useState({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    email: '',
    cellPhone: '',
    fixedPhone: '',
    remarks: '',
  })
  const submit = async () => {
    const sendDatas = {
      guestInformation: guestInformation,
      storeId: store.id,
      date: date,
      dow: dow,
      numberOfPeople: numberOfPeople,
      time: time,
    }
    const res = await axios.post('/api/reserve/confirm', sendDatas)
    console.log(res)
    router.push('/portal/reserve/confirm')
  }
  const back = () => {
    router.back()
  }
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
          <ReserveInformationForm
            numberOfPeople={numberOfPeople}
            time={time}
            store={store}
            date={date}
            dow={dow}
          />
          <GuestInformationForm
            guestInformation={guestInformation}
            setGuestInformation={setGuestInformation}
            guestInformationErrors={guestInformationErrors}
            setGuestInformationErrors={setGuestInformationErrors}
          />
          <Grid
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              position: 'relative',
            }}>
            <Button
              variant="contained"
              size="large"
              style={{ width: '300px' }}
              onClick={submit}>
              予約
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                position: 'absolute',
                right: 0,
                bottom: { xs: '-100px', md: 0, lg: 0 },
              }}
              onClick={back}>
              内容を修正する
            </Button>
          </Grid>
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
    },
  })
  return {
    props: {
      res: res.data,
    },
  }
}
