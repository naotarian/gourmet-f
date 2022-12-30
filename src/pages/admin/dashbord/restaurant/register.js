import axios from '@/lib/axios'
import { useState } from 'react'
import PageTemplate from '@/components/Parts/Template/Admin/PageTemplate'
import RegistRestaurant from '@/components/Parts/Organisms/Admin/RegistRestaurant'
const register = props => {
  const datas = props.res
  const [open, setOpen] = useState(true)

  return (
    <>
      <PageTemplate open={open} setOpen={setOpen} title="店舗登録">
        <RegistRestaurant datas={datas} />
      </PageTemplate>
    </>
  )
}
export default register
export const getServerSideProps = async ctx => {
  const cookie = ctx.req?.headers.cookie
  const res = await axios.get('/api/admin/restaurant/register', {
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
