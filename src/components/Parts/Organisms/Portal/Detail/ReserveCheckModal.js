import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Grid from '@mui/material/Grid'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '@media(max-width: 1024px)': {
    minWidth: '95%',
  },
}
const ReserveCheckModal = props => {
  const {
    dataReserveCheckModal,
    openReserveCheckModal,
    setOpenReserveCheckModal,
    store,
    numberOfPeople,
    setNumberOfPeople,
    time,
    setTime,
    reservePage,
  } = props
  const handleClose = () => {
    setOpenReserveCheckModal(false)
    setTime(0)
    setNumberOfPeople(0)
  }

  const numberOfPeopleChange = event => {
    setNumberOfPeople(event.target.value)
  }
  const timeChange = e => {
    setTime(e.target.value)
  }
  const numberItems = () => {
    const number = []
    for (let i = 0; i < 100; i++) {
      number.push(
        <MenuItem value={i + 1} key={i}>
          {i + 1}人
        </MenuItem>,
      )
    }
    return number
  }
  const timeItems = () => {
    const time = []
    store.reserve_time_list.map((data, index) => {
      time.push(
        <MenuItem value={data} key={index}>
          {data}
        </MenuItem>,
      )
    })
    return time
  }

  return (
    <Modal
      open={openReserveCheckModal}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Grid
          sx={{
            width: '100%',
            padding: '0 0 1rem 0',
            borderBottom: '1px solid #ddd',
            position: 'relative',
            marginBottom: '1rem',
          }}>
          <Typography variant="h6">{store.restaurant_name}</Typography>
          <IconButton
            size="large"
            sx={{ position: 'absolute', top: '-10px', right: 0 }}
            onClick={handleClose}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Grid>
        <Typography variant="h2">お客様情報を教えてください。</Typography>
        <Grid container spacing={2} style={{ margin: '.5rem 0' }}>
          <Grid item xs={4}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              人数
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">人数</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={numberOfPeople}
                label="人数"
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  getcontentanchorel: null,
                  classes: {
                    paper: { maxHeight: '300px' },
                  },
                }}
                onChange={numberOfPeopleChange}>
                {numberItems()}
              </Select>
            </FormControl>
          </Grid>
          {openReserveCheckModal && (
            <>
              <Grid item xs={4}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  ご来店日
                </Typography>
              </Grid>
              <Grid item xs={8} style={{ marginTop: '.8rem' }}>
                <Typography variant="h2">
                  {dataReserveCheckModal.date}({dataReserveCheckModal.dow})
                </Typography>
              </Grid>
            </>
          )}
          <Grid item xs={4}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ご来店お時間帯
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                ご来店お時間帯
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={time}
                label="ご来店お時間帯"
                onChange={timeChange}>
                {timeItems()}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid style={{ width: '100%', padding: '1rem 0', textAlign: 'right' }}>
          <Button
            variant="contained"
            onClick={reservePage}
            disabled={numberOfPeople === 0 || time === 0}>
            予約へ進む
          </Button>
        </Grid>
      </Box>
    </Modal>
  )
}
export default ReserveCheckModal
