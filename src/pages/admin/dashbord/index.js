import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Parts/Template/Admin/Header'
import AdminMenu from '@/components/Parts/Template/Admin/AdminMenu'
import { styled, useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
const WrapperGrid = styled(Grid)`
  margin-left: ${props => (props.open ? '240px' : 0)};
  padding: 1rem;
`
const index = () => {
  const router = useRouter()

  const [open, setOpen] = useState(true)
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
      <AdminMenu open={open} setOpen={setOpen} />
      <WrapperGrid open={open}>dddd</WrapperGrid>
    </>
  )
}
export default index
