import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Parts/Template/Admin/Header'
const index = () => {
  const router = useRouter()
  useEffect(() => {
    ;(async () => {
      try {
        const res = await axios.get('/api/admin/user')
      } catch (error) {
        router.push('/admin/login')
      }
    })()
  }, [])
  return (
    <>
      <Header />
      dashbord
    </>
  )
}
export default index
