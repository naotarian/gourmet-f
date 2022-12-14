import { useState } from 'react'
import { useRouter } from 'next/router'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Slider from '@mui/material/Slider'
import axios from '@/lib/axios'
const jsonpAdapter = require('axios-jsonp')
//functions
import exportFunction from '@/components/functions/Admin/Restaurant/Register/functions'

const RegistRestaurant = props => {
  const { datas } = props
  const router = useRouter()
  const mainCategories = datas.main_categories
  const subCategories = datas.sub_categories
  const budgets = datas.budgets
  const [categories, setCategories] = useState(1)
  const [subCategoriesId, setSubCategoriesId] = useState(1)
  const [regularHoliday, setRegularHoliday] = useState(1)
  const [lunchBudget, setLunchBudget] = useState(1)
  const [dinnerBudget, setDinnerBudget] = useState(3)
  const [takeOut, setTakeOut] = useState(1)
  const [restaurantName, setRestaurantName] = useState('')
  const [restaurantEmail, setRestaurantEmail] = useState('')
  const [restaurantPostNumber, setRestaurantPostNumber] = useState('')
  const [address, setAddress] = useState('')
  const [addressAfter, setAddressAfter] = useState('')
  const [restaurantTel, setRestaurantTel] = useState('')
  const [representativeTel, setRepresentativeTel] = useState('')
  const [sliderValue, setSliderValue] = useState(3)
  const [feature, setFeature] = useState('')
  //errors
  const [nameErrors, setNameErrors] = useState('')
  const [emailErrors, setEmailErrors] = useState('')
  const [postNumberErrors, setPostNumberErrors] = useState('')
  const [addressErrors, setAddressErrors] = useState('')
  const [addressAfterErrors, setAddressAfterErrors] = useState('')
  const [telErrors, setTelErrors] = useState('')
  const [subCategoryErrors, setSubCategoryErrors] = useState('')
  const [representativeTelErrors, setRepresentativeTelErrors] = useState('')

  const handleChange = event => {
    setCategories(event.target.value)
    setSubCategoriesId(0)
  }
  const changeRegularHoliday = event => setRegularHoliday(event.target.value)
  const subCategoryChange = e => setSubCategoriesId(e.target.value)
  const lunchBudgetChange = e => setLunchBudget(e.target.value)
  const dinnerBudgetChange = e => setDinnerBudget(e.target.value)
  const takeOutChange = e => setTakeOut(e.target.value)
  const sliderChange = e => setSliderValue(e.target.value)
  const featureChange = e => setFeature(e.target.value)
  const autoAddress = async () => {
    const postNumberRegex = /[0-9]{7}/
    if (!postNumberRegex.test(restaurantPostNumber.replace(/-/g, ''))) return
    const res = await axios.get(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${restaurantPostNumber.replace(
        /-/g,
        '',
      )}`,
      { adapter: jsonpAdapter },
    )
    setAddress(
      res.data.results[0].address1 +
        res.data.results[0].address2 +
        res.data.results[0].address3,
    )
  }
  const submit = async () => {
    setNameErrors('')
    setEmailErrors('')
    setPostNumberErrors('')
    setAddressErrors('')
    setAddressAfterErrors('')
    setTelErrors('')
    setSubCategoryErrors('')
    setRepresentativeTelErrors('')
    const formData = {
      restaurantName: restaurantName,
      restaurantEmail: restaurantEmail,
      address: address,
      addressAfter: addressAfter,
      restaurantPostNumber: restaurantPostNumber.replace(/-/g, ''),
      restaurantTel: restaurantTel.replace(/-/g, ''),
      mainCategoryId: categories,
      subCategoryId: subCategoriesId,
      regularHoliday: regularHoliday,
      lunchBudget: lunchBudget,
      dinnerBudget: dinnerBudget,
      sliderValue: sliderValue,
      takeOut: takeOut,
      feature: feature,
      representativeTel: representativeTel,
    }
    const validate = await exportFunction.validate(formData)
    if (!validate.validate) {
      if (validate.nameError) {
        setNameErrors(
          validate.nameError.split('\n').map((line, key) => (
            <span key={key}>
              {line}
              <br />
            </span>
          )),
        )
      }
      if (validate.emailError) {
        setEmailErrors(
          validate.emailError.split('\n').map((line, key) => (
            <span key={key}>
              {line}
              <br />
            </span>
          )),
        )
      }
      if (validate.postNumberError) {
        setPostNumberErrors(
          validate.postNumberError.split('\n').map((line, key) => (
            <span key={key}>
              {line}
              <br />
            </span>
          )),
        )
      }
      if (validate.addressError) {
        setAddressErrors(
          validate.addressError.split('\n').map((line, key) => (
            <span key={key}>
              {line}
              <br />
            </span>
          )),
        )
      }
      if (validate.addressAfterError) {
        setAddressAfterErrors(
          validate.addressAfterError.split('\n').map((line, key) => (
            <span key={key}>
              {line}
              <br />
            </span>
          )),
        )
      }
      if (validate.telError) {
        setTelErrors(
          validate.telError.split('\n').map((line, key) => (
            <span key={key}>
              {line}
              <br />
            </span>
          )),
        )
      }
      if (validate.representativeTelError) {
        setRepresentativeTelErrors(
          validate.representativeTelError.split('\n').map((line, key) => (
            <span key={key}>
              {line}
              <br />
            </span>
          )),
        )
      }
    } else {
      const res = await axios.post('/api/admin/restaurant/register', formData)
      router.push('/admin/dashbord/restaurant/list')
    }
  }
  return (
    <>
      {datas && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell style={{ border: '1px solid #ddd', width: '140px' }}>
                  ?????????
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <TextField
                    error={nameErrors}
                    helperText={nameErrors}
                    placeholder="???)??????????????????"
                    size="small"
                    value={restaurantName}
                    onChange={e => setRestaurantName(e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd', width: '100px' }}>
                  ???????????????????????????
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }} colSpan={3}>
                  <TextField
                    error={emailErrors}
                    helperText={emailErrors}
                    placeholder="???)example@example.com"
                    size="small"
                    fullWidth
                    value={restaurantEmail}
                    onChange={e => setRestaurantEmail(e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell style={{ border: '1px solid #ddd', width: '140px' }}>
                  ??????????????????
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <TextField
                    error={postNumberErrors}
                    helperText={postNumberErrors}
                    placeholder="???)2310412"
                    size="small"
                    fullWidth
                    value={restaurantPostNumber}
                    onChange={e => setRestaurantPostNumber(e.target.value)}
                  />
                  <Grid style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <Button variant="contained" onClick={autoAddress}>
                      ??????????????????
                    </Button>
                  </Grid>
                </TableCell>
                <TableCell
                  style={{ border: '1px solid #ddd', minWidth: '120px' }}>
                  ???????????????
                </TableCell>
                <TableCell
                  style={{ border: '1px solid #f3f3f3', maxWidth: '500px' }}
                  colSpan={3}>
                  <Typography variant="small">
                    ??????1(?????????????????????????????????????????????)
                  </Typography>
                  <TextField
                    error={addressErrors}
                    helperText={addressErrors}
                    placeholder="???)????????????????????????????????????1-1"
                    size="small"
                    fullWidth
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    style={{ marginBottom: '1rem' }}
                  />
                  <Typography variant="small">???????????????</Typography>
                  <TextField
                    error={addressAfterErrors}
                    helperText={addressAfterErrors}
                    placeholder="???)????????????5???"
                    size="small"
                    fullWidth
                    value={addressAfter}
                    onChange={e => setAddressAfter(e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  ??????????????????
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <TextField
                    error={telErrors}
                    helperText={telErrors}
                    placeholder="???)09000000000"
                    size="small"
                    fullWidth
                    value={restaurantTel}
                    onChange={e => setRestaurantTel(e.target.value)}
                  />
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd', width: '140px' }}>
                  ?????????????????????
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }} colSpan={3}>
                  <TextField
                    error={representativeTelErrors}
                    helperText={representativeTelErrors}
                    placeholder="???)09000000000"
                    size="small"
                    fullWidth
                    value={representativeTel}
                    onChange={e => setRepresentativeTel(e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell
                  style={{ border: '1px solid #ddd', minWidth: '120px' }}>
                  ??????
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <FormControl sx={{ m: 1 }} size="small">
                    <Typography variant="small">
                      ?????????????????????????????????????????????????????????
                    </Typography>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={lunchBudget}
                      onChange={lunchBudgetChange}>
                      {budgets.map((data, index) => (
                        <MenuItem value={data.id} key={index}>
                          {data.price}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Typography variant="small">
                      ????????????????????????????????????????????????????????????
                    </Typography>
                    <Select value={dinnerBudget} onChange={dinnerBudgetChange}>
                      {budgets.map((data, index) => (
                        <MenuItem value={data.id} key={index}>
                          {data.price}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd', width: '140px' }}>
                  ??????????????????
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }} colSpan={3}>
                  <span>???????????????</span>
                  <span style={{ float: 'right' }}>????????????</span>
                  <Slider
                    value={sliderValue}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={5}
                    onChange={sliderChange}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell
                  style={{ border: '1px solid #ddd', minWidth: '120px' }}>
                  ???????????????
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Typography variant="small">
                      ????????????????????????????????????????????????
                    </Typography>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={categories}
                      onChange={handleChange}>
                      {mainCategories.map((data, index) => (
                        <MenuItem value={data.id} key={index}>
                          {data.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Typography variant="small">
                      ????????????????????????????????????????????????
                    </Typography>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={subCategoriesId}
                      onChange={subCategoryChange}>
                      <MenuItem value={0}>
                        <em>????????????????????????</em>
                      </MenuItem>
                      {subCategories.map((data, index) => {
                        if (data.main_category_id == categories) {
                          return (
                            <MenuItem value={data.id} key={index}>
                              {data.name}
                            </MenuItem>
                          )
                        }
                      })}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  ?????????
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Select
                      value={regularHoliday}
                      onChange={changeRegularHoliday}>
                      <MenuItem value={1}>?????????</MenuItem>
                      <MenuItem value={2}>?????????</MenuItem>
                      <MenuItem value={3}>?????????</MenuItem>
                      <MenuItem value={4}>?????????</MenuItem>
                      <MenuItem value={5}>?????????</MenuItem>
                      <MenuItem value={6}>?????????</MenuItem>
                      <MenuItem value={7}>?????????</MenuItem>
                      <MenuItem value={8}>??????</MenuItem>
                      <MenuItem value={9}>????????????</MenuItem>
                      <MenuItem value={10}>?????????</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  ??????????????????
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Select value={takeOut} onChange={takeOutChange}>
                      <MenuItem value={1}>???</MenuItem>
                      <MenuItem value={0}>???</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell style={{ border: '1px solid #ddd', width: '140px' }}>
                  ?????????????????????????????????????????????????????????
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }} colSpan={5}>
                  <TextField
                    multiline
                    rows={8}
                    fullWidth
                    value={feature}
                    onChange={featureChange}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Grid style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button variant="contained" onClick={submit}>
          ???????????????
        </Button>
      </Grid>
    </>
  )
}
export default RegistRestaurant
