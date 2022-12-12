import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Parts/Template/Header'
const index = () => {
  const router = useRouter()
  useEffect(() => {
    ;(async () => {
      try {
        const res = await axios.get('/api/user')
      } catch (error) {
        router.push('/portal/login')
      }
    })()
  }, [])
  return (
    <>
      <Header />
      portazal
    </>
  )
}
export default index
