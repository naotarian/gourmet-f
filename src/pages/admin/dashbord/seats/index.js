import axios from '@/lib/axios'
import { useState } from 'react'
//components
import PageTemplate from '@/components/Parts/Template/Admin/PageTemplate'
import SeatList from '@/components/Parts/Organisms/Admin/Seat/SeatList'
import FormArea from '@/components/Parts/Organisms/Admin/Seat/FormArea'
//mui
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
const index = props => {
  // const seats = props.res.seats
  const [seats, setSeats] = useState(props.res.seats)
  const [open, setOpen] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [seatName, setSeatName] = useState('')
  const [numberOfPeople, setNumberOfPeople] = useState(1)
  const [priority, setPriority] = useState(seats.length + 1)
  const [kind, setKind] = useState(1)
  const [successMessage, setSuccessMessage] = useState('')
  const handleListItemClick = (event, index, seat) => {
    setSeatName(seat.name)
    setNumberOfPeople(seat.max_number)
    setPriority(seat.priority)
    setSelectedIndex(index)
    setKind(seat.kind)
  }
  const selectClear = () => {
    setSeatName('')
    setNumberOfPeople(1)
    setPriority(seats.length + 1)
    setSelectedIndex(null)
    setKind(1)
  }

  const seatRegister = async () => {
    const sendDatas = {
      numberOfPeople: numberOfPeople,
      seatName: seatName,
      priority: priority,
      kind: kind,
    }
    const res = await axios.post('/api/admin/seats/seats_register', sendDatas)
    setSeats(res.data.seats)
    setSeatName('')
    setNumberOfPeople(1)
    setPriority(priority + 1)
    setSelectedIndex(null)
    setKind(1)
    setSuccessMessage('座席を登録しました。')
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)
  }
  const seatEdit = async () => {
    const sendDatas = {
      id: seats[selectedIndex].id,
      numberOfPeople: numberOfPeople,
      seatName: seatName,
      priority: priority,
      kind: kind,
    }
    const res = await axios.post('/api/admin/seats/seats_update', sendDatas)
    setSeats(res.data.seats)
    setSuccessMessage('座席情報を更新しました。')
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)
  }
  return (
    <>
      <PageTemplate open={open} setOpen={setOpen} title="座席管理">
        {successMessage && (
          <Stack sx={{ width: '80%', marginBottom: '1rem' }} spacing={2}>
            <Alert variant="filled" severity="success">
              {successMessage}
            </Alert>
          </Stack>
        )}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <SeatList
              seats={seats}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
              selectClear={selectClear}
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
