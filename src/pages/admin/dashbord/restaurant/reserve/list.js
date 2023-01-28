import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PageTemplate from '@/components/Parts/Template/Admin/PageTemplate'
import ListTable from '@/components/Parts/Organisms/Admin/Reserve/ListTable'
import axios from '@/lib/axios'
//mui
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
const list = props => {
  const [open, setOpen] = useState(true)
  const [reserveDatas, setReserveDatas] = useState(
    props.res.reserve_datas.sort((a, b) =>
      a.reserve_date < b.reserve_date ? -1 : 1,
    ),
  )
  return (
    <>
      <PageTemplate open={open} setOpen={setOpen} title="予約一覧">
        {reserveDatas && <ListTable reserveDatas={reserveDatas} />}
      </PageTemplate>
    </>
  )
}
export default list
export const getServerSideProps = async ctx => {
  const cookie = ctx.req?.headers.cookie
  const res = await axios
    .get('/api/admin/reserve/list', {
      headers: {
        origin: process.env.ORIGIN,
        cookie: cookie,
      },
    })
    .catch(error => {
      ctx.res.writeHead(302, { Location: '/admin/login' })
      ctx.res.end()
    })
  return {
    props: {
      res: res.data,
    },
  }
}
