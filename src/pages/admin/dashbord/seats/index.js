import axios from '@/lib/axios'
import { useState } from 'react'
//components
import PageTemplate from '@/components/Parts/Template/Admin/PageTemplate'
import SeatList from '@/components/Parts/Organisms/Admin/Seat/SeatList'
import FormArea from '@/components/Parts/Organisms/Admin/Seat/FormArea'
//mui
import Grid from '@mui/material/Grid'
const index = props => {
  const seats = props.res.seats
  const [open, setOpen] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [seatName, setSeatName] = useState('')
  const [numberOfPeople, setNumberOfPeople] = useState(1)
  const [priority, setPriority] = useState(1)
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }
  const [kind, setKind] = useState(1)

  const seatRegister = async () => {
    const sendDatas = {
      numberOfPeople: numberOfPeople,
      seatName: seatName,
      priority: priority,
      kind: kind,
    }
    const res = await axios.post('/api/admin/seats/seats_register', sendDatas)
    console.log(res)
  }
  const seatEdit = () => {
    console.log('edit')
  }
  return (
    <>
      <PageTemplate open={open} setOpen={setOpen} title="座席管理">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <SeatList
              seats={seats}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
            />
          </Grid>
          <Grid item xs={8}>
            <FormArea
              selectedIndex={selectedIndex}
              kind={kind}
              setKind={setKind}
              seatRegister={seatRegister}
              seatEdit={seatEdit}
              seatName={seatName}
              setSeatName={setSeatName}
              numberOfPeople={numberOfPeople}
              setNumberOfPeople={setNumberOfPeople}
              priority={priority}
              setPriority={setPriority}
            />
          </Grid>
        </Grid>
      </PageTemplate>
    </>
  )
}
export default index
export const getServerSideProps = async ctx => {
  const cookie = ctx.req?.headers.cookie
  const res = await axios
    .get('/api/admin/seats/seats_fetch', {
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
