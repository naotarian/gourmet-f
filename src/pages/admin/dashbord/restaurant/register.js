import axios from '@/lib/axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import AdminMenu from '@/components/Parts/Template/Admin/AdminMenu'
import WrapperGrid from '@/components/Parts/Atoms/Admin/WrapperGrid'
import ContentsGrid from '@/components/Parts/Atoms/Admin/ContentsGrid'
import TitleGrid from '@/components/Parts/Atoms/Admin/TitleGrid'
import RegistRestaurant from '@/components/Parts/Organisms/Admin/RegistRestaurant'
const register = props => {
  const datas = props.res
  const router = useRouter()

  const [open, setOpen] = useState(true)

  return (
    <>
      <AdminMenu open={open} setOpen={setOpen} />
      <WrapperGrid open={open}>
        <TitleGrid title="店舗登録" />
        <ContentsGrid>
          <RegistRestaurant datas={datas} />
        </ContentsGrid>
      </WrapperGrid>
    </>
  )
}
export default register
export const getServerSideProps = async context => {
  const res = await axios.get('/api/admin/restaurant/register')
  return {
    props: {
      res: res.data,
    },
  }
}
