import { useState } from 'react'
//mui
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
//style
import styled from 'styled-components'
//icons
import SearchIcon from '@mui/icons-material/Search'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const QuickGrid = styled(Grid)`
  margin: 2rem auto;
`
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}
const QuickSearch = props => {
  const { prefectures, mainCategories, budgets } = props
  const [prefecture, setPrefecture] = useState(0)
  const [mainCategory, setMainCategory] = useState(0)
  const [budget, setBudget] = useState(0)
  const prefectureChange = e => {
    setPrefecture(e.target.value)
  }
  const mainCategoryChange = e => {
    setMainCategory(e.target.value)
  }
  const budgetChange = e => {
    setBudget(e.target.value)
  }
  return (
    <QuickGrid>
      <Grid style={{ display: 'flex', alignItems: 'center' }}>
        <SearchIcon />
        <Typography variant="h5">クイック検索</Typography>
      </Grid>
      <Grid container spacing={2} style={{ alignItems: 'center' }}>
        <Grid item xs={3}>
          <FormControl size="small" sx={{ m: 1, minWidth: '70%' }}>
            <InputLabel id="demo-simple-select-label">都道府県</InputLabel>
            <Select
              value={prefecture}
              onChange={prefectureChange}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              MenuProps={MenuProps}>
              {prefectures.map((data, index) => (
                <MenuItem value={data.id} key={index}>
                  {data.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl size="small" sx={{ m: 1, minWidth: '70%' }}>
            <InputLabel id="demo-simple-select-label">
              お店のジャンル
            </InputLabel>
            <Select
              value={mainCategory}
              onChange={mainCategoryChange}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              MenuProps={MenuProps}>
              {mainCategories.map((data, index) => (
                <MenuItem value={data.id} key={index}>
                  {data.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl size="small" sx={{ m: 1, minWidth: '70%' }}>
            <InputLabel id="demo-simple-select-label">予算</InputLabel>
            <Select
              value={budget}
              onChange={budgetChange}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              MenuProps={MenuProps}>
              {budgets.map((data, index) => (
                <MenuItem value={data.id} key={index}>
                  {data.price}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">検索</Button>
        </Grid>
      </Grid>
    </QuickGrid>
  )
}
export default QuickSearch
