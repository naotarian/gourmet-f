import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import FirstView from '@/components/Parts/Organisms/Portal/FirstView'
import PageTemplate from '@/components/Parts/Template/Portal/PageTemplate'

export default function Home() {
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
        <FirstView />
        <Link href="/result/result_list">
          <a>一覧</a>
        </Link>
      </PageTemplate>
    </>
  )
}
