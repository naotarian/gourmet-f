import { useState } from 'react'
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
const GuestInformationForm = props => {
  const {
    guestInformation,
    setGuestInformation,
    guestInformationErrors,
    setGuestInformationErrors,
  } = props
  const lastNameChange = e => {
    setGuestInformation(prev => ({ ...prev, lastName: e.target.value }))
    setGuestInformationErrors(prev => ({ ...prev, lastName: '' }))
    if (e.target.value.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        lastName: '入力は必須です。',
      }))
      return
    }
  }
  const firstNameChange = e => {
    setGuestInformation(prev => ({ ...prev, firstName: e.target.value }))
    setGuestInformationErrors(prev => ({ ...prev, firstName: '' }))
    if (e.target.value.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        firstName: '入力は必須です。',
      }))
      return
    }
  }
  const lastNameKanaChange = e => {
    setGuestInformation(prev => ({ ...prev, lastNameKana: e.target.value }))
    setGuestInformationErrors(prev => ({ ...prev, lastNameKana: '' }))
    if (e.target.value.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        lastNameKana: '入力は必須です。',
      }))
      return
    }
    const regex = /^[ァ-ヶー　]*$/
    if (!regex.test(e.target.value))
      setGuestInformationErrors(prev => ({
        ...prev,
        lastNameKana: '全角カタカナで入力してください。',
      }))
  }
  const firstNameKanaChange = e => {
    setGuestInformation(prev => ({ ...prev, firstNameKana: e.target.value }))
    setGuestInformationErrors(prev => ({ ...prev, firstNameKana: '' }))
    if (e.target.value.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        firstNameKana: '入力は必須です。',
      }))
      return
    }
    const regex = /^[ァ-ヶー　]*$/
    if (!regex.test(e.target.value))
      setGuestInformationErrors(prev => ({
        ...prev,
        firstNameKana: '全角カタカナで入力してください。',
      }))
  }
  const emailChange = e => {
    setGuestInformation(prev => ({ ...prev, email: e.target.value }))
    setGuestInformationErrors(prev => ({ ...prev, email: '' }))
    if (e.target.value.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        email: '入力は必須です。',
      }))
      return
    }
    var emailRegex =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
    if (!emailRegex.test(e.target.value))
      setGuestInformationErrors(prev => ({
        ...prev,
        email: 'メールアドレスを正しい形式で入力してください。',
      }))
  }
  const cellPhoneChange = e => {
    setGuestInformation(prev => ({ ...prev, cellPhone: e.target.value }))
    setGuestInformationErrors(prev => ({ ...prev, cellPhone: '' }))
    if (e.target.value.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        cellPhone: '入力は必須です。',
      }))
      return
    }
  }
  const fixedPhoneChange = e => {
    setGuestInformation(prev => ({ ...prev, fixedPhone: e.target.value }))
    setGuestInformationErrors(prev => ({ ...prev, fixedPhone: '' }))
    if (e.target.value.length === 0) {
      setGuestInformationErrors(prev => ({
        ...prev,
        fixedPhone: '入力は必須です。',
      }))
      return
    }
  }
  const remarksChange = e => {
    setGuestInformation(prev => ({ ...prev, remarks: e.target.value }))
    setGuestInformationErrors(prev => ({ ...prev, remarks: '' }))
    if (e.target.value.length > 3000) {
      setGuestInformationErrors(prev => ({
        ...prev,
        remarks: '3000文字以内で記入してください。',
      }))
      return
    }
  }
  return (
    <>
      <StyledFormHeader square>
        <IconTextGrid>
          <AccountBoxIcon fontSize="large" />
          <Typography variant="h1">お客様情報入力</Typography>
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
            <Typography variant="h5">ご予約者様氏名</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              fullWidth
              error={guestInformationErrors.lastName}
              label="姓"
              size="small"
              value={guestInformation.lastName}
              onChange={lastNameChange}
              helperText={guestInformationErrors.lastName}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              fullWidth
              error={guestInformationErrors.firstName}
              label="名"
              size="small"
              value={guestInformation.firstName}
              onChange={firstNameChange}
              helperText={guestInformationErrors.firstName}
            />
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
            xs={6}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              fullWidth
              error={guestInformationErrors.lastNameKana}
              label="姓(カナ)"
              size="small"
              value={guestInformation.lastNameKana}
              onChange={lastNameKanaChange}
              helperText={guestInformationErrors.lastNameKana}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              fullWidth
              error={guestInformationErrors.firstNameKana}
              label="名(カナ)"
              size="small"
              value={guestInformation.firstNameKana}
              onChange={firstNameKanaChange}
              helperText={guestInformationErrors.firstNameKana}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">ご予約者様メールアドレス</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              fullWidth
              error={guestInformationErrors.email}
              label="メールアドレス"
              size="small"
              value={guestInformation.email}
              onChange={emailChange}
              helperText={guestInformationErrors.email}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd', paddingBottom: '.4rem' }}>
            <Typography variant="h5">ご予約者様電話番号</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              fullWidth
              error={guestInformationErrors.cellPhone}
              label="携帯電話"
              size="small"
              value={guestInformation.cellPhone}
              onChange={cellPhoneChange}
              helperText={guestInformationErrors.cellPhone}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            style={{ borderBottom: '1px dashed #ddd' }}>
            <TextField
              fullWidth
              error={guestInformationErrors.fixedPhone}
              label="固定電話"
              size="small"
              value={guestInformation.fixedPhone}
              onChange={fixedPhoneChange}
              helperText={guestInformationErrors.fixedPhone}
            />
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
            <TextField
              multiline
              rows={4}
              fullWidth
              error={guestInformationErrors.remarks}
              label="アレルギー等がある場合は、ご記入ください。"
              size="small"
              value={guestInformation.remarks}
              onChange={remarksChange}
              helperText={guestInformationErrors.remarks}
            />
          </Grid>
        </Grid>
      </StyledFormContent>
    </>
  )
}
export default GuestInformationForm
