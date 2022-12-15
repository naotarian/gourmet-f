import axios from '@/lib/axios'
import { useState, useEffect, useContext, useRef } from 'react'
import AdminMenu from '@/components/Parts/Template/Admin/AdminMenu'
import WrapperGrid from '@/components/Parts/Atoms/Admin/WrapperGrid'
import ContentsGrid from '@/components/Parts/Atoms/Admin/ContentsGrid'
import TitleGrid from '@/components/Parts/Atoms/Admin/TitleGrid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { ActiveIdContext } from '@/pages/_app'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
)
const information = props => {
  // const restaurant = props.res.restaurant
  // console.log(restaurant)
  const [open, setOpen] = useState(true)
  const ref = useRef(true)
  const [restaurant, setRestaurant] = useState(props.res.restaurant)
  const { activeIdCxt } = useContext(ActiveIdContext)
  useEffect(() => {
    ;(async () => {
      if (ref.current) {
        ref.current = false
        return
      }
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
              {restaurant && (
                <>
                  <Grid item xs={4}>
                    <Card sx={{ maxWidth: 400, cursor: 'pointer' }}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {restaurant.restaurant_name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              )}
            </Grid>
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
