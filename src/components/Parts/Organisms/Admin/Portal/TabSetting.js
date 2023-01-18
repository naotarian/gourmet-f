import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
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
const StyledFormGroup = styled(FormGroup)`
  -webkit-flex-direction: inherit;
  margin-top: 1rem;
`
const TabSetting = () => {
  const [startOfBusiness, setStartOfBusiness] = useState('')
  const [endOfBusiness, setEndOfBusiness] = useState('')
  const [reserveLate, setReserveLate] = useState('')
  const [regularHoliday, setRegularHoliday] = useState('')
  const [payChecks, setpayChecks] = useState({
    cache: true,
    credit: false,
    paypay: false,
  })

  const changeStartOfBusiness = event => {
    setStartOfBusiness(event.target.value)
  }
  const changeEndOfBusiness = event => {
    setEndOfBusiness(event.target.value)
  }
  const changeReserveLate = event => {
    setReserveLate(event.target.value)
  }
  const changeRegularHoliday = event => {
    setRegularHoliday(event.target.value)
  }
  const payChange = event => {
    setpayChecks({
      ...payChecks,
      [event.target.name]: event.target.checked,
    })
  }
  const { cache, credit, paypay } = payChecks
  return (
    <Grid>
      <StylediTtlePaper>
        <Typography variant="h5">営業時間</Typography>
      </StylediTtlePaper>
      <Wrap>
        <FormControl
          style={{ minWidth: '200px', margin: '2rem 0' }}
          size="small">
          <InputLabel id="startBusinessLabel">営業開始時間</InputLabel>
          <Select
            labelId="startBusinessLabel"
            id="endBusiness"
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
        <FormControl
          style={{ minWidth: '200px', margin: '2rem 1rem' }}
          size="small">
          <InputLabel id="endBusinessLabel">営業終了時間</InputLabel>
          <Select
            labelId="endBusinessLabel"
            id="endBusiness"
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
        <Typography variant="h6">予約可能最遅時間</Typography>
        <FormControl
          style={{ minWidth: '200px', margin: '1rem 0' }}
          size="small">
          <InputLabel id="reserveLateLabel">予約可能最遅時間</InputLabel>
          <Select
            labelId="reserveLateLabel"
            id="reserveLate"
            value={reserveLate}
            label="予約可能最遅時間"
            onChange={changeReserveLate}>
            {times.map((time, index) => (
              <MenuItem value={time} key={index}>
                {time}
              </MenuItem>
            ))}
          </Select>
          <Typography variant="noteRed">
            予約サイトに表示される最も遅い予約時間です。
            <br />
            以降の時間は予約を受け付けません。
          </Typography>
        </FormControl>
      </Wrap>
      <StylediTtlePaper>
        <Typography variant="h5">定休日設定</Typography>
      </StylediTtlePaper>
      <FormControl style={{ minWidth: '200px', margin: '1rem 0' }} size="small">
        <InputLabel id="reserveLateLabel">定休日</InputLabel>
        <Select
          labelId="reserveLateLabel"
          id="reserveLate"
          value={regularHoliday}
          label="定休日"
          onChange={changeRegularHoliday}>
          {dow.map((d, index) => (
            <MenuItem value={index} key={d}>
              {d}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <StylediTtlePaper>
        <Typography variant="h5">支払い方法</Typography>
      </StylediTtlePaper>
      <StyledFormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={cache} onChange={payChange} name="cache" />
          }
          label="現金"
        />
        <FormControlLabel
          control={
            <Checkbox checked={paypay} onChange={payChange} name="paypay" />
          }
          label="PayPay"
        />
        <FormControlLabel
          control={
            <Checkbox checked={credit} onChange={payChange} name="credit" />
          }
          label="クレジットカード"
        />
      </StyledFormGroup>
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
const dow = [
  '毎週月曜日',
  '毎週火曜日',
  '毎週水曜日',
  '毎週木曜日',
  '毎週金曜日',
  '毎週土曜日',
  '毎週日曜日',
  '休みなし',
]
