//mui
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
const FormArea = props => {
  const {
    selectedIndex,
    kind,
    setKind,
    seatRegister,
    seatEdit,
    seatName,
    setSeatName,
    numberOfPeople,
    setNumberOfPeople,
    priority,
    setPriority,
  } = props
  return (
    <Paper style={{ padding: '1rem' }}>
      <Grid style={{ textAlign: 'center' }}>
        {selectedIndex === null ? (
          <Typography variant="h5">座席登録</Typography>
        ) : (
          <Typography variant="h5">座席編集</Typography>
        )}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="seatName"
              value={seatName}
              label="座席表示名"
              variant="standard"
              onChange={newValue => setSeatName(newValue.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="座れる人数"
              type="number"
              value={numberOfPeople}
              onChange={newValue => setNumberOfPeople(newValue.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: '200px' }}
              // fullWidth
              inputProps={{ min: 1, max: 30 }}
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-number"
              label="予約優先順位"
              type="number"
              value={priority}
              onChange={newValue => setPriority(newValue.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: '200px' }}
              inputProps={{ min: 0, max: 10 }}
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl
              variant="standard"
              style={{ width: '200px' }}
              size="small">
              <InputLabel id="kindLabel">座席種類</InputLabel>
              <Select
                labelId="kindLabel"
                id="kind"
                value={kind}
                label="座席種類"
                onChange={newValue => setKind(newValue.target.value)}>
                <MenuItem value={1}>カウンター</MenuItem>
                <MenuItem value={2}>テーブル</MenuItem>
                <MenuItem value={3}>座敷</MenuItem>
                <MenuItem value={4}>個室</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ textAlign: 'center', marginTop: '1rem' }}>
        {selectedIndex === null ? (
          <Button variant="contained" onClick={seatRegister}>
            登録
          </Button>
        ) : (
          <Button variant="contained" onClick={seatEdit}>
            更新
          </Button>
        )}
      </Grid>
    </Paper>
  )
}
export default FormArea
