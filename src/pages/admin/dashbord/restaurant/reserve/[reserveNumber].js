import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PageTemplate from '@/components/Parts/Template/Admin/PageTemplate'
import ListTable from '@/components/Parts/Organisms/Admin/Reserve/ListTable'
import axios from '@/lib/axios'

const reserveDetail = () => {
  const router = useRouter()
  const { reserveNumber } = router.query
  useEffect(() => {
    if (!router.isReady) return
    ;(async () => {
      console.log(reserveNumber)
      const sendDatas = {reserveNumber: reserveNumber}
      const res = await axios.post('/api/admin/reserve/detail', sendDatas)
      console.log(res)
    })()
  }, [router.isReady, router.query.reserveNumber])
  const [open, setOpen] = useState(true)
  return (
    <>
      <PageTemplate open={open} setOpen={setOpen} title="予約詳細">
        sss
      </PageTemplate>
    </>
  )
}
export default reserveDetail
