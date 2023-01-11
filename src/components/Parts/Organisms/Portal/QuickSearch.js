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
import { useRouter } from 'next/router'

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
  const router = useRouter()
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
  const searchExec = () => {
    router.push({
      pathname: '/portal/list',
      query: { PF: prefecture, MC: mainCategory, PR: budget },
    })
  }
  return (
    <QuickGrid>
      <Grid style={{ display: 'flex', alignItems: 'center' }}>
        <SearchIcon />
        <Typography variant="h5">クイック検索</Typography>
      </Grid>
      <Grid container spacing={2} style={{ alignItems: 'center' }}>
        <Grid item xs={3.5}>
          <FormControl fullWidth size="small" sx={{ m: 1, minWidth: '70%' }}>
            <InputLabel id="demo-simple-select-label">都道府県</InputLabel>
            <Select
              label="都道府県"
              value={prefecture}
              onChange={prefectureChange}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              MenuProps={MenuProps}>
              {prefectures.map((data, index) => (
                <MenuItem value={data.alias} key={index}>
                  {data.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3.5}>
          <FormControl fullWidth size="small" sx={{ m: 1, minWidth: '70%' }}>
            <InputLabel id="demo-simple-select-label">
              お店のジャンル
            </InputLabel>
            <Select
              label="お店のジャンル"
              value={mainCategory}
              onChange={mainCategoryChange}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              MenuProps={MenuProps}>
              {mainCategories.map((data, index) => (
                <MenuItem value={data.alias} key={index}>
                  {data.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3.5}>
          <FormControl fullWidth size="small" sx={{ m: 1, minWidth: '70%' }}>
            <InputLabel id="demo-simple-select-label">予算</InputLabel>
            <Select
              label="予算"
              value={budget}
              onChange={budgetChange}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              MenuProps={MenuProps}>
              {budgets.map((data, index) => (
                <MenuItem value={data.alias} key={index}>
                  {data.price}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1.5}>
          <Button
            variant="contained"
            onClick={searchExec}
            disabled={!(prefecture && mainCategory && budget)}>
            検索
          </Button>
        </Grid>
      </Grid>
    </QuickGrid>
  )
}
export default QuickSearch
