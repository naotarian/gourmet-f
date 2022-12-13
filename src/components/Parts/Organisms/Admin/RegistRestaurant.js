import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const RegistRestaurant = props => {
  const { datas } = props
  console.log(datas)
  const mainCategories = datas.main_categories
  const subCategories = datas.sub_categories
  const budgets = datas.budgets
  const [categories, setCategories] = useState(1)
  const [subCategoriesId, setSubCategoriesId] = useState(1)
  const [regularHoliday, setRegularHoliday] = useState(1)
  const [lunchBudget, setLunchBudget] = useState(1)
  const [dinnerBudget, setDinnerBudget] = useState(3)
  const [takeOut, setTakeOut] = useState(1)

  const handleChange = event => {
    setCategories(event.target.value)
    setSubCategoriesId(0)
  }
  const changeRegularHoliday = event => {
    setRegularHoliday(event.target.value)
  }
  const subCategoryChange = e => {
    setSubCategoriesId(e.target.value)
  }
  const lunchBudgetChange = e => {
    setLunchBudget(e.target.value)
  }
  const dinnerBudgetChange = e => {
    setDinnerBudget(e.target.value)
  }
  const takeOutChange = e => {
    setTakeOut(e.target.value)
  }
  return (
    <>
      {datas && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  店舗名
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }} colSpan={2}>
                  <TextField placeholder="例)●●屋▲▲店" size="small" fullWidth />
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  店舗メールアドレス
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }} colSpan={2}>
                  <TextField
                    placeholder="例)example@example.com"
                    size="small"
                    fullWidth
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  店舗郵便番号
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <TextField placeholder="例)2310412" size="small" fullWidth />
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  店舗所在地
                </TableCell>
                <TableCell
                  style={{ border: '1px solid #f3f3f3' }}
                  colSpan={3}
                  style={{ maxWidth: '500px' }}>
                  <Typography variant="small">
                    住所1(郵便番号から自動入力できます。)
                  </Typography>
                  <TextField
                    placeholder="例)神奈川県横浜市中区●●町1-1"
                    size="small"
                    fullWidth
                    style={{ marginBottom: '1rem' }}
                  />
                  <Typography variant="small">以降の住所</Typography>
                  <TextField
                    placeholder="例)●●ビル5階"
                    size="small"
                    fullWidth
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  店舗電話番号
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <TextField placeholder="例)2310412" size="small" fullWidth />
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  カテゴリー
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Typography variant="small">
                      大カテゴリーを選択してください。
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
                    <Typography variant="small">
                      小カテゴリーを選択してください。
                    </Typography>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={subCategoriesId}
                      onChange={subCategoryChange}>
                      <MenuItem value={0}>
                        <em>選択してください</em>
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
                  定休日
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Select
                      value={regularHoliday}
                      onChange={changeRegularHoliday}>
                      <MenuItem value={1}>月曜日</MenuItem>
                      <MenuItem value={2}>火曜日</MenuItem>
                      <MenuItem value={3}>水曜日</MenuItem>
                      <MenuItem value={4}>木曜日</MenuItem>
                      <MenuItem value={5}>金曜日</MenuItem>
                      <MenuItem value={6}>土曜日</MenuItem>
                      <MenuItem value={7}>日曜日</MenuItem>
                      <MenuItem value={8}>祝日</MenuItem>
                      <MenuItem value={9}>年中無休</MenuItem>
                      <MenuItem value={10}>不定休</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell style={{ border: '1px solid #ddd' }}>予算</TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <TextField placeholder="例)2310412" size="small" fullWidth />
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>予算</TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Typography variant="small">
                      ランチタイムの予算を選択してください。
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
                    <Typography variant="small">
                      ディナータイムの予算を入力してください。
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
                <TableCell style={{ border: '1px solid #ddd' }}>
                  テイクアウト
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Select value={takeOut} onChange={takeOutChange}>
                      <MenuItem value={1}>有</MenuItem>
                      <MenuItem value={0}>無</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  店舗の特徴・お客様へのアピールポイント
                </TableCell>
                <TableCell style={{ border: '1px solid #ddd' }} colSpan={5}>
                  <TextField multiline rows={8} fullWidth />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}
export default RegistRestaurant
