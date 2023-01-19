import { useState } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TopContent from '@/components/Parts/Organisms/Portal/Detail/TopContent'
import MenuContent from '@/components/Parts/Organisms/Portal/Detail/MenuContent'
import PhotoContent from '@/components/Parts/Organisms/Portal/Detail/PhotoContent'
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}
const tabStyle = {
  // background: 'linear-gradient(45deg, #FCA400 10%, #FCA400 90%)',
  background: '#fff',
  // borderRadius: 3,
  border: '1px solid #ECECEC',
  // color: 'white',
  color: '#000',
  height: 48,
  padding: '0 30px',
  opacity: 1,
  // boxShadow: 0 3px 5px 2px rgba(32, 167, 222, .3)',
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}
const DetailTabContents = props => {
  const { images, store } = props
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example">
          <Tab label="トップ" {...a11yProps(0)} style={tabStyle} />
          <Tab label="メニュー" {...a11yProps(1)} style={tabStyle} />
          <Tab label="写真" {...a11yProps(2)} style={tabStyle} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TopContent images={images} store={store} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MenuContent />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <PhotoContent />
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}
export default DetailTabContents
