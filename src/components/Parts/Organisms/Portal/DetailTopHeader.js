//mui
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
//style
import styled from 'styled-components'
//icons
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
const TopPaper = styled(Paper)`
  padding: 2rem;
  background: linear-gradient(to bottom, #ececec 0%, #fdfdfd 100%);
`
const ButtonWrapper = styled(Grid)`
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`
const SetGrid = styled(Grid)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`
const SetIcon = styled(Grid)`
  display: flex;
  gap: 3px;
  align-items: center;
`
const ChipSpan = styled.span`
  float: left;
  width: 58px;
  margin-right: 10px;
  padding: 6px 0;
  border: 1px solid #979797;
  font-size: 10px;
  font-weight: normal;
  color: #4e4e4e;
  text-align: center;
  line-height: 1;
  box-sizing: border-box;
`
const priceSpan = {
  fontSize: '14px',
}
const reserveButton = {
  background: 'linear-gradient(45deg, #34B6EB 30%, #20A7DE 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(32, 167, 222, .3)',
}
const DetailTopHeader = props => {
  const { store } = props
  console.log(store)
  return (
    <TopPaper elevation={0}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}>
            <img
              src="/images/thumbnail.jpg"
              alt=""
              style={{ maxWidth: '70px' }}
            />
            <Typography variant="h2">{store.restaurant_name}</Typography>
          </Grid>
          <SetGrid>
            <ChipSpan>予算</ChipSpan>
            <SetIcon>
              <LightModeIcon color="morning" />
              <span style={priceSpan}>{store.lunch.price}</span>
            </SetIcon>
            <SetIcon>
              <ModeNightIcon color="night" />
              <span style={priceSpan}>{store.dinner.price}</span>
            </SetIcon>
          </SetGrid>
          <SetGrid>
            <ChipSpan>ジャンル</ChipSpan>
            <Typography variant="h6" style={priceSpan}>
              {store.main_category.name} | {store.sub_category.name}
            </Typography>
          </SetGrid>
          <SetGrid>
            <ChipSpan>所在地</ChipSpan>
            <Typography variant="h6" style={priceSpan}>
              {store.address}
              {store.address_after}
            </Typography>
          </SetGrid>
          <SetGrid>
            <ChipSpan>TEL</ChipSpan>
            <Typography variant="h6" style={priceSpan}>
              {store.restaurant_tel}
            </Typography>
          </SetGrid>
          <SetGrid>
            <ChipSpan>営業時間</ChipSpan>
            <Typography variant="h6" style={priceSpan}>
              {store.sales_information.start_business.substr(
                0,
                store.sales_information.start_business.length - 3,
              )}
              ~{' '}
              {store.sales_information.end_business.substr(
                0,
                store.sales_information.end_business.length - 3,
              )}
            </Typography>
          </SetGrid>
          <Typography
            variant="note"
            style={{ whiteSpace: 'pre-line', fontSize: '0.6rem' }}>
            {store.sales_information.time_remarks}
          </Typography>
          <SetGrid>
            <ChipSpan>定休日</ChipSpan>
            <Typography variant="h6" style={priceSpan}>
              {dow[store.sales_information.regular_holiday - 1]}
            </Typography>
          </SetGrid>
          <Typography
            variant="note"
            style={{ whiteSpace: 'pre-line', fontSize: '0.6rem' }}>
            {store.sales_information.regular_holiday_remarks}
          </Typography>
        </Grid>
        <ButtonWrapper item xs={4}>
          <Button variant="contained" size="large" style={reserveButton}>
            空席確認・予約する
          </Button>
          {/* <Button variant="contained">クーポンを見る</Button>
        <Button variant="contained">お食事券を見る</Button> */}
        </ButtonWrapper>
      </Grid>
    </TopPaper>
  )
}
export default DetailTopHeader
const dow = [
  '月曜日',
  '火曜日',
  '水曜日',
  '木曜日',
  '金曜日',
  '土曜日',
  '日曜日',
]
