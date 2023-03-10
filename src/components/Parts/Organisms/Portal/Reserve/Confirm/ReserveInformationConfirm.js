//style
import styled from 'styled-components'
import { useRouter } from 'next/router'
//mui
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
//icons
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import axios from '@/lib/axios'
const StyledFormHeader = styled(Paper)`
  background: #445054;
  padding: 1rem 2rem;
  color: #fff;
`
const StyledFormContent = styled(Paper)`
  background: #fff;
  padding: 1rem 2rem;
  color: #333;
  border-radiius: initial !important;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.4);
  margin-bottom: 2rem;
`
const IconTextGrid = styled(Grid)`
  display: flex;
  align-items: center;
  gap: 10px;
`
const ReserveInformationConfirm = props => {
  const { storeInfo, guestInfo, reserveInfo } = props
  const router = useRouter()
  const reserve = async () => {
    try {
      const sendDatas = {
        storeInfo: storeInfo,
        guestInfo: guestInfo,
        reserveInfo: reserveInfo,
      }
      const res = await axios.post('/api/reserve/execution', sendDatas)
      router.push('/portal/reserve/complate')
    } catch (error) {}
  }
  const back = () => {
    router.back()
  }
  return (
    <>
      <StyledFormHeader square>
        <IconTextGrid>
          <AccountBoxIcon fontSize="large" />
          <Typography variant="h1">ご予約情報の確認</Typography>
        </IconTextGrid>
      </StyledFormHeader>
      <StyledFormContent variant="outlined" square>
        <Grid container spacing={2} style={{ alignItems: 'end' }}>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">店舗名</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <Typography variant="h5" style={{ fontSize: '1.4rem' }}>
              {storeInfo.restaurant_name}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">ご予約日</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <Typography variant="h5" style={{ fontSize: '1.4rem' }}>
              {reserveInfo.date} ({reserveInfo.dow})
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">ご予約時間</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <Typography variant="h5" style={{ fontSize: '1.4rem' }}>
              {reserveInfo.time} ~
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">ご来店予定人数</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <Typography variant="h5" style={{ fontSize: '1.4rem' }}>
              {reserveInfo.numberOfPeople}名
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">ご予約者様氏名</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <Typography variant="h5" style={{ fontSize: '1.4rem' }}>
              {guestInfo.lastName} {guestInfo.firstName}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">ご予約者様氏名(カナ)</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <Typography variant="h5" style={{ fontSize: '1.4rem' }}>
              {guestInfo.lastNameKana} {guestInfo.firstNameKana}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">メールアドレス</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <Typography variant="h5" style={{ fontSize: '1.4rem' }}>
              {guestInfo.email}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">携帯電話番号</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <Typography variant="h5" style={{ fontSize: '1.4rem' }}>
              {guestInfo.cellPhone}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">固定電話番号</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <Typography variant="h5" style={{ fontSize: '1.4rem' }}>
              {guestInfo.fixedPhone}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">備考</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <Typography variant="h5" style={{ fontSize: '1.4rem' }}>
              {guestInfo.remarks}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            position: 'relative',
          }}>
          <Button
            variant="contained"
            size="large"
            style={{ width: '300px' }}
            onClick={reserve}>
            予約
          </Button>
          <Button
            variant="outlined"
            size="large"
            style={{ position: 'absolute', right: 0 }}
            onClick={back}>
            内容を修正する
          </Button>
        </Grid>
      </StyledFormContent>
    </>
  )
}
export default ReserveInformationConfirm
