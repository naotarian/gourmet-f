import { useState } from 'react'
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
  const { guestInformation, setGuestInformation, guestInformationErrors, setGuestInformationErrors } = props
  const [lastNameKanaError, setLastNameKanaError] = useState('')
  const [firstNameKanaError, setFirstNameKanaError] = useState('')
  const lastNameChange = (e) => {
    setGuestInformation((prev) => ({ ...prev, lastName: e.target.value }))
  }
  const firstNameChange = (e) => {
    setGuestInformation((prev) => ({ ...prev, firstName: e.target.value }))
  }
  const lastNameKanaChange = (e) => {
    setGuestInformation((prev) => ({ ...prev, lastNameKana: e.target.value }))
    setGuestInformationErrors((prev) => ({ ...prev, lastNameKana: '' }))
    // setLastNameKanaError('')
    if (e.target.value.length === 0) {
      // setLastNameKanaError('入力は必須です。')
      setGuestInformationErrors((prev) => ({ ...prev, lastNameKana: '入力は必須です。' }))
      return
    }
    const regex = /^[ァ-ヶー　]*$/
    if (!regex.test(e.target.value)) setGuestInformationErrors((prev) => ({ ...prev, lastNameKana: '全角カタカナで入力してください。' }))
  }
  const firstNameKanaChange = (e) => {
    setGuestInformation((prev) => ({ ...prev, firstNameKana: e.target.value }))
    setGuestInformationErrors((prev) => ({ ...prev, firstNameKana: '' }))
    if (e.target.value.length === 0) {
      setGuestInformationErrors((prev) => ({ ...prev, firstNameKana: '入力は必須です。' }))
      return
    }
    const regex = /^[ァ-ヶー　]*$/
    if (!regex.test(e.target.value)) setGuestInformationErrors((prev) => ({ ...prev, firstNameKana: '全角カタカナで入力してください。' }))
  }
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
              value={guestInformation.lastName}
              onChange={lastNameChange}
            />
          </Grid>
          <Grid item xs={4} style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              label="名"
              size="small"
              value={guestInformation.firstName}
              onChange={firstNameChange}
            />
          </Grid>
          <Grid item xs={4} style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant='h5'>ご予約者様氏名(カナ)</Typography>
          </Grid>
          <Grid item xs={4} style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              error={guestInformationErrors.lastNameKana}
              label="姓(カナ)"
              size="small"
              value={guestInformation.lastNameKana}
              onChange={lastNameKanaChange}
              helperText={guestInformationErrors.lastNameKana}
            />
          </Grid>
          <Grid item xs={4} style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              error={guestInformationErrors.firstNameKana}
              label="名(カナ)"
              size="small"
              value={guestInformation.firstNameKana}
              onChange={firstNameKanaChange}
              helperText={guestInformationErrors.firstNameKana}
            />
          </Grid>
        </Grid>
      </StyledFormContent>
    </>
  )
}
export default GuestInformationForm