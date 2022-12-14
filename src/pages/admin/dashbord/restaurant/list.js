import axios from '@/lib/axios'
import { useState } from 'react'
import AdminMenu from '@/components/Parts/Template/Admin/AdminMenu'
import WrapperGrid from '@/components/Parts/Atoms/Admin/WrapperGrid'
import ContentsGrid from '@/components/Parts/Atoms/Admin/ContentsGrid'
import TitleGrid from '@/components/Parts/Atoms/Admin/TitleGrid'
const list = props => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <AdminMenu open={open} setOpen={setOpen} />
      <WrapperGrid open={open}>
        <TitleGrid title="店舗一覧" />
        <ContentsGrid>aaaa</ContentsGrid>
      </WrapperGrid>
    </>
  )
}
export default list
