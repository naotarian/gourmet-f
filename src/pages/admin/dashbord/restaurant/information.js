import axios from '@/lib/axios'
import { useState, useEffect, useContext, useRef } from 'react'
import AdminMenu from '@/components/Parts/Template/Admin/AdminMenu'
import WrapperGrid from '@/components/Parts/Atoms/Admin/WrapperGrid'
import ContentsGrid from '@/components/Parts/Atoms/Admin/ContentsGrid'
import TitleGrid from '@/components/Parts/Atoms/Admin/TitleGrid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Button from '@mui/material/Button'
import Link from 'next/link'
import InformationEdit from '@/components/Parts/Organisms/Admin/Restaurant/InformationEdit'
import styled from 'styled-components'

import { ActiveIdContext } from '@/pages/_app'
const ButtonArea = styled(Grid)`
  margin: 2rem auto;
  text-align: center;
`
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

const information = props => {
  const [open, setOpen] = useState(true)
  const ref = useRef(true)
  const [restaurant, setRestaurant] = useState(props.res.restaurant)
  console.log(restaurant)
  const { activeIdCxt } = useContext(ActiveIdContext)
  const [tabNum, setTabNum] = useState(0)

  const TabChange = (event, newValue) => {
    setTabNum(newValue)
  }
  useEffect(() => {
    ;(async () => {
      if (ref.current) {
        ref.current = false
        return
      }
      if (!restaurant) return
      if (restaurant.id !== activeIdCxt) {
        const res = await axios.get('/api/admin/restaurant/information')
        setRestaurant(res.data.restaurant)
      }
    })()
  }, [activeIdCxt])
  return (
    <>
      <>
        <AdminMenu open={open} setOpen={setOpen} />
        <WrapperGrid open={open}>
          <TitleGrid title="店舗情報" />
          <ContentsGrid>
            <Grid container spacing={2}>
              {restaurant ? (
                <>
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs
                        value={tabNum}
                        onChange={TabChange}
                        aria-label="basic tabs example">
                        <Tab label="基本設定" />
                        <Tab label="通知設定" />
                      </Tabs>
                    </Box>
                    <TabPanel value={tabNum} index={0}>
                      <InformationEdit
                        restaurant={restaurant}
                        setRestaurant={setRestaurant}
                      />
                    </TabPanel>
                    <TabPanel value={tabNum} index={1}>
                      Item Two
                    </TabPanel>
                    <TabPanel value={tabNum} index={2}>
                      Item Three
                    </TabPanel>
                  </Box>
                </>
              ) : (
                <>
                  <Alert
                    variant="filled"
                    severity="warning"
                    style={{ margin: '2rem auto' }}>
                    <AlertTitle>店舗が登録されていません。</AlertTitle>

                    <Typography variant="h6">
                      <Link href="/admin/dashbord/restaurant/register">
                        こちら
                      </Link>
                      から店舗を登録できます。
                    </Typography>
                  </Alert>
                </>
              )}
            </Grid>
            <ButtonArea>
              <Button variant="contained">更新</Button>
            </ButtonArea>
          </ContentsGrid>
        </WrapperGrid>
      </>
    </>
  )
}
export default information

export const getServerSideProps = async ctx => {
  const cookie = ctx.req?.headers.cookie
  const res = await axios.get('/api/admin/restaurant/information', {
    headers: {
      origin: process.env.ORIGIN,
      cookie: cookie,
    },
  })
  return {
    props: {
      res: res.data,
    },
  }
}
