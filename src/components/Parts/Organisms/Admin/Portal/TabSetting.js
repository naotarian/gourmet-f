import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
//style
import styled from 'styled-components'
const StylediTtlePaper = styled(Paper)`
  background: #ddd;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`
const Wrap = styled(Grid)`
  padding: 1rem;
`
const TabSetting = () => {
  const [startOfBusiness, setStartOfBusiness] = useState('')
  const [endOfBusiness, setEndOfBusiness] = useState('')

  const changeStartOfBusiness = event => {
    setStartOfBusiness(event.target.value)
  }
  const changeEndOfBusiness = event => {
    setEndOfBusiness(event.target.value)
  }
  return (
    <Grid>
      <StylediTtlePaper>
        <Typography variant="h5">営業時間</Typography>
      </StylediTtlePaper>
      <Wrap>
        <FormControl style={{ minWidth: '200px', marginRight: '2rem' }}>
          <InputLabel id="demo-simple-select-label">営業開始時間</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={startOfBusiness}
            label="営業開始時間"
            onChange={changeStartOfBusiness}>
            {times.map((time, index) => (
              <MenuItem value={time} key={index}>
                {time}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={{ minWidth: '200px' }}>
          <InputLabel id="demo-simple-select-label">営業終了時間</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={endOfBusiness}
            label="営業終了時間"
            onChange={changeEndOfBusiness}>
            {times.map((time, index) => (
              <MenuItem value={time} key={index}>
                {time}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Wrap>
      <StylediTtlePaper>
        <Typography variant="h5">定休日設定</Typography>
      </StylediTtlePaper>
      <StylediTtlePaper>
        <Typography variant="h5">定休日設定</Typography>
      </StylediTtlePaper>
    </Grid>
  )
}
export default TabSetting
const times = [
  '00:00',
  '00:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
  '04:00',
  '04:30',
  '05:00',
  '05:30',
  '06:00',
  '06:30',
  '07:00',
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
  '23:30',
  '24:00',
]
