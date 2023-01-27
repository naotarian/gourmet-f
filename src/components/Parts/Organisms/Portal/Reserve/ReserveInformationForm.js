//style
import styled from 'styled-components'
//mui
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
//icons
import AccountBoxIcon from '@mui/icons-material/AccountBox'
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
const ReserveInformationForm = props => {
  const { time, numberOfPeople, store, date, dow } = props
  return (
    <>
      <StyledFormHeader square>
        <IconTextGrid>
          <AccountBoxIcon fontSize="large" />
          <Typography variant="h1">ご予約情報</Typography>
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
              {store.restaurant_name}
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
              {date} ({dow})
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
              {time} ~
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
              {numberOfPeople}名
            </Typography>
          </Grid>
        </Grid>
      </StyledFormContent>
    </>
  )
}
export default ReserveInformationForm
