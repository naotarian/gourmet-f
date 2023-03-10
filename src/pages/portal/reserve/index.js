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
  const time = props.res.reserve_session.time
  const numberOfPeople = props.res.reserve_session.number_of_people
  const store = props.res.reserve_session.store
  const date = props.res.reserve_session.date
  const dow = props.res.reserve_session.dow
  const confirmSession = props.res.confirm_session
  const router = useRouter()
  const [guestInformation, setGuestInformation] = useState(() => {
    if (confirmSession.length) {
      return {
        lastName: confirmSession.guest_info?.lastName,
        firstName: confirmSession.guest_info?.firstName,
        lastNameKana: confirmSession.guest_info?.lastNameKana,
        firstNameKana: confirmSession.guest_info?.firstNameKana,
        email: confirmSession.guest_info?.email,
        cellPhone: confirmSession.guest_info?.cellPhone,
        fixedPhone: confirmSession.guest_info?.fixedPhone,
        remarks: confirmSession.guest_info?.remarks,
      }
    } else {
      return {
        lastName: '',
        firstName: '',
        lastNameKana: '',
        firstNameKana: '',
        email: '',
        cellPhone: '',
        fixedPhone: '',
        remarks: '',
      }
    }
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
    let err = false
    setGuestInformationErrors({
      lastName: '',
      firstName: '',
      lastNameKana: '',
      firstNameKana: '',
      email: '',
      cellPhone: '',
      fixedPhone: '',
      remarks: '',
    })
    if (guestInformation.lastName.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        lastName: '入力は必須です。',
      }))
      err = true
    }
    if (guestInformation.firstName.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        firstName: '入力は必須です。',
      }))
      err = true
    }
    if (guestInformation.lastNameKana.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        lastNameKana: '入力は必須です。',
      }))
      err = true
    }
    const regex = /^[ァ-ヶー　]*$/
    if (!regex.test(guestInformation.lastNameKana)) {
      setGuestInformationErrors(prev => ({
        ...prev,
        lastNameKana: '全角カタカナで入力してください。',
      }))
      err = true
    }
    if (guestInformation.firstNameKana.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        firstNameKana: '入力は必須です。',
      }))
      err = true
    }
    if (!regex.test(guestInformation.firstNameKana)) {
      setGuestInformationErrors(prev => ({
        ...prev,
        firstNameKana: '全角カタカナで入力してください。',
      }))
      err = true
    }

    if (guestInformation.email.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        email: '入力は必須です。',
      }))
      err = true
    }
    var emailRegex =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
    if (!emailRegex.test(guestInformation.email)) {
      setGuestInformationErrors(prev => ({
        ...prev,
        email: 'メールアドレスを正しい形式で入力してください。',
      }))
      err = true
    }
    if (guestInformation.cellPhone.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        cellPhone: '入力は必須です。',
      }))
      err = true
    }
    const regexp1 = /^(050|070|080|090)\d{4}\d{4}$/
    const regexp2 = /^(050|070|080|090)-\d{4}-\d{4}$/
    if (
      !regexp1.test(guestInformation.cellPhone) &&
      !regexp2.test(guestInformation.cellPhone)
    ) {
      setGuestInformationErrors(prev => ({
        ...prev,
        cellPhone: '電話番号を正しい形式で入力してください。',
      }))
      err = true
    }
    if (err) return
    const sendDatas = {
      guestInformation: guestInformation,
      storeId: store.id,
      date: date,
      dow: dow,
      numberOfPeople: numberOfPeople,
      time: time,
    }
    const res = await axios.post('/api/reserve/confirm', sendDatas)
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
