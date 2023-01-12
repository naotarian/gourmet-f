import axios from '@/lib/axios'
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import FirstView from '@/components/Parts/Organisms/Portal/FirstView'
import QuickSearch from '@/components/Parts/Organisms/Portal/QuickSearch'
import SpFirstView from '@/components/Parts/Organisms/Portal/SpFirstView'
import PageTemplate from '@/components/Parts/Template/Portal/PageTemplate'
import Summarize from '@/components/Parts/Organisms/Portal/Summarize'
import { BrowserView, MobileView } from 'react-device-detect'
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

export default function Home(props) {
  const areas = props.res.areas
  const prefectures = props.res.prefectures
  const mainCategories = props.res.main_categories
  const budgets = props.res.budgets
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
              <ContentWraper>
                <QuickSearch
                  prefectures={prefectures}
                  mainCategories={mainCategories}
                  budgets={budgets}
                />
              </ContentWraper>
            </BrowserView>
            <MobileView>
              <SpFirstView
                areas={areas}
                prefectures={prefectures}
                mainCategories={mainCategories}
                budgets={budgets}
              />
            </MobileView>
            <ContentWraper>
              <Typography
                variant="h5"
                style={{
                  margin: '2rem 0',
                }}>
                全国のグルメ情報、レストラン・居酒屋のネット予約・クーポン検索
                なら｜HOT PEPPER Gourmet
              </Typography>
              <Typography variant="h6">
                オトクなクーポンやグルメ情報満載のホットペッパー
                グルメ　エリア・最寄駅や食べたい料理で楽しく飲食店探しができます。宴会コースの検索もＯＫ！
                ［おことわり］一部の飲食店情報は、Alikeなどが提供する情報を元に作成されています。掲載されている情報は、Alike会員が任意に登録したものです。掲載内容は保証されませんので、お出かけ前に電話などで必ずご確認ください。
              </Typography>
              <Summarize />
            </ContentWraper>
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
