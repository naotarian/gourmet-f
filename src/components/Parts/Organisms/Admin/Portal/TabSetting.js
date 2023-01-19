import { useState } from 'react'
import axios from '@/lib/axios'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
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
const TabSetting = props => {
  const { information } = props
  const [startOfBusiness, setStartOfBusiness] = useState(
    information.sales_information.start_business.substr(
      0,
      information.sales_information.start_business.length - 3,
    ),
  )
  const [endOfBusiness, setEndOfBusiness] = useState(
    information.sales_information.end_business.substr(
      0,
      information.sales_information.end_business.length - 3,
    ),
  )
  const [reserveLate, setReserveLate] = useState(
    information.sales_information.late_reserve.substr(
      0,
      information.sales_information.late_reserve.length - 3,
    ),
  )
  const [regularHoliday, setRegularHoliday] = useState(
    information.sales_information.regular_holiday,
  )
  const [payRemarks, setPayRemarks] = useState(
    information.sales_information.remarks,
  )
  const [timeRemarks, setTimeRemarks] = useState(
    information.sales_information.time_remarks,
  )
  const [regularHolidayRemarks, setRegularHolidayRemarks] = useState(
    information.sales_information.regular_holiday_remarks,
  )
  // const [remarks, setRemarks] = useState(information.sales_information.remarks)
  const [payChecks, setpayChecks] = useState({
    cache: true,
    credit: false,
    paypay: false,
    dpay: false,
  })
  const [alertMessage, setAlertMessage] = useState('')

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
  const changeRegularHolidayRemarks = event => {
    setRegularHolidayRemarks(event.target.value)
  }
  const changeTimeRemarks = event => {
    setTimeRemarks(event.target.value)
  }
  const payChange = event => {
    setpayChecks({
      ...payChecks,
      [event.target.name]: event.target.checked,
    })
  }
  const changePayRemarks = e => {
    setPayRemarks(e.target.value)
  }
  const updateSetting = async () => {
    const sendDatas = {
      startOfBusiness: startOfBusiness + ':00',
      endOfBusiness: endOfBusiness + ':00',
      reserveLate: reserveLate + ':00',
      regularHoliday: regularHoliday,
      payChecks: payChecks,
      payRemarks: payRemarks,
      timeRemarks: timeRemarks,
      regularHolidayRemarks: regularHolidayRemarks,
    }
    const res = await axios.post(
      '/api/admin/restaurant/update_sales',
      sendDatas,
    )
    if (res.status === 200) {
      setAlertMessage(res.data.msg)
      setTimeout(() => {
        setAlertMessage('')
      }, 3000)
    }
  }
  const { cache, credit, paypay, dpay } = payChecks
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
        <TextField
          fullWidth
          label="営業時間に関する備考欄"
          multiline
          rows={4}
          value={timeRemarks}
          onChange={changeTimeRemarks}
        />
      </Wrap>
      <StylediTtlePaper>
        <Typography variant="h5">定休日設定</Typography>
      </StylediTtlePaper>
      <Wrap>
        <FormControl
          style={{ minWidth: '200px', margin: '1rem 0' }}
          size="small">
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
        <TextField
          fullWidth
          label="定休日に関する備考欄"
          multiline
          rows={4}
          value={regularHolidayRemarks}
          onChange={changeRegularHolidayRemarks}
        />
      </Wrap>
      <StylediTtlePaper>
        <Typography variant="h5">支払い方法</Typography>
      </StylediTtlePaper>
      <Wrap>
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
          <FormControlLabel
            control={
              <Checkbox checked={dpay} onChange={payChange} name="dpay" />
            }
            label="d払い"
          />
        </StyledFormGroup>
        <TextField
          fullWidth
          label="備考欄"
          multiline
          rows={4}
          value={payRemarks}
          onChange={changePayRemarks}
        />
      </Wrap>
      <Grid style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button
          variant="contained"
          style={{ width: '300px' }}
          onClick={updateSetting}>
          更新
        </Button>
      </Grid>
      {alertMessage && (
        <Alert
          severity="warning"
          style={{
            position: 'fixed',
            left: '120px',
            zIndex: '10000',
            bottom: '35px',
            width: '300px',
          }}>
          {alertMessage}
        </Alert>
      )}
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
  '休みなし',
  '毎週月曜日',
  '毎週火曜日',
  '毎週水曜日',
  '毎週木曜日',
  '毎週金曜日',
  '毎週土曜日',
  '毎週日曜日',
]
