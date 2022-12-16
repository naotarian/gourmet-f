import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import axios from '@/lib/axios'
const jsonpAdapter = require('axios-jsonp')
const InformationEdit = props => {
  const autoAddress = async () => {
    const postNumberRegex = /[0-9]{7}/
    if (!postNumberRegex.test(restaurant.post_number.replace(/-/g, ''))) return
    const res = await axios.get(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${restaurant.post_number.replace(
        /-/g,
        '',
      )}`,
      { adapter: jsonpAdapter },
    )
    setRestaurant(prevState => ({
      ...prevState,
      address:
        res.data.results[0].address1 +
        res.data.results[0].address2 +
        res.data.results[0].address3,
    }))
  }
  const { restaurant, setRestaurant } = props
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h6">店舗名称</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            size="small"
            style={{ width: '70%' }}
            value={restaurant.restaurant_name}
            onChange={e => {
              setRestaurant(prevState => ({
                ...prevState,
                restaurant_name: e.target.value,
              }))
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">店舗メールアドレス</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            size="small"
            style={{ width: '70%' }}
            value={restaurant.restaurant_email}
            onChange={e => {
              setRestaurant(prevState => ({
                ...prevState,
                restaurant_email: e.target.value,
              }))
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">店舗電話番号</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            size="small"
            style={{ width: '70%' }}
            value={restaurant.restaurant_tel}
            onChange={e => {
              setRestaurant(prevState => ({
                ...prevState,
                restaurant_tel: e.target.value,
              }))
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">店舗郵便番号</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            size="small"
            style={{ width: '70%', marginRight: '2rem' }}
            value={restaurant.post_number}
            onChange={e => {
              setRestaurant(prevState => ({
                ...prevState,
                post_number: e.target.value,
              }))
            }}
          />
          <Button variant="contained" onClick={autoAddress}>
            住所自動入力
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">店舗所在地</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            size="small"
            style={{ marginBottom: '2rem', width: '70%' }}
            value={restaurant.address}
            onChange={e => {
              setRestaurant(prevState => ({
                ...prevState,
                address: e.target.value,
              }))
            }}
          />
          <TextField
            size="small"
            style={{ width: '70%' }}
            value={restaurant.address_after}
            onChange={e => {
              setRestaurant(prevState => ({
                ...prevState,
                address_after: e.target.value,
              }))
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">店舗責任者名</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            size="small"
            style={{ width: '70%' }}
            value={restaurant.representative_name}
            onChange={e => {
              setRestaurant(prevState => ({
                ...prevState,
                representative_name: e.target.value,
              }))
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">店舗責任者メールアドレス</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            size="small"
            style={{ width: '70%' }}
            value={restaurant.restaurant_email}
            onChange={e => {
              setRestaurant(prevState => ({
                ...prevState,
                restaurant_email: e.target.value,
              }))
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">店舗責任者電話番号</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            size="small"
            style={{ width: '70%' }}
            value={restaurant.representative_tel}
            onChange={e => {
              setRestaurant(prevState => ({
                ...prevState,
                representative_tel: e.target.value,
              }))
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
export default InformationEdit
