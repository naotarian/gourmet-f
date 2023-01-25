//style
import styled from 'styled-components'
//mui
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
//icons
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const StyledFormHeader = styled(Paper)`
  background: #445054;
  padding: 1rem 2rem;
  color: #fff;
`
const StyledFormContent = styled(Paper)`
  background: #fff;
  padding: 1rem 2rem;
  color: #333;
  border-radiius: initial!important;
  box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.4);
  margin-bottom: 2rem;
`
const IconTextGrid = styled(Grid)`
  display: flex;
  align-items: center;
  gap: 10px;
`
const GuestInformationForm = (props) => {
  return (
    <>
      <StyledFormHeader square>
        <IconTextGrid>
          <AccountBoxIcon fontSize='large' />
          <Typography variant='h1'>お客様情報入力</Typography>
        </IconTextGrid>
      </StyledFormHeader>
      <StyledFormContent variant="outlined" square>
        <Grid container spacing={2} style={{ alignItems: 'end' }}>
          <Grid item xs={4} style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant='h5'>ご予約者様氏名</Typography>
          </Grid>
          <Grid item xs={4} style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              label="姓"
              size="small"
            />
          </Grid>
          <Grid item xs={4} style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              label="名"
              size="small"
            />
          </Grid>
          <Grid item xs={4} style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant='h5'>ご予約者様氏名(カナ)</Typography>
          </Grid>
          <Grid item xs={4} style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              label="姓(カナ)"
              size="small"
            />
          </Grid>
          <Grid item xs={4} style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              label="名(カナ)"
              size="small"
            />
          </Grid>
        </Grid>
      </StyledFormContent>
    </>
  )
}
export default GuestInformationForm