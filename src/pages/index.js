import axios from '@/lib/axios'
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import FirstView from '@/components/Parts/Organisms/Portal/FirstView'
import SpFirstView from '@/components/Parts/Organisms/Portal/SpFirstView'
import PageTemplate from '@/components/Parts/Template/Portal/PageTemplate'
import { BrowserView, MobileView } from 'react-device-detect'

export default function Home(props) {
  const areas = props.res.areas
  const prefectures = props.res.prefectures
  return (
    <>
      <Head>
        <title>Laravel</title>
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
        {areas && prefectures && (
          <>
            <BrowserView>
              <FirstView areas={areas} prefectures={prefectures} />
            </BrowserView>
            <MobileView>
              <SpFirstView areas={areas} prefectures={prefectures} />
            </MobileView>
          </>
        )}
      </PageTemplate>
    </>
  )
}

export const getServerSideProps = async ctx => {
  const cookie = ctx.req?.headers.cookie
  const res = await axios.get('/api/portal/top', {
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
