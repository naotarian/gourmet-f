import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AdminMenu from '@/components/Parts/Template/Admin/AdminMenu'
import WrapperGrid from '@/components/Parts/Atoms/Admin/WrapperGrid'
const index = () => {
  const router = useRouter()

  const [open, setOpen] = useState(true)
  // useEffect(() => {
  //   ;(async () => {
  //     try {
  //       const res = await axios.get('/api/admin/user')
  //     } catch (error) {
  //       router.push('/admin/login')
  //     }
  //   })()
  // }, [])
  return (
    <>
      <AdminMenu open={open} setOpen={setOpen} />
      <WrapperGrid open={open}>dddd</WrapperGrid>
    </>
  )
}
export default index
