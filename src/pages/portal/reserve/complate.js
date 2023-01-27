import Head from 'next/head'
import { useRouter } from 'next/router'
import PageTemplate from '@/components/Parts/Template/Portal/PageTemplate'
//mui
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
//style
import styled from 'styled-components'
const ContentWraper = styled(Grid)`
  max-width: 950px;
  margin: 2rem auto 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }
`
const complate = () => {
  const router = useRouter()
  const top = () => {
    router.push('/')
  }
  return (
    <>
      <Head>
        <title>ご予約ありがとうございます。</title>
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
          <p>ご予約が完了しました。</p>
          <Button variant="contained" onClick={top}>
            TOPへ戻る
          </Button>
        </ContentWraper>
      </PageTemplate>
    </>
  )
}
export default complate
