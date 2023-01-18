import axios from '@/lib/axios'
import { useState, useEffect, useContext, useRef } from 'react'
//components
import PageTemplate from '@/components/Parts/Template/Admin/PageTemplate'
import TabTop from '@/components/Parts/Organisms/Admin/Portal/TabTop'
import TabSetting from '@/components/Parts/Organisms/Admin/Portal/TabSetting'
//mui
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import OutlinedInput from '@mui/material/OutlinedInput'
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
            <Tab value={3} label="店舗設定" />
          </Tabs>
        </Box>
        <TabPanel value={tabNum} index={0}>
          <Box sx={{ flexGrow: 1 }}>
            <TabTop />
          </Box>
        </TabPanel>
        <TabPanel value={tabNum} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={tabNum} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={tabNum} index={3}>
          <TabSetting />
        </TabPanel>
      </PageTemplate>
    </>
  )
}
export default index
