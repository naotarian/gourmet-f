import axios from '@/lib/axios'
import { useState, useEffect, useContext, useRef } from 'react'
//components
import PageTemplate from '@/components/Parts/Template/Admin/PageTemplate'
//mui
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import OutlinedInput from '@mui/material/OutlinedInput'
import ReactCrop from 'react-image-crop'
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const index = () => {
  const [open, setOpen] = useState(true)
  const ref = useRef(true)
  const imageRef = useRef(null)
  const [tabNum, setTabNum] = useState(0)

  const handleChange = (event, newValue) => {
    setTabNum(newValue)
  }
  const [crop, setCrop] = useState({
    unit: '%', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  })

  const fileChange = e => {
    console.log(e.target.files[0])
  }

  return (
    <>
      <PageTemplate
        open={open}
        setOpen={setOpen}
        title="ポータルサイト表示設定">
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={tabNum}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary">
            <Tab value={0} label="トップ" />
            <Tab value={1} label="メニュー" />
            <Tab value={2} label="店内・外観" />
          </Tabs>
        </Box>
        <TabPanel value={tabNum} index={0}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h6">フォトギャラリー設定</Typography>
              </Grid>
              <Grid item xs={8}>
                <input
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={fileChange}
                />
                <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                  <img src={src} />
                </ReactCrop>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={tabNum} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={tabNum} index={2}>
          Item Three
        </TabPanel>
      </PageTemplate>
    </>
  )
}
export default index
