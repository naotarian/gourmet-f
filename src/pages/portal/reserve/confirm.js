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
import ReserveInformationConfirm from '@/components/Parts/Organisms/Portal/Reserve/Confirm/ReserveInformationConfirm'
const ContentWraper = styled(Grid)`
  max-width: 950px;
  margin: 2rem auto 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }
`
const confirm = props => {
  const storeInfo = props.res.store_info
  const guestInfo = props.res.guest_info
  const reserveInfo = props.res.reserve_info
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
          <ReserveInformationConfirm
            storeInfo={storeInfo}
            guestInfo={guestInfo}
            reserveInfo={reserveInfo}
          />
        </ContentWraper>
      </PageTemplate>
    </>
  )
}
export default confirm
export const getServerSideProps = async ctx => {
  const cookie = ctx.req?.headers.cookie
  const res = await axios.get('/api/reserve/confirm_session_fetch', {
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
